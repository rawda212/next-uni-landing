
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
    <div className="flex items-center relative animate-slide-in-right h-[300px]  mt-20">
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
        <div className="relative w-72 h-[580px] bg-black rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-3xl z-10"></div>

            {/* Phone Content */}
            <div className="p-2 pt-5">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex align-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    src={"/images.jpeg"}
                    className="rounded-full"
                    alt=""
                  />
                  <span className="text-sm text-gray-400 mt-2">Hello john</span>
                </div>
                <Bell className="text-gray-400" />
              </div>

              <h2 className="font-bold mb-2">
                Search and apply to the best universities
              </h2>

              {/* Search Bar */}
              <div className="bg-gray-100 rounded-2xl p-1 mb-4 flex gap-2 text-gray-400">
                <Search className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities,locations"
                  className="bg-transparent outline-none text-xs flex-1"
                  readOnly
                />
                <SlidersHorizontal size={20} />
              </div>

              {/* Filter Chips */}
              <div className="flex gap-1 mb-1">
                <span className="bg-blue-600 flex gap-1 text-white px-2 py-2 rounded-full text-xs whitespace-nowrap">
                  <LaptopMinimal size={14} /> Accounting
                </span>
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-2 rounded-full text-xs whitespace-nowrap">
                  <Palette size={14} /> Architecture
                </span>
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-2 rounded-full text-xs whitespace-nowrap">
                  <Brush size={14} /> Art
                </span>
              </div>
              <div className="flex gap-1 mb-2">
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-2 rounded-full text-xs whitespace-nowrap">
                  <Palette size={14} /> Design
                </span>
                <span className="bg-gray-100 flex gap-1 text-gray-600 px-2 py-2 rounded-full text-xs whitespace-nowrap">
                  <ChartNoAxesCombined size={14} /> Business
                </span>
                <span className="px-2 py-2 text-xs whitespace-nowrap text-blue-500">
                  Show 30+
                </span>
              </div>
              <div>
                <span className="text-blue-500 text-sm">220 </span>
                <span className="text-gray-400 text-sm">Universities found</span>
              </div>
              {/* University Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-32 bg-gradient-to-br to-green-300">
                  <Image
                    src={"/University-of-Alabama-EngineeringResearchCenter-01.jpg"}
                    width={300}
                    height={200}
                    alt="University Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="font-bold text-xs">
                    University of Southern California
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <span className="flex">
                      <Star className="text-amber-500 fill-amber-500" size={14} />
                      <Star className="text-amber-500 fill-amber-500" size={14} />
                      <Star className="text-amber-500 fill-amber-500" size={14} />
                      <Star className="text-amber-500 fill-amber-500" size={14} />
                      <Star size={14} />
                    </span>
                  </div>
                  <div className="flex text-ms text-gray-500">
                    <MapPin size={20} />
                    <span className="text-xs">Los Angeles, California, 90089, United States</span>
                  </div>
                  <NavigationPhone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}