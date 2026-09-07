import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from "@heroui/react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "PhytoSpectra",
      subtitle: "Precision Agriculture & Crop-Stress Classification",
      metric: "94.8% Detection Accuracy",
      description: "Built a full data pipeline: drone multispectral imagery → cloud processing → automated crop-stress classification. Integrated ESP32 IoT to transmit drone-captured imagery to the cloud for processing.",
      tags: ["ESP32 IoT", "Computer Vision", "Cloud Processing", "Data Pipeline", "Python"],
      category: "AI/ML",
      links: {
        live: "",
        code: "https://github.com/BoutebbakhChahrazed"
      }
    },
    {
      id: 2,
      title: "Ussraty",
      subtitle: "AI Legal Assistant with RAG & Graph Database",
      metric: "Graph-Native RAG",
      description: "AI legal assistant built on Retrieval-Augmented Generation (RAG), LangChain, and a Neo4j graph database. Collected and structured legal articles into CSV and graph-native formats for grounded legal queries.",
      tags: ["GenAI / RAG", "LangChain", "Neo4j Graph DB", "Python"],
      category: "Gen AI",
      links: {
        live: "",
        code: "https://github.com/BoutebbakhChahrazed"
      }
    },
    {
      id: 3,
      title: "Raqib AI",
      subtitle: "Arabic NLP Hate-Speech Detection Engine",
      metric: "Fine-Tuned AraBERT",
      description: "NLP hate-speech detection tool fine-tuning AraBERT and DziriBERT on multi-source Arabic and dialectal social datasets harvested via Tweepy, Apify, and YouTube APIs.",
      tags: ["NLP", "AraBERT", "DziriBERT", "PyTorch", "APIs", "Python"],
      category: "AI/ML",
      links: {
        live: "",
        code: "https://github.com/BoutebbakhChahrazed"
      }
    },
    {
      id: 4,
      title: "Big Data with PySpark",
      subtitle: "Distributed Large-Scale Data Pipeline & Analytics",
      metric: "Distributed ETL",
      description: "Applied PySpark transformations and actions to clean, transform, and map high-volume datasets with distributed processing, data quality assurance, and fault tolerance.",
      tags: ["PySpark", "Big Data", "Distributed Computing", "ETL", "Hadoop"],
      category: "Data Science",
      links: {
        live: "",
        code: "https://github.com/BoutebbakhChahrazed"
      }
    }
  ];

  const filters = ['All', 'AI/ML', 'Gen AI', 'Data Science'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            End-to-end applications demonstrating machine learning, distributed computing, and generative AI systems.
          </p>
          
          {/* Clean Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                layout
                className="bg-gray-50/60 rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-gray-200 text-pink-700 inline-block mb-1.5">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">{project.subtitle}</p>
                    </div>

                    <span className="px-2.5 py-1 bg-white border border-pink-200 text-pink-700 text-xs font-bold rounded-lg shrink-0">
                      {project.metric}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-white border border-gray-200 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/80">
                  <a 
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-900 hover:bg-black text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.313-1.807-1.313-1.807-1.073-.732.083-.718.083-.718 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                  </a>

                  <span className="px-3 py-2 bg-gray-100 text-gray-500 rounded-xl text-xs font-medium cursor-default">
                    Open Source
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/BoutebbakhChahrazed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-semibold text-xs transition-colors"
          >
            <span>Explore All Repositories on GitHub @BoutebbakhChahrazed</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};