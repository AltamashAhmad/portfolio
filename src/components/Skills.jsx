import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { categories, coreSkillNames, skillsData } from '../data/skillsData';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllSkills, setShowAllSkills] = useState(false);
  

  
  // Filter skills based on category
  const categoryFilteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  // Only apply "core skills only" filter when viewing ALL skills.
  // When a specific category is selected, always show every skill in that category.
  const filteredSkills = (activeCategory === 'all' && !showAllSkills)
    ? categoryFilteredSkills.filter(skill => coreSkillNames.includes(skill.name))
    : categoryFilteredSkills;
  

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-gray-900 dark:text-white">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid - Mobile: 2 per row, Desktop: 3-4 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
              whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center justify-center bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl p-5 sm:p-6 transition-all border border-gray-100 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Background glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="text-4xl sm:text-5xl p-3 sm:p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 group-hover:scale-110 transition-transform duration-300 ease-out shadow-sm dark:shadow-none">
                  {skill.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Toggle */}
        {activeCategory === 'all' && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => {
                if (showAllSkills) {
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }
                setShowAllSkills(!showAllSkills);
              }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              {showAllSkills ? (
                <>
                  Show Core Skills Only
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  View All Skills ({skillsData.length - filteredSkills.length} more)
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Skills; 