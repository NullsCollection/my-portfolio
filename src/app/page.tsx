import { Icon } from "@iconify/react";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-light font-poppins">
      <NavBar />
      <Hero />
      <Services />
      {/* Footer */}
      <Footer />
    </div>
  );
}
