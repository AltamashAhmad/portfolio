import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

function About() {
  const education = [
    {
      degree: "B.Tech, Electrical Engineering",
      institution: "Jamia Millia Islamia (NewDelhi), India",
      year: "2020-2024",
      score: "8.71/10.0 CGPA",
    }
  ];

  const experience = [
    {
      role: "Full Stack Software Developer",
      company: "Ekai",
      startDate: new Date(2024, 5, 1), // June 2024 (months are 0-indexed)
      endDate: null, // null indicates present
      points: [
        "Built Ekai, a Slack LLM bot using OpenAI API for contextual chat and document-based training with user-level privacy controls",
        "Implemented OAuth + JWT authentication, encrypted storage, and CI/CD pipelines with GitHub Actions + AWS deployment",
        "Integrated Google Drive & Calendar APIs for automated content ingestion and meeting-based access with Slack notifications"
      ],
      technologies: ["Node.js", "OpenAI API", "Slack API", "JWT", "OAuth", "AWS", "GitHub Actions"]
    },
    {
      role: "Frontend-Focused Full Stack Developer Intern",
      company: "Quvor",
      startDate: new Date(2023, 6, 1), // July 2023
      endDate: new Date(2024, 2, 1), // March 2024
      points: [
        "Developed e-commerce platform (shoppingeventvip.be) using React Router v7 and Mantine UI, serving 10,000+ concurrent users",
        "Built 40+ reusable components and implemented Redis caching, reducing page load times by 60%",
        "Delivered full-stack features: authentication, shopping cart, reviews, and multilingual support (EN/FR/NL)"
      ],
      technologies: ["React Router v7", "Mantine UI", "Directus CMS", "Redis", "i18n", "REST APIs"]
    },
    {
      role: "Software Developer Intern",
      company: "Kalvium",
      startDate: new Date(2022, 11, 1), // December 2022
      endDate: new Date(2023, 2, 1), // March 2023
      points: [
        "Developed LiveBook, an interactive learning platform integrating theory, videos, and assessments for student engagement",
        "Built RESTful APIs for content management and integrated YouTube API for in-app video streaming",
        "Created comprehensive Postman test suites improving system reliability and developer onboarding efficiency"
      ],
      technologies: ["React.js", "Node.js", "YouTube API", "RESTful APIs", "Postman"]
    },
  ];

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
      <div className="max-w-6xl mx-auto px-4 py-12">
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
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-600 p-4 hover:shadow-md dark:hover:shadow-gray-500 transition-all border border-gray-100 dark:border-gray-600"
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    ({calculateDuration(exp.startDate, exp.endDate)})
                  </p>
                </div>
              </div>
              <ul className="space-y-1 mb-3 text-sm">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
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