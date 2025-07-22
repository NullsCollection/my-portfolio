"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface SocialLink {
  icon: string;
  href: string;
  label: string;
  hoverColor: string;
}

interface QuickLink {
  label: string;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      icon: "mdi:github",
      href: "https://github.com/NullsCollection",
      label: "GitHub Profile",
      hoverColor: "hover:text-gray-900",
    },
    {
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/raffy-francisco-50607b325/",
      label: "LinkedIn Profile",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: "mdi:whatsapp",
      href: "https://wa.me/+639600723886",
      label: "WhatsApp Profile",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: "mdi:email",
      href: "mailto:raffy7792@gmail.com",
      label: "Email Contact",
      hoverColor: "hover:text-red-500",
    },
  ];

  const quickLinks: QuickLink[] = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer
      className="py-12 mt-20 border-t"
      style={{
        backgroundColor: "var(--light-bg-color)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: "var(--primary-color)" }}
            >
              Portfolio
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--secondary-color)" }}
            >
              Crafting digital experiences with passion and precision. Let's
              build something amazing together.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-2xl transition-all duration-300 transform hover:scale-110 ${social.hoverColor}`}
                  style={{ color: "var(--secondary-color)" }}
                >
                  <Icon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm transition-colors duration-300 hover:opacity-80"
                  style={{ color: "var(--secondary-color)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Get In Touch
            </h4>
            <div
              className="space-y-2 text-sm"
              style={{ color: "var(--secondary-color)" }}
            >
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Icon icon="mdi:email" className="text-base" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  raffy7792@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Icon icon="mdi:map-marker" className="text-base" />
                <span>Remote / Worldwide</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-6"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className="text-sm text-center md:text-left"
              style={{ color: "var(--secondary-color)" }}
            >
              © {currentYear} Portfolio. All rights reserved.
            </p>

            {/* Tech Stack */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--secondary-color)" }}
            >
              <span>Built with</span>
              <div className="flex items-center gap-1">
                <Icon icon="logos:nextjs-icon" className="text-base" />
                <Icon icon="logos:typescript-icon" className="text-base" />
                <Icon icon="logos:tailwindcss-icon" className="text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
