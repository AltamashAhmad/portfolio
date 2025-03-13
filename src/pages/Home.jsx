import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Skills from '../components/Skills';

function Home() {
  const navigate = useNavigate();
  
  // Calculate total experience in months
  const calculateTotalExperience = useMemo(() => {
    // Ekai experience (September 2024 to present)
    const ekaiStart = new Date(2024, 8, 1); // September 2024
    const ekaiEnd = new Date(); // Present
    
    // Kalvium experience (June 2023 to September 2023)
    const kalviumStart = new Date(2023, 5, 1); // June 2023
    const kalviumEnd = new Date(2023, 8, 1); // September 2023
    
    // Calculate months for each experience
    let ekaiMonths = 0;
    // Only count Ekai experience if the start date is in the past
    if (ekaiStart <= ekaiEnd) {
      ekaiMonths = (ekaiEnd.getFullYear() - ekaiStart.getFullYear()) * 12 + 
                  (ekaiEnd.getMonth() - ekaiStart.getMonth());
    }
    
    const kalviumMonths = (kalviumEnd.getFullYear() - kalviumStart.getFullYear()) * 12 + 
                         (kalviumEnd.getMonth() - kalviumStart.getMonth());
    
    // Total experience in months
    const totalMonths = ekaiMonths + kalviumMonths;
    
    return totalMonths;
  }, []);
  
  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

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
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
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
                  Welcome to my portfolio
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4">
                  Hi, I&apos;m{' '}
                  <span className="text-primary">Altamash Ahmad</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  Full Stack Software Developer specializing in building scalable web applications
                  with modern technologies.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button 
                    onClick={() => navigate('/projects')}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Projects
                  </button>
                  <button 
                    onClick={scrollToSkills}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Technical Skills
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Contact Me
                  </button>
                  <button 
                    onClick={downloadCV}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
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
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">{calculateTotalExperience}+</h3>
                  <p className="text-gray-600 mt-1 text-sm">Months Experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">200+</h3>
                  <p className="text-gray-600 mt-1 text-sm">LeetCode Problems</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">500+</h3>
                  <p className="text-gray-600 mt-1 text-sm">DSA Problems</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">10+</h3>
                  <p className="text-gray-600 mt-1 text-sm">Projects Built</p>
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

      <Skills />
    </>
  );
}

export default Home; 