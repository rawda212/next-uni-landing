
import { ReactNode } from "react";

interface FeatureCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

function FeatureCard({ id, icon, title, description, isVisible, delay }: FeatureCardProps) {
  return (
    <div
      id={id}
      className={`animate-on-scroll bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white transition-all duration-700 hover:scale-105 hover:shadow-xl relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      
      <div className="absolute top-0 left-20 right-0 h-5 bg-white rounded-b-[0px]"></div> 
      
      <div className="mb-4 transform transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 leading-tight">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;