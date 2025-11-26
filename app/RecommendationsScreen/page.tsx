import {  MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
import Image from "next/image";

const RecommendationsScreen = () => (
  <div className="h-full bg-white flex flex-col">
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex  justify-between items-center gap-2">
        <div className="flex  gap-2">
                  <Search size={16} className="text-blue-500" />
        <span className="text-xs text-gray-600">Los Angeles, CA</span>

        </div>
        <div className="ms-20">
                  <SlidersHorizontal />

        </div>
      </div>
    </div>

    <div className="flex-1 p-5 overflow-hidden">
      <h2 className="text-xl font-bold mb-5 text-gray-900">Recommendations</h2>
      
      <div className="space-y-3">
        {[
          { name: 'University of Southern California', type: 'Private', img: '/University-of-Alabama-EngineeringResearchCenter-01.jpg' },
          { name: 'University of California Los Angeles', type: 'Public', img:'/University-of-Alabama-EngineeringResearchCenter-01.jpg' }
        ].map((uni, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm  overflow-hidden">
            <Image src={uni.img} alt={uni.name} width={100} height={150} className="w-full h-28 object-cover" />
            <div className="p-3">
              <h3 className="font-bold text-xs text-gray-900 mb-1">{uni.name}</h3>
              <div className="flex">
                              <Star className="fill-amber-300"/>
              <Star className="fill-amber-300"/>
              <Star className="fill-amber-300"/>
              <Star className="fill-amber-300"/>
              <Star />

              </div>
              <p className="text-xs text-gray-500 mb-2 flex"><MapPin/> Los Angeles, California, 90089</p>
              
              {idx === 0 && <span className="text-xs text-gray-500 ml-2">Application deadline: Aug 01</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default RecommendationsScreen;