
// import { ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import TypewriterText from "../ui/TypewriterText";

// interface MissionSectionProps {
//   isVisible: Record<string, boolean>;
// }

// function MissionSection({ isVisible }: MissionSectionProps) {
//   const missionVisible = isVisible['mission'] || false;
//   const [showElements, setShowElements] = useState([false, false, false, false]);

//   useEffect(() => {
//     if (missionVisible) {
//       const timers = [
//         setTimeout(() => setShowElements(prev => [true, ...prev.slice(1)]), 500),
//         setTimeout(() => setShowElements(prev => [prev[0], true, ...prev.slice(2)]), 2000),
//         setTimeout(() => setShowElements(prev => [prev[0], prev[1], true, ...prev.slice(3)]), 4000),
//         setTimeout(() => setShowElements(prev => [...prev.slice(0, 3), true]), 6000),
//       ];

//       return () => timers.forEach(timer => clearTimeout(timer));
//     }
//   }, [missionVisible]);

//   return (
//     <section 
//       id="mission"
//       className={`animate-on-scroll   px-0    w-full mx-auto transition-all duration-1000 ${
//         missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//       }`}
//     >
//       <div className="relative shadow-2xl">
//         <video autoPlay loop muted playsInline className="w-full h-100 md:h-[500px]  object-cover">
//           <source src="/WhatsApp Video 2025-11-26 at 13.06.58_4b0da919.mp4" />
//         </video>
//         <div className="absolute inset-0  bg-gradient-to-r from-blue-700/80 to-blue-600/60 flex items-center">
//         <div>
//             <span className="inline-block text-blue-300 backdrop-blur-sm px-10 py-2  text-sm mb-6">
//               About
//             </span>
//         </div>
//           <div className="  text-center p-8">
          
            
//             <div className="min-h-[140px] md:min-h-[120px] flex items-end justify-end ps-50 mb-6">
//               {showElements[0] && (
//                 <TypewriterText
//                   text="At UVER, we are on a mission to simplify the college search and application process"
//                   speed={40}
//                   className="text-3xl md:text-5xl font-bold leading-tight"
//                 />
//               )}
//             </div>

//             <div className="min-h-[30px] mb-4 ps-50">
//               {showElements[1] && (
//                 <TypewriterText
//                   text="We value personalized support, equal opportunities, and transparency."
//                   speed={30}
//                   className="text-blue-100 text-lg"
//                 />
//               )}
//             </div>

//             <div className="min-h-[100px] mb-8 ps-50">
//               {showElements[2] && (
//                 <TypewriterText
//                   text="Our mission is to revolutionize college search and application process, providing personalized support to help students find their dream schools. We believe in transparency in the entire educational journey."
//                   speed={20}
//                   className="text-blue-200 max-w-2xl mx-auto leading-relaxed"
//                 />
//               )}
//             </div>

//             <div className="min-h-[50px]">
//               {showElements[3] && (
//                 <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition-all duration-300 hover:gap-4 hover:shadow-lg animate-fade-in">
//                   To Connect
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MissionSection;

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
    // Always show elements after delays
    const timers = [
      setTimeout(() => setShowElements(prev => [true, ...prev.slice(1)]), 500),
      setTimeout(() => setShowElements(prev => [prev[0], true, ...prev.slice(2)]), 2000),
      setTimeout(() => setShowElements(prev => [prev[0], prev[1], true, ...prev.slice(3)]), 4000),
      setTimeout(() => setShowElements(prev => [...prev.slice(0, 3), true]), 6000),
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section 
      id="mission"
      className="w-full transition-all duration-1000 opacity-100 translate-y-0"
    >
      <div className="relative shadow-2xl min-h-[600px] md:min-h-[500px]">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/WhatsApp Video 2025-11-26 at 13.06.58_4b0da919.mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/85 to-blue-600/65" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:py-20">
          {/* About Badge */}
          <div className="w-full max-w-4xl mb-6 md:mb-8">
            <span className="inline-block text-blue-200 bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              About
            </span>
          </div>
          
          {/* Main Content Container */}
          <div className="w-full max-w-4xl text-center space-y-4 md:space-y-6">
            {/* Main Heading */}
            <div className="min-h-[120px] sm:min-h-[100px] md:min-h-[80px] flex items-center justify-center">
              {showElements[0] && (
                <TypewriterText
                  text="At UVER, we are on a mission to simplify the college search and application process"
                  speed={40}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2"
                />
              )}
            </div>
            
            {/* Subheading */}
            <div className="min-h-[40px] sm:min-h-[35px] md:min-h-[30px]">
              {showElements[1] && (
                <TypewriterText
                  text="We value personalized support, equal opportunities, and transparency."
                  speed={30}
                  className="text-blue-100 text-base sm:text-lg md:text-xl px-2"
                />
              )}
            </div>
            
            {/* Description */}
            <div className="min-h-[140px] sm:min-h-[120px] md:min-h-[100px]">
              {showElements[2] && (
                <TypewriterText
                  text="Our mission is to revolutionize college search and application process, providing personalized support to help students find their dream schools. We believe in transparency in the entire educational journey."
                  speed={20}
                  className="text-blue-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2"
                />
              )}
            </div>
            
            {/* CTA Button */}
            <div className="min-h-[60px] flex items-center justify-center pt-4">
              {showElements[3] && (
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:gap-4 hover:shadow-lg text-sm sm:text-base font-semibold">
                  To Connect
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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