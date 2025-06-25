import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open('/abhishekjharesume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-secondary-900 dark:to-secondary-800"></div>
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/mypic.jpg" 
                  alt="Abhishek Jha" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Abhishek Jha</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Machine Learning & AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating innovative AI/ML applications and exploring the world of artificial intelligence. 
            Currently pursuing BS in Data Science at IIT Madras.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openResume}
              className="btn-primary flex items-center gap-2"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-secondary flex items-center gap-2"
            >
              Learn More
              <FiArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://github.com/abhijha8287"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://linkedin.com/in/abhishekjha15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="mailto:abhijha8287@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-500"
        >
          <FiArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 