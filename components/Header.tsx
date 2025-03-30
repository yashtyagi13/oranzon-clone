"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Header: React.FC = () => {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: "#fff",
        borderBottom: "1px solid #eaeaea",
        position: "sticky",
        top: 0,
        zIndex: 999
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Oranzon</h1>
        <nav>
          <Link href="/" style={{ margin: "0 1rem" }}>Home</Link>
          <Link href="/about" style={{ margin: "0 1rem" }}>About</Link>
          <Link href="/projects" style={{ margin: "0 1rem" }}>Projects</Link>
          <Link href="/pricing" style={{ margin: "0 1rem" }}>Pricing</Link>
          <Link href="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
