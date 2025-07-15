"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg transition-all duration-300 ${
        isScrolled ? "bg-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Mobile/Tablet Brand */}
          <div className="lg:hidden flex items-center">
            <a
              href="#home"
              className="font-bold text-xl sm:text-2xl text-primary transition-colors duration-300"
            >
              NuLLzCollection
            </a>
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
            <a
              href="#home"
              className="font-light text-light hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="font-light text-light hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              Service
            </a>
            <a
              href="#projects"
              className="font-light text-light hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#home"
              className="font-bold text-2xl text-primary transform hover:scale-105 transition-all duration-300"
            >
              NuLLzCollection
            </a>
            <a
              href="#about"
              className="font-light text-light hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-light text-light hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              Contacts
            </a>
            <a
              href="#faqs"
              className="font-light text-light hover:text-primary transform hover:scale-105 transition-all duration-300"
            >
              Faqs
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <Icon
                icon="solar:letter-bold"
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
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-auto opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-4"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2 sm:space-y-3">
            <a
              href="#home"
              className={`block text-light hover:text-primary transition-all duration-300 py-2 transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-100"
                  : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className={`block font-light text-light hover:text-primary transition-all duration-300 py-2 transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-150"
                  : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </a>
            <a
              href="#projects"
              className={`block font-light text-light hover:text-primary transition-all duration-300 py-2 transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-200"
                  : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className={`block font-light text-light hover:text-primary transition-all duration-300 py-2 transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-300"
                  : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={`block font-light text-light hover:text-primary transition-all duration-300 py-2 transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-350"
                  : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#faqs"
              className={`block font-light text-light hover:text-primary transition-all duration-300 py-2 transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-400"
                  : "opacity-0 -translate-x-4"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Faqs
            </a>

            {/* Mobile/Tablet Social Icons */}
            <div
              className={`flex items-left justify-left sm:justify-start space-x-4 sm:space-x-6 pt-4 mt-4 border-t border-light-blue transform ${
                isMenuOpen
                  ? "opacity-100 translate-x-0 delay-450"
                  : "opacity-0 -translate-x-4"
              } transition-all duration-300`}
            >
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
