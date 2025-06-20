import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 80 },
        
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Vue.js", level: 85 },
        { name: "Streamlit", level: 90 },
        { name: "Flask", level: 75 }
        // { name: "Express.js", level: 70 },
        // { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "LangChain", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 90 },
        { name: "Pandas", level: 80 },
        { name: "PyTorch", level: 90 },
        { name: "OpenAI API", level: 85 },
        
      ]
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 },
        { name: "PostgreSQL", level: 90 },
        { name: "Docker", level: 80 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Attention to Detail"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-8">
              Technical Skills
            </motion.h3>
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={itemVariants}>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-2">
                          <motion.div
                            custom={skill.level}
                            variants={progressVariants}
                            className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-8">
              Soft Skills
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-semibold mb-4">What I Bring</h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Strong foundation in modern AI/ML technologies and web development.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Experience with AI/ML integration and API development and deployment.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Handle Pressure and Work under tight deadlines.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Quick learner with ability to adapt to new technologies.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 