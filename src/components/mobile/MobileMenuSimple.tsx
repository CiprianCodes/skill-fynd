import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createPortal } from 'react-dom';

const MobileMenuSimple = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'About', href: '#about' }
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      setTimeout(() => {
        window.location.hash = href.substring(1);
      }, 10);
    } else if (href === '/') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (router.pathname !== '/') {
          router.push('/');
        }
      }, 10);
    }
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted) {
      const html = document.documentElement;
      if (isOpen) {
        html.classList.add('overflow-hidden', 'fixed', 'inset-0');
      } else {
        html.classList.remove('overflow-hidden', 'fixed', 'inset-0');
      }
      
      return () => {
        html.classList.remove('overflow-hidden', 'fixed', 'inset-0');
      };
    }
  }, [isOpen, mounted]);

  const menuContent = (
    <>
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
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'top-[10px] rotate-45' : 'top-0'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0 translate-x-full' : 'opacity-100 top-[10px]'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'top-[10px] -rotate-45' : 'top-[20px]'
              }`}
            ></span>
          </div>
        </div>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`fixed inset-x-0 top-0 h-[100vh] bg-gradient-to-b from-card/95 to-card/90 backdrop-blur-xl shadow-xl z-[95] md:hidden transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-[-100%]'
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
        
        <div className="absolute top-20 right-4 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-4 w-40 h-40 bg-purple-800/10 rounded-full blur-3xl"></div>
        
        <div className="pt-[60px] container mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col h-full">
          <nav className="mb-auto relative">
            <h2 className="text-xs uppercase tracking-widest text-purple-300/60 font-semibold mb-4 ml-1">Navigation</h2>
            <ul className="space-y-4 sm:space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="transform transition-all duration-750" style={{ 
                  transitionDelay: `${index * 150}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}>
                  <button
                    className="relative text-white text-base sm:text-xl font-bold tracking-wide hover:text-purple-400 transition-all duration-750 py-2 w-full text-left group flex items-center overflow-hidden"
                    onClick={() => handleNavigation(item.href)}
                  >
                    <span className="pr-2 opacity-40 text-purple-300 text-sm font-mono">0{index + 1}</span>
                    <span className="relative z-10">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-750"></span>
                    </span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-750 transform group-hover:translate-x-1">&rarr;</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-4 sm:pt-6 border-t border-white/10">
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-lg py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wide transition-all duration-750 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group"
              onClick={() => handleNavigation('#contact')}
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-950 opacity-0 group-hover:opacity-100 transition-opacity duration-750"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return mounted ? createPortal(menuContent, document.body) : null;
};

export default MobileMenuSimple;
