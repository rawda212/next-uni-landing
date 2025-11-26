
'use client'
import { useEffect, useState } from "react";
import TimeUnit from "./TimeUnit";

export default function HeroContent() {
    const [countdown, setCountdown] = useState({ days: 23, hours: 22, minutes: 43, seconds: 0 });
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="space-y-4 md:space-y-6 animate-slide-in-left text-center lg:text-left w-full max-w-2xl">
            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Find Your Dream
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        University
                    </span>
                </h1>
                
                <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                    Discover, apply, succeed – UVER makes college search 
                    <span className="hidden sm:inline"><br /></span>
                    <span className="sm:hidden"> </span>
                    effortless. Your future starts right here.
                </p>
            </div>

            {/* Countdown Timer */}
            <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base">Launching starts in</span>
                </div>
                
                <div className="flex justify-center lg:justify-start gap-3 md:gap-4">
                    <TimeUnit value={countdown.days} label="days" />
                    <span className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light">:</span>
                    <TimeUnit value={countdown.hours} label="hours" />
                    <span className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light">:</span>
                    <TimeUnit value={countdown.minutes} label="minutes" />
                </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
        </div>
    );
}