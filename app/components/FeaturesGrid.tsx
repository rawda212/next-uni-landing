
import { ArrowRight, MessageCircleMore, Search, FileText, BarChart3 } from "lucide-react";
import Image from "next/image";
import FeatureCard from "../ui/FeatureCard";
import CTACard from "../ui/CTACard";

interface FeaturesGridProps {
  isVisible: Record<string, boolean>;
}

function FeaturesGrid({ isVisible }: FeaturesGridProps) {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-white" />,
      title: "Search for Your Ideal College",
      description: "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more."
    },
     {
      icon: <MessageCircleMore className="w-10 h-10 text-white" />,
      title: "Chat with Admissions Experts",
      description: "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications."
    },
      {
      icon: <Image width={40} height={40} src={'/images-removebg-preview.png'} alt="track deadlines" className="text-white"/>,
      title: "Track Deadlines and Requirements",
      description: "Receive notifications for upcoming deadlines, document requirements, and submission dates. Keep track of the progress of your applications."
    },
    {
      icon: <Image width={40} height={40} src={'/paper-and-pen-removebg-preview.png'} alt="paper and pen"/>,
      title: "Apply with Confidence",
      description: "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically."
    },
   
    {
      icon: <Image width={40} height={40} src={'/download-removebg-preview.png'} alt="build" className="text-white"/>,
      title: "Plan Your College Future",
      description: "Once you receive acceptance letters, utilize UVER's tools to compare offers, evaluate financial aid packages, and make informed decisions."
    },
  
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            id={`feature-${index}`}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isVisible={isVisible[`feature-${index}`] || false}
            delay={index * 100}
          />
        ))}
        
        <CTACard />
      </div>
    </section>
  );
}

export default FeaturesGrid;