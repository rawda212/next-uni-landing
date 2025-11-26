
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import TypewriterText from "../ui/TypewriterText";

interface MissionSectionProps {
  isVisible: Record<string, boolean>;
}

function MissionSection({ isVisible }: MissionSectionProps) {
  const missionVisible = isVisible['mission'] || false;
  const [showElements, setShowElements] = useState([false, false, false, false]);

  useEffect(() => {
    if (missionVisible) {
      const timers = [
        setTimeout(() => setShowElements(prev => [true, ...prev.slice(1)]), 500),
        setTimeout(() => setShowElements(prev => [prev[0], true, ...prev.slice(2)]), 2000),
        setTimeout(() => setShowElements(prev => [prev[0], prev[1], true, ...prev.slice(3)]), 4000),
        setTimeout(() => setShowElements(prev => [...prev.slice(0, 3), true]), 6000),
      ];

      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [missionVisible]);

  return (
    <section 
      id="mission"
      className={`animate-on-scroll   px-0    w-full mx-auto transition-all duration-1000 ${
        missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="relative shadow-2xl">
        <video autoPlay loop muted playsInline className="w-full h-100 md:h-[500px]  object-cover">
          <source src="/WhatsApp Video 2025-11-26 at 13.06.58_4b0da919.mp4" />
        </video>
        <div className="absolute inset-0  bg-gradient-to-r from-blue-900/80 to-blue-800/60 flex items-center">
          <div className=" mx-auto text-center text-white p-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              About Us
            </span>
            
            {/* العنوان */}
            <div className="min-h-[140px] md:min-h-[120px] flex items-end justify-end ps-100 mb-6">
              {showElements[0] && (
                <TypewriterText
                  text="At UVER, we are on a mission to simplify the college search and application process"
                  speed={40}
                  className="text-3xl md:text-5xl font-bold leading-tight"
                />
              )}
            </div>

            {/* النص الفرعي */}
            <div className="min-h-[30px] mb-4 ps-100">
              {showElements[1] && (
                <TypewriterText
                  text="We value personalized support, equal opportunities, and transparency."
                  speed={30}
                  className="text-blue-100 text-lg"
                />
              )}
            </div>

            {/* الوصف */}
            <div className="min-h-[100px] mb-8 ps-100">
              {showElements[2] && (
                <TypewriterText
                  text="Our mission is to revolutionize college search and application process, providing personalized support to help students find their dream schools. We believe in transparency in the entire educational journey."
                  speed={20}
                  className="text-blue-200 max-w-2xl mx-auto leading-relaxed"
                />
              )}
            </div>

            {/* الزر */}
            <div className="min-h-[50px]">
              {showElements[3] && (
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition-all duration-300 hover:gap-4 hover:shadow-lg animate-fade-in">
                  To Connect
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;