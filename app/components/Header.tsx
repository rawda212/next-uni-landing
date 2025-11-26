
'use client';
import { ArrowLeft, Equal } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <header className="flex justify-between items-center px-8 pt-1">
      <div>
        {currentPage !== 'home' && (
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft /> Back
          </button>
        )}
        {currentPage === 'home' && <h3 className="text-2xl ms-4">UVER</h3>}
      </div>
       <button >
   <Equal size={30} className="text-gray-600" />
       </button>
      <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all">
        Get Early Access
      </button>
    </header>
  );
};

export default Header;