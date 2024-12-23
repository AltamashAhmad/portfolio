import { motion } from 'framer-motion';

function About() {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Jamia Millia Islamia",
      year: "2020-24",
      score: "8.71/10.0"
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Central Academy School, Kota",
      year: "2018",
      score: "77.2%"
    },
    {
      degree: "Class X (CISCE)",
      institution: "City Montessori School, Lucknow",
      year: "2016",
      score: "90.0%"
    }
  ];

  const experience = [
    {
      role: "Full Stack Software Developer",
      company: "Ekai",
      period: "Sep'24-Present",
      points: [
        "Developed Ekai, a custom LLM Slack bot using OpenAI API",
        "Built backend functionalities using Node.js, Express.js",
        "Implemented privacy control module for training data visibility",
        "Designed custom Slack home interface with Block Kit Builder"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Kalvium",
      period: "June'24 - Sep'24",
      points: [
        "Developed LiveBook using HTML, CSS, and JavaScript",
        "Integrated YouTube videos via API for content delivery",
        "Developed RESTful APIs for content management",
        "Optimized platform performance using Chrome DevTools"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-heading font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          I&apos;m a Full Stack Developer with a passion for building scalable web applications. 
          With a strong foundation in computer science and impressive achievements including 
          securing 96.8 percentile in JEE Mains, I bring both technical expertise and 
          problem-solving skills to every project.
        </p>
      </motion.div>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-heading font-bold mb-6">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary pl-4">
              <h3 className="font-heading font-bold text-xl">{exp.role}</h3>
              <p className="text-primary mb-2">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-heading font-bold mb-6">Education</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-heading font-bold text-lg">{edu.degree}</h3>
              <p className="text-primary">{edu.institution}</p>
              <div className="flex justify-between mt-2 text-gray-600">
                <span>{edu.year}</span>
                <span>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-heading font-bold mb-6">Achievements</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            Secured 96.8 percentile in 2019 Joint Entrance Exam (JEE Mains)
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            Skilled coder on LeetCode and Codeforces platforms
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            Resolved 900+ student queries on Chegg platform
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            Built Zod Gaming YouTube channel with 1500 subscribers and 500K views
          </li>
        </ul>
      </motion.section>
    </div>
  );
}

export default About; 