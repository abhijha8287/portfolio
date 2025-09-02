import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const certifications = [
        {
            title: "Deep Learning: Beginner to Advanced",
            issuer: "Codebasics",
            issuedDate: "Aug 2025",
            credentialId: "CB-85-152114",
            skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Keras"],
            category: "AI/ML"
        },
        {
            title: "Gen AI to Agentic AI with Business Projects",
            issuer: "Codebasics",
            issuedDate: "Aug 2025",
            credentialId: "CB-90-152114",
            skills: ["Generative AI", "Agentic AI", "Business Applications", "AI Projects"],
            category: "AI/ML"
        },
        {
            title: "Natural Language Processing",
            issuer: "Codebasics",
            issuedDate: "Aug 2025",
            credentialId: "CB-89-152114",
            skills: ["NLP", "Text Processing", "Language Models", "AI"],
            category: "AI/ML"
        },
        {
            title: "Master Machine Learning for Data Science",
            issuer: "Codebasics",
            issuedDate: "May 2025",
            credentialId: "CB-69-152114",
            skills: ["Machine Learning", "Data Science", "Algorithms", "Statistics"],
            category: "AI/ML"
        },
        {
            title: "Math and Statistics For AI, Data Science",
            issuer: "Codebasics",
            issuedDate: "Mar 2025",
            credentialId: "CB-63-152114",
            skills: ["Statistics", "Mathematics", "AI", "Data Science"],
            category: "AI/ML"
        },
        {
            title: "Python: Beginner to Advanced For Data Professionals",
            issuer: "Codebasics",
            issuedDate: "Mar 2025",
            credentialId: "CB-48-152114",
            skills: ["Python", "Programming", "Data Analysis", "Automation"],
            category: "Programming"
        },
        {
            title: "IIT Madras - MLT workshop",
            issuer: "IIT Madras BS in Data Science Programme",
            issuedDate: "Feb 2025",
            credentialId: "MLT Workshop",
            skills: ["Machine Learning Techniques", "NumPy", "Teamwork", "Data Science"],
            category: "Workshop"
        },
        {
            title: "SQL for Data Science",
            issuer: "Codebasics",
            issuedDate: "Jan 2025",
            credentialId: "CB-82-152114",
            skills: ["SQL", "Database", "Data Science", "Data Querying"],
            category: "Programming"
        },
        {
            title: "IIT Madras - Foundation Level Certificate",
            issuer: "IIT Madras BS in Data Science Programme",
            issuedDate: "May 2024",
            credentialId: "Foundation Level",
            skills: ["Statistics", "Mathematics", "Python", "Data Science Foundation"],
            category: "Academic"
        }
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            'AI/ML': 'from-blue-500 to-purple-600',
            'Programming': 'from-green-500 to-blue-600',
            'Workshop': 'from-orange-500 to-red-600',
            'Academic': 'from-purple-500 to-pink-600'
        };
        return colors[category] || 'from-gray-500 to-gray-600';
    };

    return (
        <section id="certifications" className="section-padding bg-gray-50 dark:bg-secondary-800">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
                        My <span className="gradient-text">Certifications</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></motion.div>
                    <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Professional certifications and achievements that demonstrate my expertise in AI/ML, data science, and programming.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="card group overflow-hidden relative"
                        >
                            {/* Category Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(cert.category)} shadow-lg`}>
                                {cert.category}
                            </div>

                            {/* Certificate Icon */}
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 mt-6">
                                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <FiAward className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Certificate Content */}
                            <div className="text-center px-6 pb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                                    {cert.title}
                                </h3>

                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <FiCalendar className="w-4 h-4" />
                                        <span>{cert.issuedDate}</span>
                                    </div>
                                    <p className="font-medium text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">ID: {cert.credentialId}</p>
                                </div>

                                {/* Skills */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1 justify-center">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Certificate Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                                >
                                    
                                </motion.button>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Continuously learning and expanding my skillset
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <FiAward className="w-5 h-5" />
                        Let's Connect
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
