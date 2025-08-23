"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function HeroButtons() {
  return (
    <div className="flex gap-6 justify-center lg:justify-start flex-wrap animate-slide-in-left animation-delay-1000">
      <button
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          projectsSection?.scrollIntoView({ behavior: "smooth" });
        }}
        className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group hover:opacity-80 shadow-lg"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--bg-color)",
        }}
      >
        <Icon
          icon="mdi:account"
          className="text-xl group-hover:rotate-12 transition-transform"
        />
        View Portfolio
      </button>
      <a
        href="/assets/Resume/RESUME-Raffy-francisco.pdf"
        download="RESUME-Raffy-francisco.pdf"
        className="border-2 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group hover:opacity-80 shadow-lg cursor-pointer"
        style={{
          borderColor: "var(--secondary-color)",
          color: "var(--secondary-color)",
        }}
      >
        <Icon
          icon="mdi:download"
          className="text-xl group-hover:scale-110 transition-transform"
        />
        Download Resume
      </a>
    </div>
  );
}
