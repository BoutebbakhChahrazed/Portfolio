import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from "@heroui/react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Recommender",
      description: "Built a hybrid recommendation system combining collaborative filtering and NLP for product suggestions.",
      tags: ["AI", "Python", "Flask", "React"],
      category: "AI/ML",
      image: "/project1.jpg", // Replace with your image path
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard analyzing COVID-19 trends with D3.js and Python backend.",
      tags: ["Data Science", "D3.js", "Python"],
      category: "Data Science",
      image: "/project2.jpg",
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      id: 3,
      title: "Portfolio Website (This Site)",
      description: "Modern responsive portfolio with animated UI elements and dark mode.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      category: "Web Dev",
      image: "/project3.jpg",
      links: {
        live: "#",
        code: "#"
      }
    }
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Category filters
  const filters = ['All', 'Web Dev', 'Data Science', 'AI/ML'];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
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
            My <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-tr from-pink-100 to-violet-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Tooltip key={tag} content={`${tag} implementation`}>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    </Tooltip>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.links.live} 
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.links.code} 
                    className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};