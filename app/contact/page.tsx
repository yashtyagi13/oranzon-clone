import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function Contact() {
  return (
    <>
      <Header />
      <main style={{ padding: "4rem 1rem", minHeight: "50vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1>Contact Us</h1>
          <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
            Get in touch with us via email at <a href="mailto:hey@oranzon.com">hey@oranzon.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
