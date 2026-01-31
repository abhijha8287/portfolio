import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pythonLogo from '../logos/python-original.svg';
import jsLogo from '../logos/javascript-original.svg';
import html5Logo from '../logos/html5.svg';
import css3Logo from '../logos/css3.svg';
import sqlLogo from '../logos/sql.svg';
import vuejsLogo from '../logos/vuejs.svg';
// import reactLogo from '../logos/react-original.svg';
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
import javaLogo from '../logos/java.svg';
import xgboostLogo from '../logos/xgboost.svg';
import kerasLogo from '../logos/keras.svg';
import numpyLogo from '../logos/numpy.svg';
import matplotlibLogo from '../logos/matplotlib.svg';
import seabornLogo from '../logos/seaborn.svg';
import plotlyLogo from '../logos/plotly.svg';
import jupyterLogo from '../logos/jupyter.svg';
import colabLogo from '../logos/colab.svg';
import gitLogo from '../logos/git.svg';
import fastapiLogo from '../logos/fastapi.svg';
import awsLogo from '../logos/aws.svg';

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
        { name: "SQL", logo: sqlLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "HTML5", logo: html5Logo },
        { name: "CSS3", logo: css3Logo },
        { name: "Java", logo: javaLogo },
      ]
    },
    {
      category: "AI/ML Libraries",
      skills: [
        { name: "Scikit-learn", logo: scikitLearnLogo },
        { name: "XGBoost", logo: xgboostLogo },
        { name: "Pandas", logo: pandasLogo },
        { name: "NumPy", logo: numpyLogo },
        { name: "Matplotlib", logo: matplotlibLogo },
        { name: "Seaborn", logo: seabornLogo },
        { name: "Plotly", logo: plotlyLogo },
        { name: "Hugging Face", logo: null },
      ]
    },
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", logo: tensorflowLogo },
        { name: "Keras", logo: kerasLogo },
        { name: "PyTorch", logo: pytorchLogo },
        { name: "LangChain", logo: langchainLogo },
        { name: "LangGraph", logo: null },
        { name: "CrewAI", logo: null },
        { name: "VectorDB", logo: null },
      ]
    },
    {
      category: "NLP Frameworks & Libraries",
      skills: [
        { name: "NLP", logo: null },
        { name: "Text-Processing", logo: null },
        { name: "Hugging Face", logo: null },
        { name: "LangChain", logo: langchainLogo },
      ]
    },
    {
      category: "Web Dev Frameworks",
      skills: [
        { name: "Vue.js", logo: vuejsLogo },
        { name: "Streamlit", logo: streamlitLogo },
        { name: "Flask", logo: flaskLogo },
        { name: "FastAPI", logo: fastapiLogo },
        { name: "MERN Stack", logo: null },
        { name: "Next.js", logo: null },
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "OpenAI API", logo: openaiLogo },
        { name: "Jupyter Notebook", logo: jupyterLogo },
        { name: "Google Colab", logo: colabLogo },
        { name: "VS Code", logo: vscodeLogo },
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "Docker", logo: dockerLogo },
        { name: "AWS", logo: awsLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "PostgreSQL", logo: postgresqlLogo },
      ]
    },
    {
      category: "ML Deployment & MLOps",
      skills: [
        { name: "Model Deployment", logo: null },
        { name: "Model Versioning", logo: gitLogo },
        { name: "Model Monitoring", logo: null },
        { name: "CI/CD Pipelines", logo: githubLogo },
        { name: "Kubernetes", logo: null },
        { name: "Kubeflow", logo: null },
        { name: "MLflow", logo: null },
        { name: "DVC", logo: null },
        { name: "RESTful API Deployment", logo: fastapiLogo },
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

  // Function to render skill with or without logo
  const renderSkill = (skill) => {
    if (skill.logo) {
      return (
        <div key={skill.name} className="flex items-center gap-2 bg-primary-50 dark:bg-secondary-700 px-3 py-2 rounded-lg shadow-sm">
          <img src={skill.logo} alt={skill.name + ' logo'} className="w-6 h-6" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {skill.name}
          </span>
        </div>
      );
    } else {
      return (
        <div key={skill.name} className="flex items-center gap-2 bg-gray-100 dark:bg-secondary-600 px-3 py-2 rounded-lg shadow-sm">
          <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">{skill.name.charAt(0)}</span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {skill.name}
          </span>
        </div>
      );
    }
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
                    {category.skills.map((skill) => renderSkill(skill))}
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