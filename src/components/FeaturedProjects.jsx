import { motion } from 'framer-motion';

function FeaturedProjects() {
  const projects = [
    {
      title: "Ekai - LLM Slack Bot",
      description: "Custom LLM Slack bot using OpenAI API with training features",
      tech: ["Node.js", "Express.js", "Slack Bolt SDK", "OpenAI API"],
      image: "/project-1.png" // You'll need to add project images to public folder
    },
    {
      title: "Rate Limiter API Service",
      description: "RESTful API with Redis-based rate limiting for social media analytics",
      tech: ["Node.js", "Express.js", "Redis", "RESTful API"],
      image: "/project-2.png"
    },
    {
      title: "Shine Traders E-commerce",
      description: "Full-stack e-commerce platform with dynamic product listing",
      tech: ["HTML", "CSS", "JavaScript", "RESTful API"],
      image: "/project-3.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200">
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects; 