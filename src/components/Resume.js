import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiAward, FiCode, FiBook, FiUsers } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhishek_Jha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: FiAward,
      title: "Education",
      items: [
        "BS in Data Science at IIT Madras",
        "Strong foundation in AI/ML and Web Development",
        "Currently in 2nd year with excellent academic record"
      ]
    },
    {
      icon: FiCode,
      title: "Technical Skills",
      items: [
        "Python, JavaScript, Vue.js",
        "LangChain, OpenAI API, Streamlit",
        "Git, VS Code, PostgreSQL, Docker"
      ]
    },
    {
      icon: FiBook,
      title: "Projects",
      items: [
        "6+ AI-powered Streamlit applications",
        "Review analysis, content generation, quiz creation",
        "All projects deployed and live"
      ]
    },
    {
      icon: FiUsers,
      title: "Soft Skills",
      items: [
        "Problem solving and critical thinking",
        "Team collaboration and communication",
        "Quick learning and adaptability"
      ]
    }
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
    <section id="resume" className="section-padding bg-gray-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3"
          >
            <FiDownload className="w-6 h-6" />
            Download Resume (PDF)
          </motion.button>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {highlight.title}
              </h3>
              
              <ul className="space-y-2 text-left">
                {highlight.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-secondary-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Why Choose Me?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  🚀 Innovation
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Constantly exploring new technologies and creating innovative solutions
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  💡 Problem Solving
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Strong analytical skills with ability to break down complex problems
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  🎯 Results Driven
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Focused on delivering high-quality, user-friendly applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 