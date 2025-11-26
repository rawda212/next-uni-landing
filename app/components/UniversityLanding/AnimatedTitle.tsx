'use client';
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  id: string;
}

export default function AnimatedTitle({ title, id }: AnimatedTitleProps) {
  const titleLines = title.split('\n');

  return (
    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        key={`${id}-line1`}
      >
        {titleLines[0]}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        key={`${id}-line2`}
      >
        {titleLines[1]}
      </motion.div>
    </div>
  );
}