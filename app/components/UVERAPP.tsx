
'use client';
import React, { useEffect, useState } from 'react';
import { Heart, MapPin, Star } from 'lucide-react';
import Image from 'next/image';

interface SimpleTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

function SimpleTypewriter({ text, speed = 50, delay = 0, className = "" }: SimpleTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!start) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, start]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

const HalfPhoneFrame = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative bg-black rounded-t-[30px] rounded-b-0 p-2.5 shadow-2xl ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />
    <div className="bg-white rounded-t-[32px] rounded-b-0 overflow-hidden h-full">
      {children}
    </div>
  </div>
);

const FullPhoneFrame = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative bg-black rounded-[50px] p-3 shadow-2xl ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
    <div className="bg-white rounded-[40px] overflow-hidden h-full">
      {children}
    </div>
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'yellow';
  size?: string;
  className?: string;
  [key: string]: any;
}

const Button = ({ children, variant = 'blue', size = 'sm', className = '', ...props }: ButtonProps) => {
  const variants = {
    blue: 'bg-blue-500 text-white',
    yellow: 'bg-yellow-400 text-gray-900',
  };
  
  return (
    <button 
      className={`rounded-full font-medium px-4 py-1.5 text-xs ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ApplicationsPhone = () => (
  <HalfPhoneFrame className="w-full h-full">
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">Applications</h1>
      <p className="text-gray-500 text-sm mb-5">Track your progress</p>
      
      <div className="space-y-3">
        <div className="flex flex-col gap-2.5">
          <Image width={100} height={100} 
            src="/University-of-Alabama-EngineeringResearchCenter-01.jpg" 
            className="rounded-lg object-cover "
            alt="UC"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs leading-tight">University of Northern California</h3>
            <p className="text-[10px] text-gray-500">California</p>
          </div>
          <Button variant="blue" className='w-30'>Call Us</Button>
        </div>

        <div className="flex flex-col gap-2.5">
          <Image width={100} height={100} 
            src="/University-of-Alabama-EngineeringResearchCenter-01.jpg"
            className=" rounded-lg object-cover flex-shrink-0"
            alt="USC"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs leading-tight">University of Northern Carolina</h3>
            <p className="text-[10px] text-gray-500">California</p>
          </div>
          <Button variant="yellow" className='w-30'>Oct 15</Button>
        </div>

        <div className="flex flex-col gap-2.5">
          <Image width={100} height={100} 
            src={'/University-of-Alabama-EngineeringResearchCenter-01.jpg'}
            className=" rounded-lg object-cover flex-shrink-0"
            alt="UCLA"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs leading-tight">University of California Los Angeles</h3>
            <p className="text-[10px] text-gray-500">California</p>
          </div>
          <Button variant="yellow" className='w-30'>Aug 20</Button>
        </div>
      </div>
    </div>
  </HalfPhoneFrame>
);

const CollegeDetailPhone = () => (
  <HalfPhoneFrame className="w-full h-full">
    <div className="h-full bg-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b" />
      <div className="flex-1 p-5 overflow-hidden">
        <h2 className="text-xl font-bold mb-5 text-gray-900">Recommendations</h2>
        
        <div className="space-y-3">
          {[
            { name: 'University of Southern California', type: 'Private', img: '/University-of-Alabama-EngineeringResearchCenter-01.jpg' },
            { name: 'University of California Los Angeles', type: 'Public', img:'/University-of-Alabama-EngineeringResearchCenter-01.jpg' }
          ].map((uni, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Image src={uni.img} alt={uni.name} width={400} height={150} className="w-full h-28 object-cover" />
              <div className="p-3">
                <h3 className="font-bold text-xs text-gray-900 mb-1">{uni.name}</h3>
                <div className="flex">
                  <Star className="fill-amber-300 text-amber-300" size={14} />
                  <Star className="fill-amber-300 text-amber-300" size={14} />
                  <Star className="fill-amber-300 text-amber-300" size={14} />
                  <Star className="fill-amber-300 text-amber-300" size={14} />
                  <Star size={14} />
                </div>
                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1"><MapPin size={14} /> Los Angeles, California, 90089</p>
                {idx === 0 && <span className="text-xs text-gray-500">Application deadline: Aug 01</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </HalfPhoneFrame>
);

const CollegeCardPhone = () => (
  <HalfPhoneFrame className="w-full h-full">
    <div className="h-full flex flex-col justify-center">
      <div className="relative">
        <Image width={500} height={400} 
          src="/University-of-Alabama-EngineeringResearchCenter-01.jpg"
          className="w-full object-cover"
          alt="College"
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Heart size={16} className="text-gray-400" />
        </button>
      </div>
      
      <div className="mt-3 px-5">
        <h2 className="font-bold text-base mb-2 leading-tight">University of Southern California</h2>
        <div className="flex mt-2">
          <Star className="fill-amber-300 text-amber-300" size={16} />
          <Star className="fill-amber-300 text-amber-300" size={16} />
          <Star className="fill-amber-300 text-amber-300" size={16} />
          <Star className="fill-amber-300 text-amber-300" size={16} />
          <Star size={16} />
        </div>
        <p className="text-xs mt-2 text-gray-500 mb-2 flex items-center gap-1"><MapPin size={14} /> Los Angeles, California, 90089</p>
        <span className="text-xs text-gray-500">Application deadline: Aug 01</span>
        <p className="text-xs text-gray-600 leading-tight mt-2">
          This from 845,000 students who attend this university.
        </p>
      </div>
    </div>
  </HalfPhoneFrame>
);

const ChatPhone = () => (
  <HalfPhoneFrame className="w-full h-full">
    <div className="h-full bg-white flex flex-col">
      <div className="flex items-center gap-2.5 p-4 border-b">
        <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">SC</div>
        <div>
          <h3 className="font-semibold text-sm text-gray-900">Study Counselor</h3>
          <span className="text-xs text-gray-500">● Online</span>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto space-y-3">
        {[
          { text: 'Hey there!', user: false },
          { text: 'I can help you shortlist and find colleges based on your interests. Tell me about the information!', user: false },
          { text: 'Hello!', user: true },
          { text: 'May I know which GPA Assistance do you need?', user: false },
          { text: 'I need your assistance please', user: true },
          { text: 'Share through which channel?', user: false }
        ].map((msg, idx) => (
          <div key={idx} className={`flex ${msg.user ? 'justify-end' : 'gap-2'}`}>
            {!msg.user && <div className="w-7 h-7 bg-blue-500 rounded-full flex-shrink-0" />}
            <div className={`rounded-2xl px-3 py-2 max-w-[70%] ${msg.user ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
              <p className="text-xs leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </HalfPhoneFrame>
);

const HeroPhone = () => (
  <FullPhoneFrame className="w-full lg:h-[1000px] sm:h-[500px] xs:h-[300px] h-[400px]">
    <div className="relative h-full">
      <Image width={400} height={900} 
        src="/download (1).jpeg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Graduate"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/10" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <h1 className="text-3xl font-bold leading-tight mb-6">
          Get ready to<br />
          experience<br />
          the future of<br />
          college<br />
          applications<br />
          with UVER
        </h1>
        <button className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
          <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  </FullPhoneFrame>
);

const UVERApp = ({ isVisible = {}, scrollY = 0 }: { isVisible?: Record<string, boolean>; scrollY?: number }) => {
  const showcaseVisible = isVisible['showcase'] || false;
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (showcaseVisible) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showcaseVisible]);

  return (
    <>
      <section 
        id="showcase"
        className={`animate-on-scroll py-12 md:py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto transition-all duration-1000 ${
          showcaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="bg-white rounded-3xl p-6 md:p-12">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 leading-tight min-h-[100px] md:min-h-[60px]">
              {startTyping && (
                <SimpleTypewriter
                  text="Simplify your college application journey with UVER"
                  speed={50}
                  className="text-2xl md:text-4xl font-bold"
                />
              )}
            </h2>
            
            <div className="min-h-[80px] md:min-h-[60px]">
              {startTyping && (
                <SimpleTypewriter
                  text="Discover, apply, and succeed in just a few easy steps. Unlock endless possibilities for your future."
                  speed={50}
                  delay={2500}
                  className="text-lg md:text-2xl text-gray-600"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="h-[500px]">
                <ApplicationsPhone />
              </div>
              <div className="h-[500px]">
                <CollegeDetailPhone />
              </div>
              <div className="h-[500px]">
                <CollegeCardPhone />
              </div>
              <div className="h-[500px]">
                <ChatPhone />
              </div>
            </div>

            <div className="h-[500px] lg:h-[672px]">
              <HeroPhone />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UVERApp;