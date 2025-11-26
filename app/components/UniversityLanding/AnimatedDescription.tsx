'use client';
import { motion } from "framer-motion";

interface AnimatedDescriptionProps {
  description: string;
  id: string;
}

export default function AnimatedDescription({ description, id }: AnimatedDescriptionProps) {
  return (
    <motion.p 
      className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      key={`${id}-desc`}
    >
      {description}
    </motion.p>
  );
}