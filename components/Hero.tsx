"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        background: "url('/hero-bg.jpg') center/cover no-repeat, #e0e0e0",
        display: "flex",
        alignItems: "center"
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ padding: "4rem 0", color: "#333" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Crafting Your Digital Identity
        </h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px", marginBottom: "2rem" }}>
          Continuously endeavoring to craft outstanding experiences and narrate
          your story in a meaningful way.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
