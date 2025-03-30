import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function Pricing() {
  return (
    <>
      <Header />
      <main style={{ padding: "4rem 1rem", minHeight: "50vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1>Pricing</h1>
          <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
            Check out our pricing plans tailored to your needs.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
