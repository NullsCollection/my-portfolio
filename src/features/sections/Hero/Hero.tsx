import React from "react";
import { Icon } from "@iconify/react";
import HeroButtons from "./HeroButtons";
import ProfileCircle from "./ProfileCircle";

export default function Hero() {
  return (
    <main
      id="home"
      className="bg-images fade-image-bg min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-6xl px-6 py-8">
        {/* Two Column Grid Layout */}
        <div className="mt-8 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
          {/* Left Column - Welcome Message & Action Buttons */}
          <div className="text-center lg:text-left space-y-8">
            {/* Welcome Message */}
            <div>
              {/* Availability Text - First Animation */}
              <p className="text-md max-w-2xl mx-auto text-secondary flex items-center justify-center lg:justify-start gap-2 animate-slide-in-left">
                Available for Freelance & Full-Time (Remote)
                <Icon
                  icon="mdi:earth"
                  className="text-primary text-xl animate-pulse"
                />
              </p>

              {/* Line Divider - Second Animation */}
              <div className="border-b-2 border-secondary py-2 animate-fade-in animation-delay-200"></div>

              {/* Hello Button - Third Animation */}
              <div className="flex justify-center lg:justify-start py-2 animate-fade-in-up animation-delay-400">
                <div className="hello-btn-image w-32 h-16 lg:w-40 lg:h-20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  {/* Hello there button image loaded via CSS background */}
                </div>
              </div>

              {/* Name - Fifth Animation */}
              <p className="text-lg md:text-xl lg:text-2xl mx-auto text-light flex items-center justify-center lg:justify-start gap-2 animate-fade-in-up animation-delay-800">
                I&apos;m Raffy Francisco
              </p>

              {/* Main Title - Fourth Animation */}
              <h1 className="mt-2 text-primary text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-in-left animation-delay-600">
                Web Developer &
                <span className="block mt-4 text-white text-5xl">
                  Graphic Designer
                </span>
              </h1>
              {/* Description - Sixth Animation */}
              <p className="text-md max-w-2xl mx-auto lg:mx-0 text-secondary py-2 animate-fade-in animation-delay-1000">
                I design and build responsive, high-performance web interfaces —
                combining strong UI/UX thinking with clean, scalable frontend
                development.
              </p>
            </div>

            {/* Action Buttons - Seventh Animation CSR */}
            <HeroButtons />
          </div>

          {/* Right Column - Profile Circle */}
          <div className="flex justify-center items-center h-full relative">
            {/* Profile circle with floating chips — customise chips prop to change labels/positions */}
            <ProfileCircle />

            {/* Floating Experience Button - Ninth Animation */}
            <div className="absolute bottom-4 right-4 animate-fade-in-up animation-delay-1000">
              <div className="exp-floating-btn w-16 h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce">
                {/* Experience button image loaded via CSS background */}
              </div>
            </div>
          </div>
          {/* Floating Image Button */}
        </div>
      </div>
    </main>
  );
}
