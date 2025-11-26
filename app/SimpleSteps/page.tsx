'use client';
import { useEffect, useState } from "react";
import Header2 from "../components/Header2";
import FeaturesGrid from "../components/FeaturesGrid";
import MissionSection from "../components/MissionSection";
import UVERApp from "../components/UVERAPP"; 

function SimpleSteps() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    'showcase': false, 
    'features-detail': false,
    'mission': false
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header2 />
      <FeaturesGrid isVisible={isVisible} />
      <UVERApp isVisible={isVisible} scrollY={scrollY} /> {/* أضف الـ props هنا */}
      <MissionSection isVisible={isVisible} />
    </>
  );
}

export default SimpleSteps;