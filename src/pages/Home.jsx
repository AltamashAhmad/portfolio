import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Skills from '../components/Skills';

function Home() {
  const navigate = useNavigate();
  
  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
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
                </div>
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto md:mx-0"
              >
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">96.8</h3>
                  <p className="text-gray-600 mt-1 text-sm">JEE Percentile</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">900+</h3>
                  <p className="text-gray-600 mt-1 text-sm">Queries Resolved</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-primary">500K+</h3>
                  <p className="text-gray-600 mt-1 text-sm">YouTube Views</p>
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