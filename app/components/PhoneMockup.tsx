"use client";
import {
  Bell,
  Brush,
  ChartNoAxesCombined,
  LaptopMinimal,
  MapPin,
  Palette,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import NavigationPhone from "./navigationphone";

interface PhoneMockupProps {
  onClick: () => void;
}

export default function PhoneMockup({ onClick }: PhoneMockupProps) {
  const [currentPage, setCurrentPage] = useState("home");
  const [isPhoneAnimating, setIsPhoneAnimating] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const phoneRef = useRef<HTMLDivElement>(null);

  const handlePhoneClick = () => {
    setIsPhoneAnimating(true);
    setTimeout(() => {
      setCurrentPage("search");
      onClick();
    }, 800);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    
    const rect = phoneRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    const rotateY = deltaX * 15;
    const rotateX = -deltaY * 15; 
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center relative animate-slide-in-right h-auto md:h-[300px] mt-8 md:mt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      {/* Phone container */}
      <div
        ref={phoneRef}
        className={`relative cursor-pointer transition-all duration-700 hover:scale-105 ${
          isPhoneAnimating ? "scale-110 opacity-0" : ""
        }`}
        onClick={handlePhoneClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.3s ease-out"
        }}
      >
        {/* Phone Frame */}
        <div className="relative w-64 h-[520px] md:w-72 md:h-[580px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-16 h-4 md:w-20 md:h-5 bg-black rounded-2xl md:rounded-3xl z-10"></div>

            {/* Phone Content */}
            <div className="p-2 pt-4 md:pt-5">
              <div className="flex items-center justify-between gap-2 mb-3 md:mb-4">
                <div className="flex align-center gap-2">
                  <Image
                    width={28}
                    height={28}
                    src={"/images.jpeg"}
                    className="rounded-full"
                    alt=""
                  />
                  <span className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">Hello john</span>
                </div>
                <Bell className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              </div>

              <h2 className="font-bold text-sm md:text-base mb-2">
                Search and apply to the best universities
              </h2>

              {/* Search Bar */}
              <div className="bg-gray-100 rounded-xl md:rounded-2xl p-1 mb-3 md:mb-4 flex gap-2 text-gray-400">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="text"
                  placeholder="Search universities,locations"
                  className="bg-transparent outline-none text-xs flex-1"
                  readOnly
                />
                <SlidersHorizontal size={16} className="md:w-5 md:h-5" />
              </div>

              {/* Filter Chips */}
              <div className="flex gap-1 mb-1 overflow-x-auto pb-2">
                <span className="bg-blue-600 flex gap-1 text-white px-2 py-1 md:py-2 rounded-full text-xs whitespace-nowrap flex-shrink-0">
                  <LaptopMinimal size={12} className="md:w-4 md:h-4" /> Accounting
                </span>
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-1 md:py-2 rounded-full text-xs whitespace-nowrap flex-shrink-0">
                  <Palette size={12} className="md:w-4 md:h-4" /> Architecture
                </span>
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-1 md:py-2 rounded-full text-xs whitespace-nowrap flex-shrink-0">
                  <Brush size={12} className="md:w-4 md:h-4" /> Art
                </span>
              </div>
              <div className="flex gap-1 mb-2 overflow-x-auto pb-2">
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-1 md:py-2 rounded-full text-xs whitespace-nowrap flex-shrink-0">
                  <Palette size={12} className="md:w-4 md:h-4" /> Design
                </span>
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-1 md:py-2 rounded-full text-xs whitespace-nowrap flex-shrink-0">
                  <ChartNoAxesCombined size={12} className="md:w-4 md:h-4" /> Business
                </span>
                <span className="px-2 py-1 md:py-2 text-xs whitespace-nowrap text-blue-500 flex-shrink-0">
                  Show 30+
                </span>
              </div>
              <div className="mb-2">
                <span className="text-blue-500 text-xs md:text-sm">220 </span>
                <span className="text-gray-400 text-xs md:text-sm">Universities found</span>
              </div>
              
              {/* University Card */}
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                <div className="h-24 md:h-32 bg-gradient-to-br to-green-300">
                  <Image
                    src={"/University-of-Alabama-EngineeringResearchCenter-01.jpg"}
                    width={300}
                    height={200}
                    alt="University Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="font-bold text-xs md:text-sm">
                    University of Southern California
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1 md:mb-2">
                    <span className="flex">
                      <Star className="text-amber-500 fill-amber-500 w-3 h-3 md:w-4 md:h-4" />
                      <Star className="text-amber-500 fill-amber-500 w-3 h-3 md:w-4 md:h-4" />
                      <Star className="text-amber-500 fill-amber-500 w-3 h-3 md:w-4 md:h-4" />
                      <Star className="text-amber-500 fill-amber-500 w-3 h-3 md:w-4 md:h-4" />
                      <Star className="w-3 h-3 md:w-4 md:h-4" />
                    </span>
                  </div>
                  <div className="flex text-xs md:text-sm text-gray-500">
                    <MapPin size={14} className="md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs ml-1">Los Angeles, California, 90089, United States</span>
                  </div>
                  <NavigationPhone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}