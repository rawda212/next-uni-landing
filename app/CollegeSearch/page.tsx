'use client';
import { Search, X } from "lucide-react";
import Image from "next/image";


function CollegeSearch(){

  return(
   
     <div className="h-full bg-white flex flex-col">
    <div className="flex items-center justify-between p-4 border-b">
      <button><X size={20} className="text-gray-400" /></button>
      <div className="flex gap-2 pt-2">
        <button className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-xs font-medium">Location</button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">University</button>
      </div>
    </div>

    <div className="flex-1 p-5 overflow-auto">
      <h2 className="text-lg font-bold mb-1 text-gray-900">Where do you want to</h2>
      <h2 className="text-lg font-bold mb-5 text-gray-900">study?</h2>
      
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input 
          type="text" 
          placeholder="Search Location" 
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {['Any State', 'USA','EU','Canda'].map((label, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center h-28">
            <div className="w-14 h-14 mb-2 flex items-center justify-center">
           <Image src={'/world-map-theme-vector-graphic-art-design-illustration_1056-4019.avif'}
           alt="world map"
           width={60}
           height={60}

           />
            </div>
            <span className="text-xs font-medium text-gray-700">{label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="p-5 pt-0">
      <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold">Search</button>
    </div>
  </div>
  );
};



export default CollegeSearch;