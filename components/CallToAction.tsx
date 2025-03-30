"use client";
import React from "react";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <section
      style={{
        background: "#333",
        color: "#fff",
        padding: "4rem 2rem",
        textAlign: "center"
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Let&apos;s Work Together</h2>
        <p style={{ marginBottom: "2rem" }}>
          Ready to create something amazing? Get in touch!
        </p>
        <a
          href="/contact"
          style={{
            background: "#fff",
            color: "#333",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            fontWeight: "600"
          }}
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
