/**
 * Fetches LeetCode statistics for a given username
 * Uses the public LeetCode Stats API with localStorage caching and retry mechanism
 */
export const fetchLeetCodeStats = async (username, retries = 2) => {
  // Try to get cached stats first
  const cachedStats = getCachedStats();
  
  try {
    // Using the LeetCode Stats API
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch LeetCode stats: ${response.status}`);
    }
    
    const data = await response.json();
    
    const stats = {
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      acceptanceRate: data.acceptanceRate || 0,
      ranking: data.ranking || 0,
      contributionPoints: data.contributionPoints || 0,
      timestamp: Date.now(),
      success: true
    };
    
    // Cache the stats
    cacheStats(stats);
    
    return stats;
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    
    // Retry the request if retries are available
    if (retries > 0) {
      console.log(`Retrying LeetCode stats fetch. Retries left: ${retries}`);
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      return fetchLeetCodeStats(username, retries - 1);
    }
    
    // Return cached stats if available, otherwise fallback to default
    if (cachedStats) {
      console.log('Using cached LeetCode stats');
      return { ...cachedStats, success: false };
    }
    
    // Return a fallback value if the API fails and no cache is available
    return {
      totalSolved: 200, // Fallback to your current static value
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      acceptanceRate: 0,
      ranking: 0,
      contributionPoints: 0,
      timestamp: Date.now(),
      success: false
    };
  }
};

// Helper function to cache stats in localStorage
const cacheStats = (stats) => {
  try {
    localStorage.setItem('leetcodeStats', JSON.stringify(stats));
  } catch (error) {
    console.error('Error caching LeetCode stats:', error);
  }
};

// Helper function to get cached stats from localStorage
const getCachedStats = () => {
  try {
    const cachedStats = localStorage.getItem('leetcodeStats');
    if (!cachedStats) return null;
    
    const stats = JSON.parse(cachedStats);
    
    // Check if cache is older than 24 hours
    const cacheAge = Date.now() - (stats.timestamp || 0);
    const cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    if (cacheAge > cacheExpiry) {
      // Cache is too old, remove it
      localStorage.removeItem('leetcodeStats');
      return null;
    }
    
    return stats;
  } catch (error) {
    console.error('Error getting cached LeetCode stats:', error);
    return null;
  }
}; 