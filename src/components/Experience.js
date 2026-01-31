import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const experiences = [
        {
            company: "AtliQ Technology",
            location: "Virtual",
            role: "Data Scientist (Internship)",
            duration: "Dec 2025 – Jan 2026",
            description: "Gained hands-on experience with data cleaning, visualization, and predictive modeling as part of the virtual internship projects.",
            skills: ["Data Analysis", "Machine Learning", "Deep Learning", "GenAI", "NLP", "Agentic AI"]
        },
        {
            company: "Sudha Gopalakrishnan Brain Centre (SGBC)",
            location: "IIT Madras — Chennai",
            role: "AI Developer (Internship)",
            duration: "Nov 2025",
            description: "Designed end-to-end medical imaging systems including patient dashboards (PDF comparison, MRI/segmentation visualization, 3D scan exploration), headless 3D Slicer pipelines (Windows, Docker, Jupyter), and MCP-based automation integrated with Claude Desktop, along with pure-Python Docker workflows for volume processing, visualization, and segmentation without external dependencies.",
            skills: ["Medical Imaging", "3D Slicer", "Headless Automation", "Python", "Docker", "MCP Servers", "Jupyter", "Visualization", "System Integration", "GenAI Tools", "Web Development", "FastAPI"]
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
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="experience" className="section-padding bg-white dark:bg-secondary-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
                        Professional <span className="gradient-text">Experience</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></motion.div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line for larger screens */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-secondary-700"></div>

                            <div className={`flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content */}
                                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                                    <div className="card hover:shadow-lg transition-all duration-300 border-l-4 border-primary-500">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.role}
                                            </h3>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-2">
                                                <FiBriefcase className="w-4 h-4" /> {exp.company}
                                            </h4>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                <span className="flex items-center gap-1">
                                                    <FiCalendar className="w-4 h-4" /> {exp.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FiMapPin className="w-4 h-4" /> {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 border-4 border-white dark:border-secondary-900 flex items-center justify-center z-10">
                                    <div className="w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
