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
      description: "Engineered a scalable rate limiting system for high-traffic APIs using the token bucket algorithm and Redis. Prevents API abuse while ensuring service availability for legitimate users.",
      type: "backend",
      tech: ["Node.js", "Express.js", "Redis", "Docker", "RESTful API"],
      startDate: "2023-11-01",
      endDate: "2023-12-15",
      image: "/projectImage/ratelimiter.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Rate_Limiter_for_API_Service",
        live: null
      }
    },
    {
      title: "E-commerce Platform",
      description: "Built a responsive e-commerce platform with product catalog, shopping cart, and secure checkout. Features include user authentication, payment processing, and order management.",
      type: "fullstack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS"],
      startDate: "2023-08-01",
      endDate: "2023-10-30",
      image: "/projectImage/shinetraders.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Shine_Trader",
        live: null
      }
    },
    {
      title: "Sorting Visualizer",
      description: "Created an interactive tool that visualizes sorting algorithms in action. Users can adjust array size and speed to compare performance of different algorithms in real-time.",
      type: "frontend",
      tech: ["JavaScript", "HTML5", "CSS3", "Data Structures", "Algorithms"],
      startDate: "2023-06-01",
      endDate: "2023-07-15",
      image: "/projectImage/sortingvisualizer.webp",
      links: {
        github: null,
        live: null
      }
    },
    {
      title: "Rock-Paper-Scissors Game",
      description: "Developed an interactive Rock-Paper-Scissors game with modern UI and animations. Features include score tracking, game history, and responsive design for all devices.",
      type: "frontend",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive Design"],
      startDate: "2023-04-01",
      endDate: "2023-05-15",
      image: "/projectImage/rps.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Rock-Paper-Scissors",
        live: null
      }
    },
    {
      title: "Kalvium LiveBook Platform",
      description: "Built an interactive learning platform during my internship at Kalvium. Implemented content delivery, progress tracking, and assessment modules with YouTube API integration.",
      type: "fullstack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "YouTube API", "RESTful API"],
      startDate: "2023-06-01",
      endDate: "2023-09-01",
      image: "/projectImage/Kalvium.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Kalvium_Livebook",
        live: null
      }
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading font-bold mb-4">Featured Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of my technical expertise and problem-solving abilities through real-world applications. Each project demonstrates my skills in different areas of software development.
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
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow"
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
                  <h3 className="font-heading font-bold text-xl mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    {formatDateRange(project.startDate, project.endDate)}
                  </p>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
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
          <p className="text-gray-500 text-lg">No projects found for this filter.</p>
          <button 
            onClick={() => setFilter('all')}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            View All Projects
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Projects; 