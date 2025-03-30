import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
