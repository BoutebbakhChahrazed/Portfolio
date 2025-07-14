import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from "@heroui/react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "Company Name",
      period: "Summer 2023",
      description: [
        "Developed and maintained features for an e-commerce platform using React.js and Node.js",
        "Implemented responsive UI components that improved mobile conversion by 15%",
        "Integrated payment gateways (Stripe) and optimized checkout flow"
      ],
      skills: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "web"
    },
    {
      id: 2,
      role: "AI Research Intern (LLMs)",
      company: "Company/University Name",
      period: "Winter 2023",
      description: [
        "Researched and fine-tuned large language models for specific domain applications",
        "Developed prompt engineering strategies that improved model accuracy by 12%",
        "Created API endpoints for model deployment using Flask"
      ],
      skills: ["Python", "PyTorch", "HuggingFace", "Prompt Engineering", "Flask"],
      category: "ai"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 to-violet-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 relative ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:pl-0 pl-12' : 'md:ml-auto md:pl-16 md:pr-0 pl-12'}`}
              style={{ maxWidth: '500px' }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full ${exp.category === 'web' ? 'bg-pink-500' : 'bg-violet-500'}`}
                style={{ left: '-2.1rem', top: '1.2rem' }}
              ></div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Tooltip key={skill} content={`Applied in ${exp.company} project`}>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.category === 'web' 
                          ? 'bg-pink-100 text-pink-800' 
                          : 'bg-violet-100 text-violet-800'
                      }`}>
                        {skill}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Want to see more details about my professional journey?</p>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full font-medium hover:shadow-lg transition-all">
            Download Full Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};