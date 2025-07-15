"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function Services() {
  const services = [
    {
      icon: "mdi:web",
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies",
    },
    {
      icon: "mdi:palette",
      title: "Graphic Design",
      description:
        "Creative visual solutions for branding and marketing materials",
    },
    {
      icon: "mdi:mobile-phone",
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
    },
    {
      icon: "mdi:search-web",
      title: "SEO Optimization",
      description:
        "Improve your website's visibility and search engine rankings",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-light">
            My Services
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I offer a range of professional services to help bring your ideas to
            life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--light-bg-color)" }}
            >
              <div className="mb-4">
                <Icon
                  icon={service.icon}
                  className="text-5xl mx-auto"
                  style={{ color: "var(--primary-color)" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-light">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
