"use client";
import React from "react";
import { motion } from "framer-motion";

const works = [
  { title: "Headphone", category: "Visual Identity", year: "2024" },
  { title: "Lens", category: "Web Design", year: "2023" },
  { title: "Eletrik", category: "Custom Website", year: "2022" },
  { title: "Vista", category: "Website Design", year: "2021" },
];

const Works: React.FC = () => {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2>Selected Work</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index }}
              style={{
                flex: "1 1 200px",
                margin: "1rem",
                padding: "1rem",
                background: "#f9f9f9",
              }}
            >
              <h3>{work.title}</h3>
              <p>
                {work.category} • {work.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
