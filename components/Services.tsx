"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging interfaces that prioritize the user experience."
  },
  {
    title: "Visual Identity",
    description: "Developing cohesive brand identities by designing logos, color schemes, and typography."
  },
  {
    title: "Digital Marketing",
    description: "Designing assets and materials for effective digital marketing campaigns."
  },
  {
    title: "Website Design",
    description: "Creating visually appealing and functional websites, adapted to client needs."
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  return (
    <section style={{ padding: "4rem 0" }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Meet Our Services
        </motion.h2>
        <motion.div
          className="services-grid"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: "#f1f1f1",
                padding: "2rem",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <h3 style={{ marginBottom: "1rem" }}>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
