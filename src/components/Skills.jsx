import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaReact, FaNodeJs, FaJava, FaDatabase, FaCode, 
  FaServer, FaGithub, FaDocker, FaAws, FaJs, FaPython
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMysql, SiMongodb, SiRedis, 
  SiTailwindcss, SiExpress, SiCplusplus, SiTypescript,
  SiMantine, SiDirectus, SiSwagger, SiOpenai, SiSlack
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsCodeSlash, BsGearFill } from 'react-icons/bs';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'cs', name: 'Computer Science' },
  ];
  
  // Define core/most important skills
  const coreSkillNames = [
    "JavaScript", "React", "Node.js", "Java", "MongoDB", 
    "Express.js", "Tailwind CSS", "Git & GitHub", "Data Structures", "Algorithms"
  ];
  
  const skillsData = [
    {
      name: "JavaScript",
      level: 90,
      category: "languages",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "Python",
      level: 80,
      category: "languages",
      icon: <FaPython className="text-blue-500" />,
    },
    {
      name: "TypeScript",
      level: 70,
      category: "languages",
      icon: <SiTypescript className="text-blue-500" />,
    },
    {
      name: "Java",
      level: 85,
      category: "languages",
      icon: <FaJava className="text-red-500" />,
    },
    {
      name: "C++",
      level: 80,
      category: "languages",
      icon: <SiCplusplus className="text-blue-600" />,
    },
    {
      name: "React",
      level: 90,
      category: "frontend",
      icon: <FaReact className="text-blue-400" />,
    },
    {
      name: "Mantine UI",
      level: 85,
      category: "frontend",
      icon: <SiMantine className="text-blue-600" />,
    },
    {
      name: "Next.js",
      level: 75,
      category: "frontend",
      icon: <TbBrandNextjs className="text-black" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "frontend",
      icon: <SiTailwindcss className="text-cyan-500" />,
    },
    {
      name: "Node.js",
      level: 90,
      category: "backend",
      icon: <FaNodeJs className="text-green-600" />,
    },
    {
      name: "Express.js",
      level: 85,
      category: "backend",
      icon: <SiExpress className="text-gray-600" />,
    },
    {
      name: "OpenAI API",
      level: 85,
      category: "backend",
      icon: <SiOpenai className="text-green-500" />,
    },
    {
      name: "Slack API",
      level: 80,
      category: "backend",
      icon: <SiSlack className="text-purple-600" />,
    },
    {
      name: "Spring Boot",
      level: 70,
      category: "backend",
      icon: <SiSpringboot className="text-green-500" />,
    },
    {
      name: "MySQL",
      level: 80,
      category: "database",
      icon: <SiMysql className="text-blue-800" />,
    },
    {
      name: "MongoDB",
      level: 75,
      category: "database",
      icon: <SiMongodb className="text-green-500" />,
    },
    {
      name: "Redis",
      level: 80,
      category: "database",
      icon: <SiRedis className="text-red-600" />,
    },
    {
      name: "Directus CMS",
      level: 75,
      category: "devops",
      icon: <SiDirectus className="text-purple-600" />,
    },
    {
      name: "Git & GitHub",
      level: 90,
      category: "devops",
      icon: <FaGithub className="text-gray-800" />,
    },
    {
      name: "Docker",
      level: 75,
      category: "devops",
      icon: <FaDocker className="text-blue-500" />,
    },
    {
      name: "AWS",
      level: 75,
      category: "devops",
      icon: <FaAws className="text-orange-500" />,
    },
    {
      name: "Swagger",
      level: 80,
      category: "devops",
      icon: <SiSwagger className="text-green-600" />,
    },
    {
      name: "Data Structures",
      level: 90,
      category: "cs",
      icon: <BsCodeSlash className="text-purple-600" />,
    },
    {
      name: "Algorithms",
      level: 85,
      category: "cs",
      icon: <FaCode className="text-indigo-600" />,
    },
    {
      name: "System Design",
      level: 80,
      category: "cs",
      icon: <BsGearFill className="text-gray-700" />,
    },
    {
      name: "OOP",
      level: 90,
      category: "cs",
      icon: <FaServer className="text-teal-600" />,
    },
  ];
  
  // Filter skills based on category
  const categoryFilteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  // Further filter based on showAllSkills toggle
  const filteredSkills = showAllSkills 
    ? categoryFilteredSkills 
    : categoryFilteredSkills.filter(skill => coreSkillNames.includes(skill.name));
  
  const getLevelColor = (level) => {
    if (level >= 85) return 'bg-green-500';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 65) return 'bg-yellow-500';
    return 'bg-orange-500';
  };
  
  const getLevelText = (level) => {
    if (level >= 85) return 'Advanced';
    if (level >= 75) return 'Proficient';
    if (level >= 65) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
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
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md dark:shadow-gray-600 p-3 sm:p-5 hover:shadow-lg dark:hover:shadow-gray-500 transition-all border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="text-xl sm:text-2xl">{skill.icon}</div>
                <h3 className="text-sm sm:text-lg font-medium text-gray-800 dark:text-white leading-tight">{skill.name}</h3>
              </div>
              
              <div className="mt-1 sm:mt-2">
                <div className="flex justify-between mb-1 sm:mb-1.5 text-xs sm:text-sm">
                  <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-white text-xs ${getLevelColor(skill.level)}`}>
                    {getLevelText(skill.level)}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm">{skill.level}%</span>
                </div>
                <div className="h-1.5 sm:h-2 bg-gray-100 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${getLevelColor(skill.level)}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Toggle */}
        {activeCategory === 'all' && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
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