import React, { FC } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' }
];

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose, onToggle }) => {
  const bodyClass = isOpen ? 'overflow-hidden' : '';

  const handleNavItemClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    
    onClose();
    
    if (href.startsWith('#')) {
      setTimeout(() => {
        window.location.hash = href.substring(1);
      }, 300);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    onClose();
    
    setTimeout(() => {
      window.location.hash = 'contact';
    }, 300);
  };
  
  return (
    <div className={bodyClass}>
      <div className="md:hidden fixed top-4 right-4 w-12 h-12">
        <div
          role="button"
          tabIndex={0}
          className="relative z-[100] w-12 h-12 flex items-center justify-center cursor-pointer bg-card/80 backdrop-blur-sm rounded-full shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle();
            return false;
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onToggle();
            }
          }}
          aria-label="Toggle menu"
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <div 
              className={`absolute h-0.5 w-6 transform bg-white transition duration-300 ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}
            ></div>
            <div 
              className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <div 
              className={`absolute h-0.5 w-6 transform bg-white transition duration-300 ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
              }`}
            ></div>
          </div>
        </div>
      </div>
      
      <div 
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
        style={{
          backdropFilter: isOpen ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: isOpen ? 'blur(8px)' : 'none',
        }}
      />

      <div 
        className={`fixed inset-x-0 top-[calc(var(--header-height,64px))] h-[calc(100vh-var(--header-height,64px))] bg-card/90 backdrop-blur-md shadow-lg z-50 transform transition-all duration-500 md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
        
        <div className="container mx-auto px-6 py-8 flex flex-col h-full">
          <nav className="flex-1">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  className="transform transition-all"
                  style={{ 
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.3s ease ${0.1 + index * 0.07}s` 
                  }}
                >
                  <button 
                    className="text-white hover:text-purple-300 transition-colors py-2 flex items-center group w-full text-left"
                    onClick={(e) => handleNavItemClick(item.href, e)}
                  >
                    <span className="w-0 h-0.5 group-hover:w-5 bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 self-center"></span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-lg font-medium">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div 
            className="mt-8 pt-8 border-t border-purple-500/20"
            style={{ 
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s ease ${0.1 + 4 * 0.07}s` 
            }}
          >
            <button
              className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 rounded-md py-4 text-lg"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
            
            <div className="mt-6 flex justify-center">
              <div className="w-12 h-1 bg-purple-500/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
