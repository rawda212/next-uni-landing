'use client';
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedPhoneProps {
  screen: React.ReactNode;
  border: string;
  isAnimating: boolean;
}

export default function AnimatedPhone({ screen, border, isAnimating }: AnimatedPhoneProps) {
  return (
    <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="relative w-72">
        {/* Border Frame */}
        <div className={`absolute inset-0 rounded-[3rem] ${border} border-[3px] -z-10 transform scale-105`}></div>
        
        {/* Phone */}
        <div className="relative bg-black rounded-[2.8rem] p-2 shadow-2xl" style={{ transform: 'perspective(1000px) rotateY(-8deg)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10"></div>
          <div className="relative bg-white rounded-[2.4rem] overflow-hidden" style={{ height: '577px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={Math.random()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full"
              >
                {screen}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}