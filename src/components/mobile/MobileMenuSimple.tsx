import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Mobile Menu with blur and animated hamburger icon
 */
const MobileMenuSimple = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Menu items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#about' }
  ];

  // Safely handle navigation
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    
    // For hash links, handle scrolling manually
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <>
      {/* Hamburger Button with animated lines transforming to X */}
      <div className="md:hidden fixed top-3 right-4 z-[200]">
        <div
          role="button"
          tabIndex={0}
          className="w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(!isOpen);
            }
          }}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-5">
            {/* First line - transforms to half of X */}
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'top-[10px] rotate-45' : 'top-0'
              }`}
            ></span>
            {/* Middle line - fades out */}
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0 translate-x-full' : 'opacity-100 top-[10px]'
              }`}
            ></span>
            {/* Last line - transforms to other half of X */}
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'top-[10px] -rotate-45' : 'top-[20px]'
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Menu Panel with blur */}
      <div 
        className={`fixed inset-x-0 top-0 h-[100vh] bg-card/90 backdrop-blur-xl shadow-xl z-[95] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-[-110%]'
        }`}
      >
        {/* Decorative top highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
        
        {/* Menu Content - adjusted to leave space for the header */}
        <div className="pt-[60px] container mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col h-full">
          <nav className="mb-auto">
            <ul className="space-y-4 sm:space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="transform transition-all duration-200" style={{ 
                  transitionDelay: `${index * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}>
                  <button
                    className="text-white text-base sm:text-xl font-medium hover:text-purple-400 transition-colors py-2 w-full text-left"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-4 sm:pt-6 border-t border-white/10">
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors"
              onClick={() => handleNavigation('#contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuSimple;
