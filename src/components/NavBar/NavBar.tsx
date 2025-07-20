"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  scrollToSection,
  getCurrentSection,
  throttle,
} from "@/lib/scrollUtils";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const sectionIds = [
    "home",
    "services",
    "projects",
    "about",
    "contact",
    "faq",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId, { offset: 80 }); // Offset for fixed navbar
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section
      const currentSection = getCurrentSection(sectionIds, 100);
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg transition-all duration-300 ${
        isScrolled ? "bg-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Mobile/Small Tablet Brand */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="font-bold text-xl sm:text-2xl text-primary transition-colors duration-300"
            >
              NuLLzCollection
            </button>
          </div>

          {/* Left Section - Desktop Social Icons */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="https://www.behance.net/nullzvectcollection"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Behance Profile"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Icon
                icon="lineicons:behance"
                className="text-5xl bg-light hover:text-primary transition-colors duration-300 p-2 rounded-full cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/raffy-francisco-50607b325/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Icon
                icon="ri:linkedin-fill"
                className="text-5xl bg-light hover:text-primary transition-colors duration-300 p-2 rounded-full cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop/Tablet Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={() => handleNavClick("home")}
              className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                activeSection === "home" ? "text-primary" : "text-light"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                activeSection === "services" ? "text-primary" : "text-light"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                activeSection === "projects" ? "text-primary" : "text-light"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("home")}
              className="font-bold text-2xl text-primary transform hover:scale-105 transition-all duration-300"
            >
              NuLLzCollection
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                activeSection === "about" ? "text-primary" : "text-light"
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                activeSection === "faq" ? "text-primary" : "text-light"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                activeSection === "contact" ? "text-primary" : "text-light"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <Icon
                icon="solar:letter-bold"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=raffy7792@gmail.com",
                    "_blank"
                  )
                }
                className="text-5xl bg-light hover:text-primary transition-colors duration-300 p-2 rounded-full cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-light hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <Icon
              icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
              className={`text-2xl transition-all duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "h-auto max-h-[80vh] opacity-100"
              : "h-0 max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2 sm:space-y-3 animate-fadeIn">
            <button
              onClick={() => handleNavClick("home")}
              className={`block w-full text-left hover:text-primary transition-all duration-300 py-2 ${
                activeSection === "home" ? "text-primary" : "text-light"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`block w-full text-left font-light hover:text-primary transition-all duration-300 py-2 ${
                activeSection === "services" ? "text-primary" : "text-light"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className={`block w-full text-left font-light hover:text-primary transition-all duration-300 py-2 ${
                activeSection === "projects" ? "text-primary" : "text-light"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`block w-full text-left font-light hover:text-primary transition-all duration-300 py-2 ${
                activeSection === "about" ? "text-primary" : "text-light"
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className={`block w-full text-left font-light hover:text-primary transition-all duration-300 py-2 ${
                activeSection === "faq" ? "text-primary" : "text-light"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`block w-full text-left font-light hover:text-primary transition-all duration-300 py-2 ${
                activeSection === "contact" ? "text-primary" : "text-light"
              }`}
            >
              Contact
            </button>

            {/* Mobile/Tablet Social Icons */}
            <div className="flex items-left justify-left sm:justify-start space-x-4 sm:space-x-6 pt-4 mt-4 border-t border-light-blue transition-all duration-300">
              <a
                href="https://www.behance.net/nullzvectcollection"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Behance Profile"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon
                  icon="tdesign:logo-behance-filled"
                  className="text-3xl text-color hover:text-primary transition-colors duration-300 cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/raffy-francisco-50607b325/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon
                  icon="entypo-social:linkedin-with-circle"
                  className="text-3xl text-color hover:text-primary transition-colors duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
