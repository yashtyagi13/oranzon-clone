"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "2rem", background: "#f7f7f7", textAlign: "center" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ marginBottom: "0.5rem" }}>© 2025 Oranzon. All rights reserved.</p>
        <p>
          <a href="mailto:hey@oranzon.com">hey@oranzon.com</a> | +1-555-555-5555
        </p>
      </div>
    </footer>
  );
};

export default Footer;
