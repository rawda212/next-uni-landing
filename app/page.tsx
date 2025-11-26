

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
    <div className="h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-auto  relative">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <Header />

      {/* Main Content */}
      <main className="container mx-7 px-4 md:px-10 py-4 md:py-17">
        <div className="flex  items-center gap-10  h-auto ">
          {/* Left Side - Text Content */}
          <HeroContent  />

          {/* Right Side - Phone Mockup */}
          {/* <div className="  relative"> */}
            <PhoneMockup  onClick={handlePhoneClick} />
            {/* </div> */}
          <SideMenu />
        </div>
      </main>
    </div>
  );
}