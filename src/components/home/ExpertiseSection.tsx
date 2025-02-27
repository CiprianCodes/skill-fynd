import React from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import { expertiseAreas } from '@/data/mock';

interface ExpertiseItemProps {
  title: string;
  industries: string[];
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ title, industries }) => {
  return (
    <div className="bg-gradient-to-br from-card to-secondary/30 border border-purple-500/10 rounded-xl p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-600/10 group">
      <h3 className="text-xl font-bold mb-5 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
      <div className="space-y-3">
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 pl-3 py-2 border-l-2 border-purple-600/40 transition-all duration-200 hover:border-purple-500 hover:translate-x-1"
          >
            <span className="text-white/80 hover:text-white transition-colors">{industry}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-20 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px]"></div>
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-purple-600/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-purple-500/20">
            <span className="text-purple-300 text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Industry Specializations</h2>
          <p className="text-lg text-white/70 mb-2">
            Our team brings deep expertise across a wide range of industries, allowing us to find the perfect talent match for your specific sector.
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fade-up" 
              delay={index * 100} 
              duration={500}
              className="h-full"
            >
              <ExpertiseItem
                title={area.title}
                industries={area.industries}
              />
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-up" delay={200} className="mt-16">
          <div className="bg-gradient-to-br from-card to-secondary/30 border border-purple-500/10 rounded-xl p-10 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-600/10 rounded-tr-full"></div>
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">Core Skills We Place</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Beyond industry expertise, we specialize in placing professionals with these in-demand skills
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 relative z-10">
              {[
                'Artificial Intelligence', 'Blockchain', 'Cloud Architecture', 'Data Analytics', 
                'Digital Transformation', 'E-commerce', 'Full-Stack Development', 'Growth Marketing',
                'Machine Learning', 'Mobile Development', 'Product Management', 'User Experience'
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 pl-3 py-2 border-l-2 border-purple-600/40 transition-all duration-200 hover:border-purple-500 hover:translate-x-1"
                >
                  <span className="text-white/80 hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ExpertiseSection;
