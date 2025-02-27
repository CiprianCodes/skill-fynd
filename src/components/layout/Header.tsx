import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MobileMenuSimple from '../mobile/MobileMenuSimple';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll and update header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set CSS variable for header height
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--header-height', 
      isScrolled ? '64px' : '80px'
    );
  }, [isScrolled]);

  return (
    <>
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-card/80 backdrop-blur-md' : 'py-3 sm:py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
          <Logo textColor="text-white" />

          {/* Desktop Navigation */}
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
        </div>
      </header>

      {/* Standalone Mobile Menu - completely separate from header */}
      <MobileMenuSimple />
    </>
  );
};

export default Header;
