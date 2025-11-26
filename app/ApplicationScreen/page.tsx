import { X } from "lucide-react";
import Link from "next/link";

const ApplicationScreen = () => (
    <Link href={'/SimpleSteps'}>
  <div className="h-full bg-white flex flex-col ">
    <div className="flex items-center justify-between p-4 border-b">
      <h2 className="text-base font-bold text-gray-900">Application Form</h2>
      <button><X size={18} className="text-gray-400" /></button>
    </div>

    <div className="flex-1 p-5 overflow-auto space-y-4">
      {['Personal Information', 'Email', 'Last Name', 'Date of Birth', 'Nationality'].map((label, idx) => (
        <div key={idx}>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">{label}</label>
          {label === 'Nationality' ? (
            <select className="w-full px-3 py-2.5 bg-gray-50 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select</option>
            </select>
          ) : (
            <input 
              type={label === 'Email' ? 'email' : label === 'Date of Birth' ? 'date' : 'text'}
              className="w-full px-3 py-2.5 bg-gray-50 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        </div>
      ))}
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1.5">Years Handled</label>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">No</span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">+6 (281) 555-0119</span>
        </div>
      </div>
    </div>

    <div className="p-5 pt-0">
      <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold">Submit Application</button>
    </div>
  </div>
  </Link>
);
export default ApplicationScreen;