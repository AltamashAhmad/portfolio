/**
 * Fetches LeetCode statistics for a given username.
 * Strategy: show cached value instantly (great for returning visitors),
 *           then silently refresh in background. Timeout after 5s to avoid hanging.
 */

const CACHE_KEY = 'leetcodeStats';
const CACHE_EXPIRY_MS = 6 * 60 * 60 * 1000; // 6 hours

const getCachedStats = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const stats = JSON.parse(raw);
    const age = Date.now() - (stats.timestamp || 0);
    if (age > CACHE_EXPIRY_MS) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return stats;
  } catch {
    return null;
  }
};

const cacheStats = (stats) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(stats));
  } catch {}
};

const fetchFromAPI = async (username) => {
  // AbortController gives us a hard 5-second timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    // Try the faster alfaarghya API first, fallback to heroku one
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`Status ${response.status}`);

    const data = await response.json();
    const stats = {
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      acceptanceRate: data.acceptanceRate || 0,
      ranking: data.ranking || 0,
      timestamp: Date.now(),
      success: true,
    };
    cacheStats(stats);
    return stats;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
};

export const fetchLeetCodeStats = async (username) => {
  const cached = getCachedStats();

  // If we have a valid cache, return it immediately — no spinner shown.
  // Then kick off a background refresh so next visit is also fast.
  if (cached) {
    // Background refresh (don't await — fire and forget)
    fetchFromAPI(username).catch(() => {});
    return { ...cached, success: true };
  }

  // No cache: one real attempt with a 5s timeout, then use fallback
  try {
    return await fetchFromAPI(username);
  } catch {
    return {
      totalSolved: 300,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      acceptanceRate: 0,
      ranking: 0,
      timestamp: Date.now(),
      success: false,
    };
  }
};