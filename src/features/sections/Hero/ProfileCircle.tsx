"use client";
import React from "react";
import Image from "next/image";

export interface FloatingChip {
  label: string;
  /** Position relative to the circle frame */
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  /** CSS animation-delay e.g. "0s", "0.4s" */
  delay?: string;
}

interface ProfileCircleProps {
  imageSrc?: string;
  chips?: FloatingChip[];
}

const DEFAULT_CHIPS: FloatingChip[] = [
  { label: "Web Developer", top: "12%", right: "-6%", delay: "0s" },
  { label: "UI/UX Designer", top: "44%", right: "-10%", delay: "0.4s" },
  { label: "Graphic Designer", bottom: "14%", left: "-4%", delay: "0.8s" },
];

export default function ProfileCircle({
  imageSrc = "/assets/Profile.png",
  chips = DEFAULT_CHIPS,
}: ProfileCircleProps) {
  return (
    <div className="profile-circle-wrapper animate-slide-in-right animation-delay-600">
      {/* Glowing ring — overflow visible so chips render outside */}
      <div className="profile-circle-ring">
        {/* Image clipped to circle */}
        <div className="profile-circle-image">
          <Image
            src={imageSrc}
            alt="Profile photo"
            fill
            sizes="(max-width: 1024px) 300px, 400px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Floating role chips */}
        {chips.map((chip) => (
          <span
            key={chip.label}
            className="profile-chip"
            style={{
              top: chip.top,
              bottom: chip.bottom,
              left: chip.left,
              right: chip.right,
              animationDelay: chip.delay ?? "0s",
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}
