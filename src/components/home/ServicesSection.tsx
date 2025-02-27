import React from 'react';
import { IconType } from 'react-icons';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import { services } from '@/data/mock';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group bg-gradient-to-br from-card to-secondary/30 border border-purple-500/10 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/20 hover:scale-[1.03] hover:-translate-y-1">
      <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-600/20 group-hover:text-purple-300 transition-all group-hover:scale-110 duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-white/70 group-hover:text-white/90 transition-colors">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px]"></div>
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-purple-600/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-purple-500/20">
            <span className="text-purple-300 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Comprehensive Recruitment Solutions</h2>
          <p className="text-lg text-white/70">
            We offer specialized recruitment services designed to connect exceptional talent with innovative companies across various industries.
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fade-up" 
              delay={index * 100} 
              duration={500}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
