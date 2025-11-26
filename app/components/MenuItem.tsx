 
 
 
type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
};

const MenuItem = ({ icon, label }: MenuItemProps) => (
  <div className="flex items-center gap-3 cursor-pointer group">
    <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
      {label}
    </span>
  </div>
);
export default MenuItem