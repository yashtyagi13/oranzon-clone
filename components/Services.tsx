"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging interfaces.",
  },
  {
    title: "Visual Identity",
    description: "Developing cohesive brand identities.",
  },
  {
    title: "Digital Marketing",
    description: "Effective digital campaign assets.",
  },
  {
    title: "Website Design",
    description: "Visually appealing and functional websites.",
  },
];

const Services: React.FC = () => {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2>Meet Our Services</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
              style={{
                flex: "1 1 200px",
                margin: "1rem",
                padding: "1rem",
                background: "#f1f1f1",
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
