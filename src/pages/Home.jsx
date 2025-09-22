import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import { fetchLeetCodeStats } from '../utils/leetcodeStats';
import { fetchGitHubStats } from '../utils/githubStats';

function Home() {
  const [leetCodeStats, setLeetCodeStats] = useState({
    totalSolved: 200, // Default value until API responds
    loading: true
  });
  
  const [githubStats, setGithubStats] = useState({
    publicRepos: 10, // Default value until API responds
    loading: true
  });
  
  // Smooth scroll functions for different sections
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  useEffect(() => {
    const getLeetCodeStats = async () => {
      try {
        setLeetCodeStats(prev => ({ ...prev, loading: true }));
        const stats = await fetchLeetCodeStats('altamash_96');
        setLeetCodeStats({
          totalSolved: stats.totalSolved,
          lastUpdated: stats.timestamp ? new Date(stats.timestamp) : new Date(),
          loading: false,
          success: stats.success
        });
      } catch (error) {
        console.error('Error in getLeetCodeStats:', error);
        setLeetCodeStats(prev => ({ 
          ...prev, 
          loading: false,
          success: false
        }));
      }
    };
    
    getLeetCodeStats();
  }, []);
  
  // Fetch GitHub stats
  useEffect(() => {
    const getGitHubStats = async () => {
      try {
        setGithubStats(prev => ({ ...prev, loading: true }));
        const stats = await fetchGitHubStats('AltamashAhmad');
        setGithubStats({
          publicRepos: stats.publicRepos,
          lastUpdated: stats.timestamp ? new Date(stats.timestamp) : new Date(),
          loading: false,
          success: stats.success
        });
      } catch (error) {
        console.error('Error in getGitHubStats:', error);
        setGithubStats(prev => ({ 
          ...prev, 
          loading: false,
          success: false
        }));
      }
    };
    
    getGitHubStats();
  }, []);
  
  // Calculate total experience in years
  const calculateTotalExperience = useMemo(() => {
    // Ekai experience (June 2024 to present)
    const ekaiStart = new Date(2024, 5, 1); // June 2024
    const ekaiEnd = new Date(); // Present
    
    // Quvor experience (July 2023 to March 2024)
    const quvorStart = new Date(2023, 6, 1); // July 2023
    const quvorEnd = new Date(2024, 2, 1); // March 2024
    
    // Kalvium experience (December 2022 to March 2023)
    const kalviumStart = new Date(2022, 11, 1); // December 2022
    const kalviumEnd = new Date(2023, 2, 1); // March 2023
    
    // Calculate months for each experience
    let ekaiMonths = 0;
    // Only count Ekai experience if the start date is in the past
    if (ekaiStart <= ekaiEnd) {
      ekaiMonths = (ekaiEnd.getFullYear() - ekaiStart.getFullYear()) * 12 + 
                  (ekaiEnd.getMonth() - ekaiStart.getMonth());
    }
    
    const quvorMonths = (quvorEnd.getFullYear() - quvorStart.getFullYear()) * 12 + 
                       (quvorEnd.getMonth() - quvorStart.getMonth());
    
    const kalviumMonths = (kalviumEnd.getFullYear() - kalviumStart.getFullYear()) * 12 + 
                         (kalviumEnd.getMonth() - kalviumStart.getMonth());
    
    // Total experience in months
    const totalMonths = ekaiMonths + quvorMonths + kalviumMonths;
    
    // Convert to years (rounded to 1 decimal place)
    const totalYears = Math.round((totalMonths / 12) * 10) / 10;
    
    return totalYears;
  }, []);

  const downloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Altamash_Ahmad_CV.pdf'; // Make sure this matches your CV file name
    link.download = 'Altamash_Ahmad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home">
      <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-8 transition-colors duration-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-primary font-medium text-lg mb-2">
                  Welcome to my Portfolio
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                  Hi, I&apos;m{' '}
                  <span className="text-primary">Altamash Ahmad</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl transition-colors duration-200">
                  <span className="font-semibold">Full Stack Software Developer</span> specializing in modern web technologies and scalable applications. 
                  Built production systems with <span className="font-semibold text-primary">React, Node.js</span>, and cloud technologies. Experienced in <span className="font-semibold text-primary">AI integrations</span>, 
                  database optimization, and delivering high-performance solutions.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button 
                    onClick={() => scrollToSection('#projects')}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Projects
                  </button>
                  <button 
                    onClick={scrollToSkills}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white dark:bg-transparent dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Technical Skills
                  </button>
                  <button 
                    onClick={() => scrollToSection('#contact')}
                    className="border-2 border-primary bg-white dark:bg-gray-800 text-primary dark:text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Contact Me
                  </button>
                  <button 
                    onClick={downloadCV}
                    className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto md:mx-0"
              >
                <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg dark:shadow-gray-700 transition-all duration-200">
                  <h3 className="text-3xl font-bold text-primary">{calculateTotalExperience}+</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg dark:shadow-gray-700 transition-all duration-200">
                  <h3 className="text-3xl font-bold text-primary">
                    {leetCodeStats.loading ? (
                      <span className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      `${leetCodeStats.totalSolved}+`
                    )}
                  </h3>
                  <div className="relative group">
                    <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">LeetCode Problems</p>
                    {leetCodeStats.lastUpdated && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Last updated: {leetCodeStats.lastUpdated.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg dark:shadow-gray-700 transition-all duration-200">
                  <h3 className="text-3xl font-bold text-primary">500+</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">DSA Problems</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg dark:shadow-gray-700 transition-all duration-200">
                  <h3 className="text-3xl font-bold text-primary">
                    {githubStats.loading ? (
                      <span className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      `${githubStats.publicRepos}+`
                    )}
                  </h3>
                  <div className="relative group">
                    <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">Projects Built</p>
                    {githubStats.lastUpdated && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Last updated: {githubStats.lastUpdated.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl relative z-10">
                <img
                  src="/profile.jpg"
                  alt="Altamash Ahmad"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 -rotate-6 scale-105"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home; 