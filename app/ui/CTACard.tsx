
import { ArrowRight } from "lucide-react";

function CTACard() {
  return (
    <div className="bg-gradient-to-br h-80 lg:mt-9 from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: "url('/University-of-Alabama-EngineeringResearchCenter-01.jpg')",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 leading-tight">
          Discover, apply, succeed – UVER app makes college search effortless.
        </h3>
      </div>
      
      <div className="relative z-10 mt-auto">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:gap-4 hover:shadow-lg text-lg font-semibold">
          Get Easy Access
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CTACard;