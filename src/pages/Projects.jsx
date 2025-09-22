import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [filter, setFilter] = useState('all');

  // Function to calculate duration between two dates
  const calculateDuration = (startDate, endDate) => {
    const start = startDate instanceof Date ? startDate : new Date(startDate);
    const end = endDate instanceof Date ? endDate : (endDate ? new Date(endDate) : new Date());
    
    const monthsDiff = (end.getFullYear() - start.getFullYear()) * 12 + 
                       (end.getMonth() - start.getMonth());
    
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

  // Function to format date to Month'YY format
  const formatDate = (date) => {
    if (!date) return 'Present';
    
    const dateObj = date instanceof Date ? date : new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const year = dateObj.getFullYear().toString().slice(2);
    
    return `${month}'${year}`;
  };

  // Function to format date range
  const formatDateRange = (startDate, endDate) => {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const projects = [
    {
      title: "Rate Limiter for API Services",
      description: "Enterprise-grade rate limiting system using Redis and Node.js with tiered user access, sentiment analysis, and real-time analytics dashboard. Supports 10k+ concurrent users with 40ms response times.",
      type: "backend",
      tech: ["Node.js", "Express.js", "Redis", "Natural", "JWT", "RESTful API"],
      startDate: "2023-11-01",
      endDate: "2023-12-15",
      image: "/projectImage/ratelimiter.png",
      links: {
        github: "https://github.com/AltamashAhmad/Rate_Limiter_for_API_Service",
        live: null
      },
      highlights: [
        "Built scalable rate limiting with Redis token bucket algorithm",
        "Implemented sentiment analysis and hashtag extraction features", 
        "Created comprehensive testing suite with 95% code coverage",
        "Supports Free (10/min), Standard (50/min), Premium (200/min) tiers"
      ]
    },
    {
      title: "Property Listing System",
      description: "Full-stack real estate platform with advanced search, favorites, recommendations, and Redis caching. Features JWT authentication, MongoDB integration, and comprehensive API documentation.",
      type: "fullstack", 
      tech: ["TypeScript", "Node.js", "MongoDB", "Redis", "JWT", "Express.js"],
      startDate: "2024-01-01",
      endDate: "2024-03-15",
      image: "/projectImage/property.png",
      links: {
        github: "https://github.com/AltamashAhmad/Property-Listing-System",
        live: null
      },
      highlights: [
        "Built property search with 15+ filter options and pagination",
        "Implemented favorites & recommendation system between users",
        "Added Redis caching reducing response times by 60%",
        "Comprehensive REST API with detailed documentation"
      ]
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using Ollama/Gemma, Firebase authentication, and Firestore. Features message editing, markdown rendering, and modern responsive UI.",
      type: "fullstack",
      tech: ["React", "TypeScript", "Firebase", "Ollama", "Chakra UI", "Node.js"],
      startDate: "2024-06-01", 
      endDate: "2024-08-30",
      image: "/projectImage/Ai.png",
      links: {
        github: "https://github.com/AltamashAhmad/AI-CHAT-APP",
        live: null
      },
      highlights: [
        "Integrated local AI model (Gemma 3B) via Ollama API",
        "Real-time messaging with Firebase Firestore sync",
        "Advanced markdown rendering with code syntax highlighting", 
        "Responsive design with dark/light theme support"
      ]
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Top Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My most impactful projects showcasing full-stack development, system design, and modern technologies. Each project demonstrates scalability, performance optimization, and real-world problem solving.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-5 py-2 rounded-full transition-all ${
              filter === value 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-600 transition-shadow"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-primary/90 text-white px-3 py-1 text-xs font-medium">
                  {project.type === 'frontend' ? 'Frontend' : 
                   project.type === 'backend' ? 'Backend' : 'Full Stack'}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Key Highlights */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDateRange(project.startDate, project.endDate)}
                  </p>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 dark:bg-gray-600 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors text-sm"
                      >
                        <FaGithub className="text-sm" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* No Projects Found Message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found for this filter.</p>
          <button 
            onClick={() => setFilter('all')}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            View All Projects
          </button>
        </motion.div>
      )}
      </div>
    </section>
  );
}

export default Projects; 