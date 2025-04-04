"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ background: "#e0e0e0", padding: "4rem 2rem" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2>Crafting </h2>
        <p>
          Continuously endeavoring to craft outstanding experiences and narrate
          your story in a meaningful way.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
