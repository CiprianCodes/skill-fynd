import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { MenuIcon } from '@/assets/svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      document.documentElement.style.setProperty(
        '--header-height', 
        isScrolled ? '64px' : '80px'
      );
    };

    window.addEventListener('scroll', handleScroll);
    document.documentElement.style.setProperty('--header-height', '80px');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card backdrop-blur-md bg-opacity-90 shadow-lg shadow-purple-900/10 py-2' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo textColor="text-white" />

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white/80 hover:text-white transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="text-white/80 hover:text-white transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#expertise" className="text-white/80 hover:text-white transition-colors relative group">
            Expertise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-white/80 hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Button 
            href="#contact" 
            variant="primary"
            className="relative hover:bg-purple-700 transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          >
            Contact Us
          </Button>
        </nav>

        <button 
          className="md:hidden flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-600/20 transition-colors"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <MenuIcon 
            className="w-6 h-6 transition-transform duration-300"
            isOpen={isMenuOpen}
            style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          />
        </button>
      </div>

      <div className={`md:hidden fixed inset-x-0 top-[calc(var(--header-height,64px))] bg-card border-t border-purple-500/10 shadow-lg shadow-purple-900/10 backdrop-blur-md bg-opacity-95 transform transition-all duration-300 ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
          <Link 
            href="/" 
            className="text-white/80 hover:text-white transition-colors py-2 flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="w-0 h-0.5 group-hover:w-5 bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 self-center"></span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">Home</span>
          </Link>
          <Link 
            href="#services" 
            className="text-white/80 hover:text-white transition-colors py-2 flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="w-0 h-0.5 group-hover:w-5 bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 self-center"></span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">Services</span>
          </Link>
          <Link 
            href="#expertise" 
            className="text-white/80 hover:text-white transition-colors py-2 flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="w-0 h-0.5 group-hover:w-5 bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 self-center"></span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">Expertise</span>
          </Link>
          <Link 
            href="#about" 
            className="text-white/80 hover:text-white transition-colors py-2 flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="w-0 h-0.5 group-hover:w-5 bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 self-center"></span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">About</span>
          </Link>
          <Button
            href="#contact"
            variant="primary"
            className="mt-4 w-full text-center transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_10px_rgba(168,85,247,0.6)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
