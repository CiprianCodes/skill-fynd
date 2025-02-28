import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MobileMenuSimple from '../mobile/MobileMenuSimple';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled 
      ? 'bg-black/40 backdrop-blur-sm py-3 sm:py-4' 
      : 'bg-transparent py-4 sm:py-6'
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
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
        </div>
      </header>

      <div className={`transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-[72px] sm:h-[76px] lg:h-[86px]'}`}></div>
      
      <div className="md:hidden">
        <MobileMenuSimple />
      </div>
    </>
  );
};

export default Header;
