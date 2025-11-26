import { X } from "lucide-react";

const ChatScreen = () => (
  <div className="h-full bg-white flex flex-col">
    <div className="flex items-center gap-2.5 p-4 border-b">
      <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">SC</div>
      <div>
        <h3 className="font-semibold text-sm text-gray-900">Study Counselor</h3>
        <span className="text-xs text-gray-500">● Online</span>
      </div>
    </div>

    <div className="flex-1 p-4 overflow-auto space-y-3">
      {[
        { text: 'Hey there!', user: false },
        { text: 'I can help you shortlist and find colleges based on your interests. Tell me about the information!', user: false },
        { text: 'Hello!', user: true },
        { text: 'May I know which GPA Assistance do you need?', user: false },
        { text: 'I need your assistance please', user: true },
        { text: 'Share through which channel?', user: false }
      ].map((msg, idx) => (
        <div key={idx} className={`flex ${msg.user ? 'justify-end' : 'gap-2'}`}>
          {!msg.user && <div className="w-7 h-7 bg-blue-500 rounded-full flex-shrink-0" />}
          <div className={`rounded-2xl px-3 py-2 max-w-[70%] ${msg.user ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <p className="text-xs leading-relaxed">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="p-4 pt-2 border-t">
      <div className="flex gap-2">
    
        <button className="w-100 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"> start new →</button>
      </div>
    </div>
  </div>
);

export default ChatScreen ;