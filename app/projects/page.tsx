import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function Projects() {
  return (
    <>
      <Header />
      <main style={{ padding: "4rem 1rem", minHeight: "50vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1>Projects</h1>
          <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
            Explore our portfolio of work that demonstrates our expertise.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
