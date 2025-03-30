import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>About Us</h1>
        <p>
          This page is about Oranzon and our journey in crafting digital
          experiences.
        </p>
      </main>
      <Footer />
    </>
  );
}
