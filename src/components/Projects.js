import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Parking Management System",
      description: "Designed and developed a comprehensive Parking Management Web Application for IIT Madras MAD-2 course with Flask REST APIs, VueJS frontend, SQLite DB, Redis caching, RBAC, auto spot allocation, reservations, reports, and Celery background jobs.",
      image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=400&h=250&fit=crop",
      techStack: ["Python", "Flask", "VueJS", "Redis", "SQLite", "Docker", "Celery"],
      liveLink: "",
      githubLink: "https://github.com/abhijha8287/mad2project"
    },


    {
      title: "Dogs vs Cats Image Classification",
      description: "Built and trained a deep Convolutional Neural Network (CNN) to classify dog and cat images using the Kaggle dataset.\n\nData augmentation, transfer learning, and model evaluation with accuracy and confusion matrix.",
      githubLink: "https://github.com/abhijha8287/ann",
      techStack: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Kaggle", "Data Augmentation"],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop"
    },
    {
  title: "MLOps Pipeline for ML Model Deployment",
  description: "Built an end-to-end MLOps pipeline for data ingestion, preprocessing, model training, evaluation, and artifact management using a modular src architecture. Containerized FastAPI with Docker and automated CI/CD using GitHub Actions and YAML workflows for reliable, reproducible model deployment.",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
  techStack: ["Python", "FastAPI", "scikit-learn", "Docker", "GitHub Actions", "CI/CD", "YAML"],
  liveLink: "",
  githubLink: ""
},

    {
      title: "Customer Churn Prediction (ANN)",
      description: "Developed an end-to-end customer churn prediction system using Artificial Neural Networks.\n\nFeature engineering, model training and evaluation, and deployment-ready pipeline.",
      liveLink: "",
      githubLink: "https://github.com/abhijha8287/cnn/tree/master",
      techStack: ["Python", "TensorFlow", "Keras", "ANN", "Classification", "Pandas", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop"
    },
    {
      title: "Engage2Value: From Clicks to Conversions",
      description: "competition, building and deploying predictive machine learning models for customer purchase value estimation based on multi-session digital data.",
      liveLink: "",
      githubLink: "https://www.kaggle.com/competitions/engage-2-value-from-clicks-to-conversions/overview",
      techStack: ["Python", "Kaggle", "Classification", "Pandas", "Scikit-learn", "Xgboost", "Feature Engineering"],
      image: '/image.png'

    },
    {
      title: "Sentiment Responder",
      description: "Sentiment analysis and response from user reviews using advanced NLP techniques.",
      liveLink: "https://sentimentresponder.streamlit.app",
      githubLink: "https://github.com/abhijha8287/SentimentResponder",
      techStack: ["Python", "Streamlit", "OpenAI API", "LangChain", "NLP", "Conditional Chains"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Structured Summary Generator",
      description: "Generates structured summaries of user reviews pros or cons and give keys points.",
      liveLink: "https://reviewanalysis2byabhishek.streamlit.app/",
      githubLink: "https://github.com/abhijha8287/reviewanalysis2",
      techStack: ["Python", "Streamlit", "OpenAI API", "LangChain", "Pydantic", "JSON Parsing", "Structured Output Parsing"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    },
    {
      title: "5 Facts Generator",
      description: "Returns 5 interesting facts about any user-given topic using structured output parsing.",
      liveLink: "https://5factgeneratorbyabhishek.streamlit.app",
      githubLink: "",
      techStack: ["Python", "Streamlit", "OpenAI API", "LangChain", "JSON Parsing", "Structured Output Parsing"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      title: "Learn and Test Yourself",
      description: "Automatically creates comprehensive notes and quiz questions from any given topic.",
      liveLink: "https://learntestyourself.streamlit.app",
      githubLink: "https://github.com/abhijha8287/learn_testyourself",
      techStack: ["Python", "Streamlit", "OpenAI API", "LangChain", "Parallel Chains"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: "Post Generator",
      description: "Generates engaging tweets and LinkedIn posts from any topic using parallel chains.",
      liveLink: "https://postgeneratorbyabhishek.streamlit.app",
      githubLink: "https://github.com/abhijha8287/postgenerator",
      techStack: ["Python", "Streamlit", "LangChain", "OpenAI API", "Parallel Runnable"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop"
    },
    {
  title: "MERN Stack Notes Application",
  description : "Developed a full-stack MERN notes app with CRUD operations, REST APIs, MongoDB storage, and seamless React–Node communication using Axios. Built with scalable architecture for future ML/AI feature integration.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
  techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Axios"],
  liveLink: "",
  githubLink: ""
},

    {
      title: "Joke Generator",
      description: "Creates topic-based jokes with explanations using AI-powered humor generation.",
      liveLink: "https://jokegeneratorbyabhishek.streamlit.app",
      githubLink: "https://github.com/abhijha8287/jokegenerator",
      techStack: ["Python", "Streamlit", "OpenAI API", "LangChain", "Passthrough Runnable"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "Career Guidance Chatbot",
      description: "A smart AI-powered chatbot that suggests career paths based on user interests, skills, and preferences. Useful for students, graduates, or professionals seeking direction.\n\nPersonalized career suggestions, natural language interaction, and prompt engineering for guided conversations.\n\nNote: If the app appears asleep, click 'Wake App' and wait a few seconds.",
      liveLink: "https://careerchatbotbyabhishek.streamlit.app",
      githubLink: "https://github.com/abhijha8287/careerchatbot",
      techStack: ["Streamlit", "Python", "OpenAI API", "LangChain", "RAG", "Vector Store", "Retriever", "Faiss"],
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=250&fit=crop"
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in AI/ML, web development, and creative problem-solving.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium text-sm transition-colors duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in seeing more of my work?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/abhijha8287"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 