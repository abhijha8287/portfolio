import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pythonLogo from '../logos/python-original.svg';
import jsLogo from '../logos/javascript-original.svg';
import html5Logo from '../logos/html5.svg';
import css3Logo from '../logos/css3.svg';
import sqlLogo from '../logos/sql.svg';
import vuejsLogo from '../logos/vuejs.svg';
import streamlitLogo from '../logos/streamlit.svg';
import flaskLogo from '../logos/flask.svg';
import langchainLogo from '../logos/langchain.svg';
import scikitLearnLogo from '../logos/scikit-learn.svg';
import tensorflowLogo from '../logos/tensorflow.svg';
import pandasLogo from '../logos/pandas.svg';
import pytorchLogo from '../logos/pytorch-original.svg';
import openaiLogo from '../logos/openai.svg';
import githubLogo from '../logos/github-original.svg';
import vscodeLogo from '../logos/vscode.svg';
import postmanLogo from '../logos/postman-original.svg';
import postgresqlLogo from '../logos/postgresql.svg';
import dockerLogo from '../logos/docker.svg';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: pythonLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "HTML5", logo: html5Logo },
        { name: "CSS3", logo: css3Logo },
        { name: "SQL", logo: sqlLogo },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Vue.js", logo: vuejsLogo },
        { name: "Streamlit", logo: streamlitLogo },
        { name: "Flask", logo: flaskLogo },
      ]
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "LangChain", logo: langchainLogo },
        { name: "Scikit-learn", logo: scikitLearnLogo },
        { name: "TensorFlow", logo: tensorflowLogo },
        { name: "Pandas", logo: pandasLogo },
        { name: "PyTorch", logo: pytorchLogo },
        { name: "OpenAI API", logo: openaiLogo },
      ]
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Git/GitHub", logo: githubLogo },
        { name: "VS Code", logo: vscodeLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "PostgreSQL", logo: postgresqlLogo },
        { name: "Docker", logo: dockerLogo },
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
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2 bg-primary-50 dark:bg-secondary-700 px-3 py-2 rounded-lg shadow-sm">
                        {skill.logo && (
                          <img src={skill.logo} alt={skill.name + ' logo'} className="w-6 h-6" />
                        )}
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
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