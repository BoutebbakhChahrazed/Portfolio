import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/react";

export const AboutMe = () => {
  const skillCategories = [
    {
      name: "Data Science & Machine Learning",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Matplotlib",
        "ETL",
        "PySpark",
        "Hadoop",
      ],
    },
    {
      name: "Cloud & Infrastructure",
      skills: [
        "Google Cloud Platform",
        "Compute Engine",
        "BigQuery",
        "AWS (IAM, EC2, S3)",
        "Docker",
        "Kubernetes",
        "Linux",
        "Virtualization",
        "Containers",
        "Git",
      ],
    },
    {
      name: "Databases & Graph DB",
      skills: [
        "SQL",
        "MySQL",
        "PostgreSQL",
        "NoSQL",
        "MongoDB",
        "Graph DB (Neo4j)",
      ],
    },
    {
      name: "IoT & Embedded Systems",
      skills: [
        "Arduino Portenta",
        "ESP32",
        "Sensors SDK Integration",
        "Real-time Pipelines",
        "REST APIs",
      ],
    },
  ];

  const languages = [
    { lang: "Arabic", level: "Native" },
    { lang: "English", level: "Good / Professional" },
    { lang: "French", level: "Good / Professional" },
  ];

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-50/70 border-t border-b border-gray-100">
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
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-7 rounded-2xl shadow-xs border border-gray-100 space-y-5"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who am I?
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                I'm <strong>Chahrazed Boutebbakh</strong>, a Data Science &amp; AI Engineering graduate with hands-on experience across cloud infrastructure (GCP, AWS), containerized deployments (Docker, Kubernetes), database administration, and IoT systems.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Experienced in building end-to-end data pipelines from raw sensor and imagery data through cloud processing to structured, analysis-ready output — including a precision-agriculture platform that reached <strong>94.8% classification accuracy</strong>.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-pink-50/60 rounded-xl border border-pink-100">
                <div className="text-2xl font-extrabold text-pink-600">94.8%</div>
                <div className="text-xs text-gray-600 font-medium mt-0.5">Model Accuracy</div>
              </div>

              <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-100">
                <div className="text-2xl font-extrabold text-purple-600">4</div>
                <div className="text-xs text-gray-600 font-medium mt-0.5">Industry Internships</div>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2 border-t border-gray-100">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((item) => (
                  <span
                    key={item.lang}
                    className="px-3 py-1 bg-gray-50 rounded-lg text-xs font-medium text-gray-700 border border-gray-200"
                  >
                    <strong>{item.lang}:</strong> {item.level}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="/resume.pdf"
                download="Chahrazed_Boutebbakh_CV.pdf"
                className="px-5 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-full font-medium text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <button
                onClick={scrollToExperience}
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-full font-medium text-xs hover:bg-gray-50 transition-all cursor-pointer"
              >
                View Experience
              </button>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-7 rounded-2xl shadow-xs border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Technical Skills &amp; Stack
            </h3>

            <div className="space-y-5">
              {skillCategories.map((category) => (
                <div key={category.name} className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2.5 text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    <span>{category.name}</span>
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Tooltip key={skill} content={`Skill: ${skill}`}>
                        <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md text-xs font-medium hover:border-pink-300 hover:text-pink-600 transition-colors cursor-default">
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
