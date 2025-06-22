import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import pythonLogo from '../logos/python-original.svg';
import jsLogo from '../logos/javascript-original.svg';
import postmanLogo from '../logos/postman-original.svg';
import githubLogo from '../logos/github-original.svg';
import pytorchLogo from '../logos/pytorch-original.svg';
import langchainLogo from '../logos/langchain.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FiGithub,
      url: "https://github.com/abhijha8287",
      label: "GitHub"
    },
    {
      icon: FiLinkedin,
      url: "https://linkedin.com/in/abhishekjha15",
      label: "LinkedIn"
    },
    {
      icon: FiMail,
      url: "mailto:abhijha8287@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Abhishek Jha
            </h3>
            <p className="text-gray-400 mb-4">
              Machine Learning & AI Enthusiast
            </p>
            <p className="text-sm text-gray-500">
              Creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Logos Row */}
        <div className="flex justify-center items-center gap-6 py-6">
          <img src={langchainLogo} alt="LangChain" className="w-8 h-8" />
          <img src={pythonLogo} alt="Python" className="w-8 h-8" />
          <img src={jsLogo} alt="JavaScript" className="w-8 h-8" />
          <img src={postmanLogo} alt="Postman" className="w-8 h-8" />
          <span className="relative inline-flex items-center justify-center">
            <img src={githubLogo} alt="GitHub" className="w-8 h-8 bg-white rounded-full border border-gray-300 shadow-md p-1" />
          </span>
          <img src={pytorchLogo} alt="PyTorch" className="w-8 h-8" />
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Abhishek Jha. All rights reserved.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 