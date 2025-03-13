import { motion } from 'framer-motion';

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
        "Architected and developed a custom LLM Slack bot using OpenAI API, enabling ChatGPT-like interactions with advanced training capabilities.",
        "Implemented robust backend services using Node.js and Express.js, integrating Slack Bolt SDK for seamless bot interactions.",
        "Designed and implemented a sophisticated privacy control system for managing training data visibility.",
        "Engineered a custom markdown-to-Slack formatter ensuring optimal message rendering.",
        "Created an intuitive Slack home interface using Block Kit Builder, enhancing user experience.",
        "Integrated Google Picker API for efficient multi-file selection and processing from Google Drive.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Kalvium",
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2023, 8, 1), // September 2023
      points: [
        "Led the development of LiveBook, an interactive learning platform integrating multimedia content and assessments.",
        "Implemented YouTube API integration for seamless video content delivery.",
        "Developed comprehensive RESTful APIs for content management and user interactions.",
        "Optimized platform performance using Chrome DevTools, significantly improving load times and user experience.",
      ],
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
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          I&apos;m a passionate Full Stack Software Developer with expertise in building scalable, user-centric web applications and AI-powered solutions. 
          I recently graduated with a B.Tech in Computer Science from <strong>Jamia Millia Islamia</strong>, achieving a stellar <strong>8.71 CGPA</strong>.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          My technical stack includes <strong>Node.js</strong>, <strong>React</strong>, <strong>Express.js</strong>, and integrations with APIs like <strong>OpenAI</strong> and <strong>Google Cloud</strong>. 
          With a proven track record of delivering high-quality software, I excel in solving complex problems and crafting intuitive user experiences.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-medium">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    ({calculateDuration(exp.startDate, exp.endDate)})
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-primary mr-2 mt-1.5">•</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
          Education
        </h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-100"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 mb-2">{edu.institution}</p>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>{edu.year}</span>
                <span>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default About;