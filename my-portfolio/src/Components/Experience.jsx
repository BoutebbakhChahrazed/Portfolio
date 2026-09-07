import React from 'react';
import { motion } from 'framer-motion';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "AI & IoT Intern",
      company: "CRBt (Centre de Recherche en Biotechnologie)",
      location: "Constantine, Algeria",
      period: "May – June 2026",
      badge: "IoT & Precision Agriculture",
      description: [
        "Installed and configured an Arduino Portenta IoT device, including network setup and sensor SDK integration, for real-time soil-moisture monitoring.",
        "Built and maintained an automated data pipeline transforming raw sensor readings into structured irrigation decisions, reducing manual monitoring needs."
      ],
      skills: ["Arduino Portenta", "IoT Systems", "Sensor SDK", "Data Pipelines", "Automation"],
    },
    {
      id: 2,
      role: "Data Science Intern",
      company: "Algérie Télécom",
      location: "Constantine, Algeria",
      period: "March – April 2026",
      badge: "Computer Vision & Transformers",
      description: [
        "Evaluated and documented computer vision and Transformer-based architectures for internal data science use cases, supporting the team’s technical decision-making."
      ],
      skills: ["Computer Vision", "Transformers", "Model Benchmarking", "Python"],
    },
    {
      id: 3,
      role: "Data Science Intern",
      company: "Prodigy InfoTech",
      location: "Remote",
      period: "Oct – Nov 2025",
      badge: "Predictive Analytics & Cleaning",
      description: [
        "Delivered 5 end-to-end data projects spanning data cleaning, mapping, and quality control across multiple structured and unstructured sources.",
        "Engineered analytical solutions including population analysis, sentiment analysis, and traffic-pattern prediction."
      ],
      skills: ["Data Cleaning", "Sentiment Analysis", "Traffic Prediction", "Pandas", "scikit-learn"],
    },
    {
      id: 4,
      role: "Gen AI & Frontend Development Intern",
      company: "Thynk Tech DZ",
      location: "Algiers, Algeria",
      period: "March – Oct 2025",
      badge: "RAG & Graph DB & React",
      description: [
        "Designed and deployed a RAG-based system integrating a Neo4j graph database with a REST API layer.",
        "Built the accompanying React frontend to support stakeholder-facing data queries."
      ],
      skills: ["RAG", "Neo4j Graph DB", "REST API", "React", "Gen AI"],
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50/70 border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Work{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-md mx-auto text-sm">
            Internships spanning IoT hardware, computer vision, data engineering, and generative AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-pink-200 ml-4 md:ml-8 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline clean dot */}
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-pink-500 shadow-2xs"></span>

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-pink-50 text-pink-700 inline-block mb-1">
                      {exp.badge}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      {exp.company} • <span className="text-gray-500">{exp.location}</span>
                    </p>
                  </div>

                  <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc pl-5 mb-4 space-y-1.5 text-gray-600 text-xs leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Link */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download="Chahrazed_Boutebbakh_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-full font-medium text-xs shadow-xs hover:shadow-md transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Official Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
};