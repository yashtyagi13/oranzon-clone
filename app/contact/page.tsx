import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function Contact() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Contact Us</h1>
        <p>
          Get in touch with us via email at{" "}
          <a href="mailto:hey@oranzon.com">hey@oranzon.com</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
