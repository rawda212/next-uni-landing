import { FileText, GraduationCap, Search } from "lucide-react";
import Image from "next/image";
import NavigationPhone from "../components/navigationphone";

const TrackerScreen = () => (
  <div className="h-full bg-white flex flex-col">
    <div className="p-5 pb-3">
      <h2 className="text-xl font-bold text-gray-900">Applications</h2>
    </div>

    <div className="flex-1 px-5 overflow-hidden">
      <div className="space-y-2.5">
        {[
          { name: 'University of Southern California', status: 'Applied', bgcolor: 'blue' ,img:"/University-of-Alabama-EngineeringResearchCenter-01.jpg"},
          { name: 'University of Northern Carolina', status: 'In Progress', bgcolor: 'yellow' ,img:"/University-of-Alabama-EngineeringResearchCenter-01.jpg"},
          { name: 'University of California Los Angeles', status: 'Submitted', bgcolor: 'green' ,img:"/University-of-Alabama-EngineeringResearchCenter-01.jpg"},
          { name: 'Princeton University', status: 'Pending', bgcolor: 'orange' ,img:"/University-of-Alabama-EngineeringResearchCenter-01.jpg"}
        ].map((app, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-3">
            <div className="flex gap-3">
              {/* <div className="w-12 h-12 bg-gray-500 rounded-lg flex-shrink-0" /> */}
              <Image src={app.img} width={100} height={100} alt="unversity"  />
              <div className="flex-1">
                <h3 className="font-semibold text-xs text-gray-900 mb-1.5">{app.name}</h3>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  app.bgcolor === 'blue' ? 'bg-blue-500 text-blue-700' :
                  app.bgcolor === 'yellow' ? 'bg-yellow-500 text-yellow-700' :
                  app.bgcolor === 'green' ? 'bg-green-500 text-green-700' :
                  'bg-orange-300 text-orange-700'
                }`}>
                  {app.status}
                </span>
                <p className="text-xs text-gray-500 mt-1.5">Aug {15 + idx}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>

    <div className="border-t p-3">
      <NavigationPhone />
      
    </div>
  </div>
);
export default TrackerScreen;