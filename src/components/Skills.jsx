import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: "75%" },
        { name: "Java", level: "65%" },
        { name: "JavaScript", level: "70%" },
      ]
    },
    {
      title: "Computer Science",
      skills: [
        { name: "Data Structures", level: "70%" },
        { name: "Algorithms", level: "65%" },
        { name: "OOPS", level: "75%" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", level: "60%" },
        { name: "Node.js", level: "65%" },
        { name: "Express.js", level: "70%" },
      ]
    },
    {
      title: "Database & System Design",
      skills: [
        { name: "DBMS", level: "70%" },
        { name: "MySQL", level: "65%" },
        { name: "System Design", level: "60%" },
      ]
    }
  ];

  const getProgressColor = (level) => {
    const percentage = parseInt(level);
    if (percentage >= 75) return 'bg-primary';
    if (percentage >= 65) return 'bg-primary/85';
    return 'bg-primary/75';
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
          <h2 className="text-3xl font-heading font-bold">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-heading font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1.5">
                      <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${getProgressColor(skill.level)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 