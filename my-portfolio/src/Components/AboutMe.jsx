import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/react";

export const AboutMe = () => {
  // Skills data (organized by category)
  const skills = {
    "Web Development": ["HTML/CSS", "JavaScript", "React", "TailwindCSS"],
    "Data Science": ["Python", "Pandas", "NumPy", "SQL", "Tableau", "Power BI"],
    "AI/ML": ["TensorFlow", "PyTorch", "NLP", "LLMs", "Computer Vision"],
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
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
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Boutebbakh Chahrazed, a multidisciplinary developer passionate
              about building intelligent web applications powered by data and
              AI. With a background in both frontend development and machine
              learning, I bridge the gap between design and algorithms.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing advanced studies in AI while freelancing as a
              full-stack developer, I thrive on solving complex problems with
              elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                Download CV
              </button>
              <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              My{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mr-2"></span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <Tooltip key={skill} content={`Projects using ${skill}`}>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-white transition-all cursor-default">
                          {skill}
                        </span>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
