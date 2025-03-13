import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaUserTie } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

function About() {
  const education = [
    {
      degree: "Bachelor of Technology (Computer Science)",
      institution: "Jamia Millia Islamia",
      year: "2020-24",
      score: "8.71/10.0 CGPA",
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Central Academy School, Kota",
      year: "2018-19",
      score: "77.2%",
    },
    {
      degree: "Class X (CISCE)",
      institution: "City Montessori School, Lucknow",
      year: "2016-17",
      score: "90%",
    },
  ];

  const experience = [
    {
      role: "Full Stack Software Developer",
      company: "Ekai",
      startDate: new Date(2024, 8, 1), // September 2024 (months are 0-indexed)
      endDate: null, // null indicates present
      points: [
        "Architected a custom LLM Slack bot using OpenAI API with advanced training capabilities",
        "Implemented backend services with Node.js and Express.js, integrating Slack Bolt SDK",
        "Designed a privacy control system for managing training data visibility",
        "Integrated Google Picker API for efficient file selection from Google Drive"
      ],
      technologies: ["Node.js", "Express.js", "OpenAI API", "Slack API"]
    },
    {
      role: "Software Developer Intern",
      company: "Kalvium",
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2023, 8, 1), // September 2023
      points: [
        "Led development of LiveBook, an interactive learning platform with multimedia content",
        "Implemented YouTube API integration for video content delivery",
        "Developed RESTful APIs for content management and user interactions",
        "Optimized platform performance using Chrome DevTools"
      ],
      technologies: ["React.js", "Node.js", "YouTube API", "RESTful APIs"]
    },
  ];

  const achievements = [
    "Ranked in the top 5% on LeetCode with 500+ problems solved",
    "Contributed to open-source React component libraries",
    "Won 2nd place in University Hackathon for an AI-powered educational tool"
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
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-6 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/4">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-full transform rotate-3 overflow-hidden">
                {/* Replace with your actual profile image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-3xl text-gray-500">
                  <FaUserTie />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/4">
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              Altamash Ahmad
            </h1>
            <h2 className="text-xl text-primary font-medium mb-3">
              Full Stack Software Developer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Recent Computer Science graduate with expertise in <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Node.js</span>, and <span className="text-primary font-medium">AI integrations</span>. Passionate about building scalable applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["JavaScript", "React", "Node.js", "Express", "OpenAI", "Java"].map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-white text-primary border border-primary/30 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center mb-4">
          <FaBriefcase className="text-xl text-primary mr-2" />
          <h2 className="text-xl font-heading font-bold text-gray-900">
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
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 text-sm">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                  <p className="text-gray-500 text-xs">
                    ({calculateDuration(exp.startDate, exp.endDate)})
                  </p>
                </div>
              </div>
              <ul className="space-y-1 mb-3 text-sm">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Two Column Layout for Education and Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-xl text-primary mr-2" />
            <h2 className="text-xl font-heading font-bold text-gray-900">
              Education
            </h2>
          </div>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all border border-gray-100"
              >
                <h3 className="text-base font-bold text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{edu.institution}</p>
                <div className="flex justify-between text-gray-500 text-xs">
                  <span>{edu.year}</span>
                  <span className="font-medium">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <FaAward className="text-xl text-primary mr-2" />
            <h2 className="text-xl font-heading font-bold text-gray-900">
              Achievements
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Professional Summary */}
          <div className="mt-4 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center mb-2">
              <HiOutlineDocumentText className="text-xl text-primary mr-2" />
              <h3 className="text-base font-heading font-bold text-gray-900">
                Professional Summary
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Full Stack Developer with a strong foundation in computer science. I excel at translating complex requirements into elegant solutions that prioritize performance and user experience. I thrive in collaborative environments and maintain a continuous learning mindset.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;