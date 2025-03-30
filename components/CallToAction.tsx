"use client";
import React from "react";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "#d0d0d0",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2>Let&apos;s Work Together</h2>
        <p>Ready to create something amazing? Get in touch!</p>
      </div>
    </motion.section>
  );
};

export default CallToAction;
