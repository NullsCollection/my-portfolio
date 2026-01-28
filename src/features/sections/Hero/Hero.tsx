import React from "react";
import { Icon } from "@iconify/react";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <main
      id="home"
      className="bg-images fade-image-bg min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-6xl px-6 py-8">
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                Solving user experience problems through thoughtful design and
                engineering
              </p>
            </div>

            {/* Action Buttons - Seventh Animation CSR */}
            <HeroButtons />
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center items-center h-full">
            <div className="w-full h-full relative">
              {/* Profile Image - Eighth Animation */}
              <div className="profile-image w-full h-full min-h-[400px] lg:min-h-[500px] animate-slide-in-right animation-delay-600">
                {/* Profile image is loaded via CSS background from base.css */}
              </div>

              {/* Floating Experience Button - Ninth Animation */}
              <div className="absolute bottom-4 right-4 animate-fade-in-up animation-delay-1000">
                <div className="exp-floating-btn w-16 h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce">
                  {/* Experience button image loaded via CSS background */}
                </div>
              </div>
            </div>
          </div>
          {/* Floating Image Button */}
        </div>
      </div>
    </main>
  );
}
