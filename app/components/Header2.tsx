
'use client';
import { motion } from "framer-motion";
import Image from "next/image";

function Header2() {
  return (
    <header className="mt-5">
      <div className="flex justify-around items-center gap-4 p-6">
       
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-1 h-8 bg-blue-500 rounded-full mr-3"></div>
          <p className="text-blue-500 font-medium">How It Works</p>
        </motion.div>

        <div className="text-center">
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Simple Steps to
            <br />
            <motion.span 
              className="block mt-2 pl-50"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              
            >
              College Success
            </motion.span>
          </motion.h2>
        </div>

        {/* الجزء الأيمن - الصورة */}
        <motion.div 
          className="w-16 h-16 relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Image 
            width={200}
            height={200}
            src={'/download.png'} 
            alt="cap" 
            className="object-contain"
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Header2;