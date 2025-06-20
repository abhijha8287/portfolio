import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "BS in Data Science",
      institution: "IIT Madras",
      duration: "2023 - 2027",
      description: "Pursuing Data Science with focus on AI/ML, Web Development, and Data Analysis"
    }
  ];

  const personalInfo = [
    { icon: FiMail, label: "Email", value: "abhijha8287@gmail.com", link: "mailto:abhijha8287@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91 8287706259", link: "tel:+918287706259" },
    { icon: FiMapPin, label: "Location", value: "Dwarka, Delhi, India" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="about" className="section-padding bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6">
              Who I Am
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate Machine Learning Student and AI enthusiast currently pursuing BS in Data Science at IIT Madras. 
                I love creating innovative web applications and exploring the fascinating world of artificial intelligence.
              </p>
              <p>
                With a strong foundation in Machine Learning and modern web technologies, I specialize in building 
                machine learning models that solve real-world problems. My projects range from AI-powered chatbots 
                to comprehensive web applications. I am also interested in web development and have a strong foundation
                 in web technologies.
              </p>
              <p>
                I'm always eager to learn new technologies and take on challenging projects that push my boundaries. 
                When I'm not coding, you can find me exploring new AI tools, frameworks, and libraries 
                or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Personal Info */}
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6">
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card border-l-4 border-primary-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <FiBook className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {edu.duration}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Strengths */}
            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Key Strengths</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Problem Solving",
                  "Quick Learning",
                  "Team Collaboration",
                  "Attention to Detail",
                  "Creative Thinking",
                  "Time Management"
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 