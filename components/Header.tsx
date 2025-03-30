"use client";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header style={{ padding: "1rem", background: "#f7f7f7" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Oranzon</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about" style={{ marginLeft: "1rem" }}>
            About
          </Link>
          <Link href="/projects" style={{ marginLeft: "1rem" }}>
            Projects
          </Link>
          <Link href="/pricing" style={{ marginLeft: "1rem" }}>
            Pricing
          </Link>
          <Link href="/contact" style={{ marginLeft: "1rem" }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
