import {
  AboutMe,
  Contact,
  FAQ,
  Footer,
  Hero,
  NavBar,
  Projects,
  Services,
} from "@/features";

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
