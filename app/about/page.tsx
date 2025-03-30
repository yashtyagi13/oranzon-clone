import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: "4rem 1rem", minHeight: "50vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1>About Us</h1>
          <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
            This page is about Oranzon and our journey in crafting digital experiences.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
