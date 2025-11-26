
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrackerScreen from "../TrackerScreen/page";
import ChatScreen from "../ChatScreen/page";
import CollegeSearch from "../CollegeSearch/page";
import RecommendationsScreen from "../RecommendationsScreen/page";
import ApplicationScreen from "../ApplicationScreen/page";
import Sidebar from "../components/UniversityLanding/Sidebar";
import AnimatedTitle from "../components/UniversityLanding/AnimatedTitle";
import AnimatedDescription from "../components/UniversityLanding/AnimatedDescription";
import AnimatedPhone from "../components/UniversityLanding/AnimatedPhone";
import BackgroundEffects from "../components/UniversityLanding/BackgroundEffects";

export default function UniversityLanding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    { 
      id: 'college-search', 
      label: 'College Search', 
      title: 'Comprehensive\nCollege Search', 
      desc: 'Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including location, majors, campus facilities, and more. Find the perfect fit for your educational journey.', 
      screen: <CollegeSearch />, 
      border: 'border-gray-700' 
    },
    { 
      id: 'recommendations', 
      label: 'Recommendations', 
      title: 'Personalized\nAdvising', 
      desc: 'Stay organized with an intuitive application tracker. Monitor the progress of your applications, track deadlines, and receive reminders to ensure you never miss an important milestone on your path to higher education.', 
      screen: <RecommendationsScreen />, 
      border: 'border-blue-500' 
    },
    { 
      id: 'tracker', 
      label: 'Tracker', 
      title: 'Application\nTracker', 
      desc: 'Receive tailored recommendations based on your interests, academic achievements, and career aspirations. Discover colleges and programs that align with you!', 
      screen: <TrackerScreen />, 
      border: 'border-blue-500' 
    },
    { 
      id: 'chat', 
      label: 'Chat', 
      title: 'Engaging\nExperts Chat', 
      desc: 'Feel free to inquire, seek counsel, and acquire valuable perspective to assist you in making well-informed choices regarding your college applications. Receive tailored guidance and wisdom!', 
      screen: <ChatScreen />, 
      border: 'border-blue-500' 
    },
    { 
      id: 'application', 
      label: 'Application', 
      title: 'Seamless\nApplication', 
      desc: 'Submit applications directly through the app. Save time by completing submitting forms electronically. Enjoy a hassle-free application process', 
      screen: <ApplicationScreen />, 
      border: 'border-gray-700' 
    }
  ];

  const handleNavigate = (index: number) => {
    if (index === activeIndex) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsMenuOpen(false);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const current = sections[activeIndex];

  return (
    <div className="h-screen bg-gradient-to-br from-[#2d3238] via-[#25282d] to-[#1c1e22] relative overflow-hidden">
      <Sidebar
        sections={sections}
        activeIndex={activeIndex}
        onNavigate={handleNavigate}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Main Content */}
      <main className="lg:ml-48 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Text Content */}
            <div className={`flex-1 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedTitle title={current.title} id={current.id} />
                  <AnimatedDescription description={current.desc} id={current.id} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Phone */}
            <AnimatedPhone 
              screen={current.screen}
              border={current.border}
              isAnimating={isAnimating}
            />
          </div>
        </div>
      </main>

      <BackgroundEffects />
    </div>
  );
}