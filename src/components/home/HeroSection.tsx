import React from 'react';
import Button from '../ui/Button';
import { GridPattern, WavePattern } from '@/assets/svg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background"></div>
        
        <GridPattern className="absolute inset-0 opacity-10" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">Talent Search Reimagined</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Connecting Top Talent with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Innovative Companies</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/70">
            Elite Fynd specializes in identifying and placing exceptional professionals 
            who drive business success and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="#contact" 
              variant="primary"
              size="lg"
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30"
            >
              Get Started
            </Button>
            <Button 
              href="#services" 
              variant="outline"
              size="lg"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="hidden md:block absolute top-20 -left-16 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 -right-16 w-48 h-48 border border-purple-500/20 rounded-full animate-pulse-slow"></div>
        <div className="hidden md:block absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-lg transform rotate-45 hover:rotate-[135deg] transition-transform duration-1000"></div>
        <div className="hidden md:block absolute bottom-40 left-32 w-20 h-20 bg-white/5 rounded-lg transform -rotate-12 hover:rotate-12 transition-transform duration-1000"></div>
        
        <div className="hidden lg:block absolute -right-24 top-10 w-64 h-auto p-4 bg-card border border-purple-500/20 rounded-lg transform rotate-2 backdrop-blur-sm shadow-xl shadow-purple-900/10 hover:rotate-3 hover:scale-105 transition-all duration-500">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <pre className="text-xs text-white/70 font-mono">
            <span className="text-purple-400">const</span> <span className="text-blue-400">findTalent</span> = <span className="text-purple-400">async</span> () =&gt; {'{'}<br/>
            &nbsp;&nbsp;<span className="text-blue-400">const</span> candidates = <span className="text-purple-400">await</span> talent.find({'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;skills: [<span className="text-green-400">&quot;react&quot;</span>, <span className="text-green-400">&quot;node&quot;</span>],<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;experience: <span className="text-yellow-400">3</span><br/>
            &nbsp;&nbsp;{'}'});<br/>
            &nbsp;&nbsp;<span className="text-purple-400">return</span> candidates;<br/>
            {'}'};
          </pre>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <WavePattern fill="#0a0a18" fillOpacity="1" />
      </div>
    </section>
  );
};

export default HeroSection;
