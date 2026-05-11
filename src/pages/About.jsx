import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { education, experience } from '../data/aboutData';

function About() {

  // Function to calculate duration between two dates
  const calculateDuration = (startDate, endDate) => {
    const end = endDate || new Date(); // Use current date if endDate is null (present)
    
    const monthsDiff = (end.getFullYear() - startDate.getFullYear()) * 12 + 
                       (end.getMonth() - startDate.getMonth());
    
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;
    
    let duration = '';
    
    if (years > 0) {
      duration += `${years} year${years > 1 ? 's' : ''}`;
      if (months > 0) duration += ` ${months} month${months > 1 ? 's' : ''}`;
    } else {
      duration += `${months} month${months > 1 ? 's' : ''}`;
    }
    
    return duration;
  };

  // Function to format date to Month Year format
  const formatDate = (date) => {
    if (!date) return 'Present';
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Professional Experience</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My journey through impactful roles, building scalable systems, and delivering solutions that serve thousands of users across different industries.
        </p>
      </motion.div>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center mb-4">
          <FaBriefcase className="text-xl text-primary mr-2" />
          <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-4 space-y-8 mt-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="relative pl-6 md:pl-8 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800/80 rounded-xl shadow-sm hover:shadow-lg dark:shadow-gray-700 p-5 md:p-6 transition-all border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary font-medium text-base mt-1">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right flex flex-col md:items-end">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-1">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium pl-1 md:pl-0">
                      {calculateDuration(exp.startDate, exp.endDate)}
                    </p>
                  </div>
                </div>
                
                <ul className="relative z-10 space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2.5 mt-1 opacity-70">▹</span>
                      <span className="flex-1 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="relative z-10 flex flex-wrap gap-2 mt-5">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-200 rounded-full text-[11px] font-medium border border-gray-200 dark:border-gray-600 hover:border-primary/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-xl text-primary mr-2" />
          <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-600 p-6 hover:shadow-md dark:hover:shadow-gray-500 transition-all border border-gray-100 dark:border-gray-600"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary mb-1">
                {education[0].degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 md:mb-0">{education[0].institution}</p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{education[0].year}</p>
              <p className="text-primary text-sm font-semibold">{education[0].score}</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      </div>
    </section>
  );
}

export default About;