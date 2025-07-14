import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from "@heroui/react";

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master's in Artificial Intelligence",
      institution: "University Name",
      year: "2022 - 2024",
      description: "Specialized in Natural Language Processing and Deep Learning. Thesis on 'Fine-tuning LLMs for Domain-Specific Applications'.",
      courses: ["Advanced ML", "NLP", "Computer Vision", "Big Data"],
      logo: "/university-logo.png" // Replace with actual path
    },
    {
      id: 2,
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      year: "2018 - 2022",
      description: "Focus on Software Engineering and Data Structures. Graduated with Honors.",
      courses: ["Algorithms", "Web Development", "DBMS", "Data Mining"],
      logo: "/university-logo2.png"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      year: "2023",
      skills: ["TensorFlow", "Neural Networks", "CNN", "RNN"],
      credential: "Credentials URL/Link"
    },
    {
      id: 2,
      title: "AWS Certified Machine Learning Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      skills: ["SageMaker", "ML Pipelines", "Model Deployment"],
      credential: "Credentials URL/Link"
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      issuer: "The Odin Project",
      year: "2022",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"],
      credential: "Credentials URL/Link"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto"></div>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Academic <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Background</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-pink-300 to-violet-300"></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 transform -translate-x-1/2"></div>
                
                {/* Institution logo */}
                <div className="absolute left-8 top-0 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={edu.logo} alt={edu.institution} className="w-8 h-8 object-contain" />
                </div>

                {/* Content */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mt-2 md:mt-0">
                      {edu.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Tooltip key={course} content={`Projects using ${course}`}>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {course}
                          </span>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Professional <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-pink-500"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{cert.issuer} • {cert.year}</p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Skills Validated:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={cert.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-pink-600 hover:text-pink-700 flex items-center"
                >
                  View Credentials
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};