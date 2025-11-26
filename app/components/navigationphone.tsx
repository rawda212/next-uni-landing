import { File, LayoutGrid, MessageCircleMore, Search, User } from "lucide-react";

function NavigationPhone() {
  return (
    <div className="flex justify-around text-gray-400 border-t border-gray-300 pt-2 md:pt-3">
      <div className="flex flex-col justify-center items-center text-blue-500">
        <Search size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs">Search</span>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        <LayoutGrid size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs">Explore</span>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        <File size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs">Application</span>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        <MessageCircleMore size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs">Inbox</span>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        <User size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs">Profile</span>
      </div>
    </div>
  );
}
export default NavigationPhone;