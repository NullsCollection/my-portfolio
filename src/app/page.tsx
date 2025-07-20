
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-light font-poppins">
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <AboutMe />
      <FAQ />
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
