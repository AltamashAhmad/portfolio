import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaReact, FaNodeJs, FaJava, FaDatabase, FaCode, 
  FaServer, FaGithub, FaDocker, FaAws, FaJs
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMysql, SiMongodb, SiRedis, 
  SiTailwindcss, SiExpress, SiCplusplus, SiTypescript
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsCodeSlash, BsGearFill } from 'react-icons/bs';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'cs', name: 'Computer Science' },
  ];
  
  const skillsData = [
    {
      name: "JavaScript",
      level: 85,
      category: "languages",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      level: 75,
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
      level: 80,
      category: "frontend",
      icon: <FaReact className="text-blue-400" />,
    },
    {
      name: "Next.js",
      level: 70,
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
      level: 85,
      category: "backend",
      icon: <FaNodeJs className="text-green-600" />,
    },
    {
      name: "Express.js",
      level: 80,
      category: "backend",
      icon: <SiExpress className="text-gray-600" />,
    },
    {
      name: "Spring Boot",
      level: 75,
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
      level: 70,
      category: "database",
      icon: <SiRedis className="text-red-600" />,
    },
    {
      name: "Git & GitHub",
      level: 85,
      category: "devops",
      icon: <FaGithub className="text-gray-800" />,
    },
    {
      name: "Docker",
      level: 70,
      category: "devops",
      icon: <FaDocker className="text-blue-500" />,
    },
    {
      name: "AWS",
      level: 65,
      category: "devops",
      icon: <FaAws className="text-orange-500" />,
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
      level: 75,
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
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
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
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-heading font-bold mb-2">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
              </div>
              
              <div className="mt-2">
                <div className="flex justify-between mb-1.5 text-sm">
                  <span className={`px-2 py-0.5 rounded-full text-white ${getLevelColor(skill.level)}`}>
                    {getLevelText(skill.level)}
                  </span>
                  <span className="text-gray-500 font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
      </div>
    </section>
  );
}

export default Skills; 