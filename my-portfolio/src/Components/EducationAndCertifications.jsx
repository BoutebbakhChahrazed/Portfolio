import React from "react";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master's Degree in Data Science & AI",
      institution: "University Constantine 2",
      location: "Constantine, Algeria",
      year: "Sep 2021 – June 2026",
      description:
        "Academic training in machine learning, deep learning, distributed computing, and data engineering. Specialization in predictive modeling, computer vision, generative AI, and cloud-to-edge IoT integrations.",
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "PySpark & Big Data",
        "Cloud Computing",
        "Database Systems",
        "IoT Architectures",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Google Cloud Compute Basics",
      issuer: "Google Cloud",
      badge: "Cloud Infrastructure",
      skills: ["Compute Engine", "Virtual Machines", "GCP Architecture", "Networking"],
    },
    {
      id: 2,
      title: "Kubernetes in Google Cloud",
      issuer: "Google Cloud",
      badge: "Container Orchestration",
      skills: ["Kubernetes", "Docker", "GKE", "Containerized Deployments", "Microservices"],
    },
    {
      id: 3,
      title: "Build a Data Warehouse with BigQuery",
      issuer: "Google Cloud",
      badge: "Data Warehousing",
      skills: ["BigQuery", "Data Warehousing", "SQL Analytics", "ETL Pipelines", "Data Modeling"],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            Academic training in Data Science &amp; AI paired with verified Google Cloud computing credentials.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-gray-900 mb-5">
            Academic Background
          </h3>

          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50/70 rounded-2xl p-7 border border-gray-200/80 shadow-2xs"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-pink-100 text-pink-700 mb-1.5 inline-block">
                      Master's Degree
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 font-medium text-xs mt-0.5">
                      {edu.institution} • <span className="text-gray-500">{edu.location}</span>
                    </p>
                  </div>

                  <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold self-start">
                    {edu.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-5 text-sm leading-relaxed max-w-3xl">
                  {edu.description}
                </p>

                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Core Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-0.5 bg-white border border-gray-200 text-gray-800 rounded-md text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-5">
            Google Cloud Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">Verified</span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-pink-600 font-medium text-xs mb-3">
                    {cert.issuer}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-gray-50 text-gray-600 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Google Cloud Credential
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
