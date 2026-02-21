"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  scrollToSection,
  getCurrentSection,
  throttle,
} from "@/lib/scrollUtils";
import { SECTION_IDS, NAV_ITEMS, NAVBAR_CONFIG } from "@/config/navigation";
import { siteConfig, socialLinks } from "@/config";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const desktopSplitIndex = Math.ceil(NAV_ITEMS.length / 2);
  const desktopLeftItems = NAV_ITEMS.slice(0, desktopSplitIndex);
  const desktopRightItems = NAV_ITEMS.slice(desktopSplitIndex);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId, { offset: NAVBAR_CONFIG.scrollOffset });
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > NAVBAR_CONFIG.scrollThreshold);

      // Update active section
      const currentSection = getCurrentSection(
        SECTION_IDS as unknown as string[],
        NAVBAR_CONFIG.sectionDetectionOffset,
      );
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }, NAVBAR_CONFIG.throttleDelay);

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
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="font-bold text-xl sm:text-2xl text-primary transition-colors duration-300"
            >
              {siteConfig.brandName}
            </button>
          </div>

          {/* Left Section - Desktop Social Icons */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href={socialLinks.behance.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks.behance.label}
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Icon
                icon={socialLinks.behance.icon}
                className="text-5xl bg-light hover:text-primary transition-colors duration-300 p-2 rounded-full cursor-pointer"
              />
            </a>
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks.linkedin.label}
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Icon
                icon={socialLinks.linkedin.icon}
                className="text-5xl bg-light hover:text-primary transition-colors duration-300 p-2 rounded-full cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
            {desktopLeftItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                  activeSection === item.id ? "text-primary" : "text-light"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("home")}
              className="font-bold text-2xl text-primary transform hover:scale-105 transition-all duration-300"
            >
              {siteConfig.brandName}
            </button>

            {desktopRightItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-light hover:text-primary transform hover:scale-105 transition-all duration-300 ${
                  activeSection === item.id ? "text-primary" : "text-light"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:block transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <Icon
              icon={socialLinks.email.icon}
              onClick={() =>
                window.open(socialLinks.email.composeUrl, "_blank")
              }
              className="text-5xl bg-light hover:text-primary transition-colors duration-300 p-2 rounded-full cursor-pointer"
            />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-light hover:text-primary transition-all duration-300 hover:scale-110"
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
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "h-auto max-h-[80vh] opacity-100"
              : "h-0 max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2 sm:space-y-3 animate-fadeIn">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left font-light hover:text-primary transition-all duration-300 py-2 ${
                  activeSection === item.id ? "text-primary" : "text-light"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile/Tablet Social Icons */}
            <div className="flex items-left justify-left sm:justify-start space-x-4 sm:space-x-6 pt-4 mt-4 border-t border-light-blue transition-all duration-300">
              <a
                href={socialLinks.behance.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLinks.behance.label}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon
                  icon={socialLinks.behance.mobileIcon}
                  className="text-3xl text-color hover:text-primary transition-colors duration-300 cursor-pointer"
                />
              </a>
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLinks.linkedin.label}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon
                  icon={socialLinks.linkedin.mobileIcon}
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
