import { File, LayoutGrid, MessageCircleMore, Search, User } from "lucide-react";

function NavigationPhone() {
  return (
    <div className="flex justify-around text-gray-400 border-t border-gray-300 pt-3">
      <div className="flex flex-col justify-center items-center text-blue-500">
        {" "}
        <Search size={14} />
        <span className="text-xs">Search</span>{" "}
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        {" "}
        <LayoutGrid size={14} className="fill-gray-400" />
        <span className="text-xs">Explore</span>{" "}
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        {" "}
        <File size={14} />
        <span className="text-xs">Application</span>{" "}
      </div>

      <div className="flex flex-col justify-center items-center text-gray-400">
        <MessageCircleMore size={14} />
        <span className="text-xs">Inbox</span>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-400">
        <User size={14} />
        <span className="text-xs">Profile</span>
      </div>
    </div>
  );
}
export default NavigationPhone;
