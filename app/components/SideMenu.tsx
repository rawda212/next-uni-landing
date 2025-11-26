import { FileText, MessageCircle, Search, TrendingUp } from "lucide-react";
import MenuItem from "./MenuItem";

 function SideMenu(){
    return(
             <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-6 animate-fade-in">
              <MenuItem icon={<Search className="w-5 h-5" />} label="SEARCH" />
              <MenuItem icon={<MessageCircle className="w-5 h-5" />} label="CHAT" />
              <MenuItem icon={<FileText className="w-5 h-5" />} label="APPLY" />
              <MenuItem icon={<TrendingUp className="w-5 h-5" />} label="TRACK" />
            </div>
    )
}
export default SideMenu;