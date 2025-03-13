/**
 * Fetches GitHub statistics for a given username
 * Uses the public GitHub API
 */
export const fetchGitHubStats = async (username, retries = 2) => {
  // Try to get cached stats first
  const cachedStats = getCachedStats();
  
  try {
    // Using the GitHub API
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub stats: ${response.status}`);
    }
    
    const data = await response.json();
    
    const stats = {
      publicRepos: data.public_repos || 0,
      followers: data.followers || 0,
      following: data.following || 0,
      timestamp: Date.now(),
      success: true
    };
    
    // Cache the stats
    cacheStats(stats);
    
    return stats;
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    // Retry the request if retries are available
    if (retries > 0) {
      console.log(`Retrying GitHub stats fetch. Retries left: ${retries}`);
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      return fetchGitHubStats(username, retries - 1);
    }
    
    // Return cached stats if available, otherwise fallback to default
    if (cachedStats) {
      console.log('Using cached GitHub stats');
      return { ...cachedStats, success: false };
    }
    
    // Return a fallback value if the API fails and no cache is available
    return {
      publicRepos: 10, // Fallback to your current static value
      followers: 0,
      following: 0,
      timestamp: Date.now(),
      success: false
    };
  }
};

// Helper function to cache stats in localStorage
const cacheStats = (stats) => {
  try {
    localStorage.setItem('githubStats', JSON.stringify(stats));
  } catch (error) {
    console.error('Error caching GitHub stats:', error);
  }
};

// Helper function to get cached stats from localStorage
const getCachedStats = () => {
  try {
    const cachedStats = localStorage.getItem('githubStats');
    if (!cachedStats) return null;
    
    const stats = JSON.parse(cachedStats);
    
    // Check if cache is older than 24 hours
    const cacheAge = Date.now() - (stats.timestamp || 0);
    const cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    if (cacheAge > cacheExpiry) {
      // Cache is too old, remove it
      localStorage.removeItem('githubStats');
      return null;
    }
    
    return stats;
  } catch (error) {
    console.error('Error getting cached GitHub stats:', error);
    return null;
  }
}; 