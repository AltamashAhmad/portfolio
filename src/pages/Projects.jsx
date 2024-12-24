import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Rate Limiter for API Services",
      description: "Developed RESTful API with Node.js/Express.js for social media analytics, including submission and dashboard endpoints. Built Redis-based data persistence layer for user submissions, hashtag tracking, and sentiment analysis.",
      type: "backend",
      tech: ["Node.js", "Express.js", "Redis", "RESTful API"],
      duration: "May'24 - Jul'24",
      image: "/projectImage/ratelimiter.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Rate_Limiter_for_API_Service",
      }
    },
    {
      title: "E-commerce Platform (Shine Traders)",
      description: "Developed a responsive e-commerce platform using HTML, CSS, and JavaScript. Integrated dynamic product list with RESTful API and implemented persistent shopping cart feature with local storage.",
      type: "fullstack",
      tech: ["HTML", "CSS", "JavaScript", "RESTful API"],
      duration: "Feb'24 - Apr'24",
      image: "/projectImage/shinetraders.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Shine_Trader",
      }
    },
    {
      title: "Sorting Visualizer",
      description: "Developed a web-based sorting visualizer for multiple sorting algorithms. Enhanced animation performance and designed an interactive UI for customizing array size and sorting speed.",
      type: "frontend",
      tech: ["JavaScript", "CSS", "Algorithms"],
      duration: "May'24 - Jul'24",
      image: "/projectImage/sortingvisualizer.webp",
      links: {
        github: null,
      }
    },
    {
      title: "Rock-Paper-Scissors Game",
      description: "Interactive web-based Rock Paper Scissors game with modern UI, animations, and score tracking. Features responsive design and engaging user experience.",
      type: "frontend",
      tech: ["HTML", "CSS", "JavaScript", "Game Development"],
      duration: "2024",
      image: "/projectImage/rps.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Rock-Paper-Scissors",
      }
    },
    {
      title: "Kalvium Livebook",
      description: "Developed LiveBook for Kalvium, an interactive learning platform integrating theory, videos, and assessments. Features YouTube API integration and RESTful APIs for content management.",
      type: "fullstack",
      tech: ["HTML", "CSS", "JavaScript", "RESTful API", "YouTube API"],
      duration: "June'24 - Sep'24",
      image: "/projectImage/kalvium.webp",
      links: {
        github: "https://github.com/AltamashAhmad/Kalvium_Livebook",
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
        <h1 className="text-4xl font-heading font-bold mb-4">My Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my work showcasing my skills in frontend, backend, and full-stack development.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === value 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Project Image - Updated styles */}
              <div className="relative w-full aspect-video overflow-hidden group">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-primary rounded-full hover:bg-gray-100"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {project.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects; 