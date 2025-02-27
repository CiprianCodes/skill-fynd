import React from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import Image from 'next/image';
import { aboutFeatures, aboutMetrics, coreValues } from '@/data/mock/about';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px]"></div>
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-purple-600/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-purple-500/20">
            <span className="text-purple-300 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Approach to Skill Acquisition</h2>
          <p className="text-lg text-white/70">
            At Skill Fynd, we go beyond traditional recruiting. We combine industry expertise, cutting-edge technology, 
            and a personalized approach to connect exceptional talent with innovative companies.
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateOnScroll animation="fade-right" className="relative">
            <div className="absolute -z-10 inset-0 bg-purple-600/5 blur-[60px] rounded-full"></div>
            <div className="relative bg-card border border-purple-500/10 rounded-xl overflow-hidden aspect-video shadow-xl shadow-purple-900/10">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Our team collaborating" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-left" delay={200}>
            <div className="space-y-6">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="bg-card border border-purple-500/10 rounded-xl p-6 transition-all duration-500 ease-in-out hover:bg-gradient-to-br from-secondary/40 to-card hover:border-purple-500/30 hover:scale-[1.02] group">
                  <div className="bg-purple-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ease-in-out group-hover:bg-purple-600/20">
                    {React.createElement(feature.icon, { 
                      className: "w-6 h-6 text-purple-400 transition-all duration-500 ease-in-out group-hover:text-purple-300 group-hover:scale-110" 
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white transition-all duration-500 ease-in-out group-hover:text-purple-200">{feature.title}</h3>
                  <p className="text-white/70 transition-all duration-500 ease-in-out group-hover:text-white/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {aboutMetrics.map((item, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fade-up" 
              delay={100 * index}
              className="bg-card border border-purple-500/10 rounded-xl p-6 text-center transition-all duration-500 ease-in-out hover:bg-gradient-to-b from-secondary to-card hover:border-purple-500/30 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 transition-all duration-500 ease-in-out group-hover:text-purple-300">{item.metric}</div>
              <div className="text-white/70 group-hover:text-white/90 transition-all duration-500 ease-in-out">{item.description}</div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="bg-card border border-purple-500/10 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600/10 rounded-full"></div>
            
            <div className="text-center mb-10 relative">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Core Values</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                These principles guide our approach to connecting exceptional talent with innovative companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {coreValues.map((value, index) => (
                <AnimateOnScroll 
                  key={index} 
                  animation="fade-up" 
                  delay={100 * (index + 1)}
                  className="bg-card border border-purple-500/10 rounded-lg p-6 hover:bg-gradient-to-br from-secondary/50 to-secondary/30 hover:border-purple-500/30 transition-all duration-500 ease-in-out hover:scale-[1.02] group"
                >
                  <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-300 transition-all duration-500 ease-in-out">{value.title}</h4>
                  <p className="text-white/70 group-hover:text-white/90 transition-all duration-500 ease-in-out">{value.description}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
