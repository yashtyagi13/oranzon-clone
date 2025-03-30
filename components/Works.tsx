"use client";
import React from "react";
import { motion } from "framer-motion";

const works = [
  { title: "Headphone", category: "Visual Identity", year: "2024" },
  { title: "Lens", category: "Web Design", year: "2023" },
  { title: "Eletrik", category: "Custom Website", year: "2022" },
  { title: "Vista", category: "Website Design", year: "2021" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Works: React.FC = () => {
  return (
    <section style={{ padding: "4rem 0", background: "#fff" }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Selected Work
        </motion.h2>
        <motion.div
          className="works-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem"
          }}
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: "#f9f9f9",
                padding: "2rem",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{work.title}</h3>
              <p>
                {work.category} • {work.year}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
