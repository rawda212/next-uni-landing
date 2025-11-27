'use client';
interface SidebarProps {
  sections: Array<{ id: string; label: string }>;
  activeIndex: number;
  onNavigate: (index: number) => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Sidebar({ 
  sections, 
  activeIndex, 
  onNavigate, 
  isMenuOpen, 
  onMenuToggle 
}: SidebarProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={onMenuToggle}
        className="lg:hidden absolute top-6 left-6 z-50 p-2.5 bg-gray-800/80 backdrop-blur rounded-lg"
      >
        {isMenuOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside className={`
        absolute left-0 top-0 h-full w-48 flex flex-col justify-between py-10 px-6 z-40
        transition-transform duration-500 bg-gradient-to-b from-[#2d3238] to-[#1c1e22]
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <nav>
          <ul className="space-y-5">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <button
                  onClick={() => onNavigate(idx)}
                  className={`text-sm transition-all duration-300 hover:cursor-pointer w-full text-left py-2 px-3 rounded-lg ${
                    activeIndex === idx 
                      ? 'text-white bg-blue-500/20 border-l-2 border-blue-500' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button className="w-8 h-8 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors">
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        </button>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute inset-0 bg-black/50 z-30" onClick={onMenuToggle} />
      )}
    </>
  );
}