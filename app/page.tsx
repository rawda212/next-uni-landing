'use client';

import { useRouter } from 'next/navigation';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import PhoneMockup from './components/PhoneMockup';
import SideMenu from './components/SideMenu';

export default function Home() {
  const router = useRouter();

  const handlePhoneClick = () => {
    router.push('/UniversityLanding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-auto relative">
      <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <Header />

      <main className="container mx-auto px-4 md:px-10 py-4 md:py-17">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <HeroContent />
          </div>

          <div className="w-full lg:w-1/3 flex justify-center sm:mt-5 lg:justify-end relative">
            <PhoneMockup onClick={handlePhoneClick} />
          </div>

          <div className="hidden lg:block">
            <SideMenu />
          </div>
        </div>
      </main>
    </div>
  );
}