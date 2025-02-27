import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { TwitterIcon, LinkedInIcon, GitHubIcon, FooterGridPattern } from '@/assets/svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card relative">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <FooterGridPattern className="absolute inset-0 opacity-5" />
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-white/70 mb-4">
              Connecting exceptional talent with innovative companies since 2024.
            </p>
            <div className="flex space-x-4 mt-4">
              <span className="text-white/70 hover:text-purple-400 transition-colors cursor-pointer transform hover:scale-125 duration-300">
                <TwitterIcon />
              </span>
              <span className="text-white/70 hover:text-purple-400 transition-colors cursor-pointer transform hover:scale-125 duration-300">
                <LinkedInIcon />
              </span>
              <a href="https://github.com/CiprianCodes" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-purple-400 transition-colors transform hover:scale-125 duration-300">
                <GitHubIcon />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                Press
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
              <li><span className="text-white/70 hover:text-white transition-colors relative group inline-block cursor-pointer">
                Support
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-secondary/50 border border-purple-500/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transform transition-all duration-300 focus:scale-[1.02] hover:border-purple-500/40"
              />
              <Button 
                variant="primary" 
                className="w-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-600/30"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Skill Fynd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
