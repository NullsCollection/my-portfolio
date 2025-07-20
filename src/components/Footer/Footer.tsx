"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      className="py-8 mt-16"
      style={{ backgroundColor: "var(--light-bg-color)" }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Icon
            icon="mdi:github"
            className="text-2xl cursor-pointer transition-colors hover:opacity-80"
            style={{ color: "var(--secondary-color)" }}
          />
          <Icon
            icon="mdi:linkedin"
            className="text-2xl cursor-pointer transition-colors hover:opacity-80"
            style={{ color: "var(--secondary-color)" }}
          />
          <Icon
            icon="mdi:twitter"
            className="text-2xl cursor-pointer transition-colors hover:opacity-80"
            style={{ color: "var(--secondary-color)" }}
          />
        </div>
        <p className="text-sm" style={{ color: "var(--secondary-color)" }}>
          Built with Next.js, TypeScript, Tailwind CSS & Iconify
        </p>
      </div>
    </footer>
  );
}
