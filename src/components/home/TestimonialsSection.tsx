import React from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import Image from 'next/image';
import { testimonials } from '@/data/mock';
import { QuoteIcon } from '@/assets/svg';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, company, imageSrc }) => {
  return (
    <div className="bg-gradient-to-br from-card to-secondary/30 border border-purple-500/10 rounded-xl p-8 shadow-lg hover:shadow-purple-600/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group h-full">
      <div className="flex flex-col h-full">
        <div className="mb-6 transform group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300">
          <QuoteIcon />
        </div>
        
        <p className="text-white/80 text-lg flex-grow mb-6 group-hover:text-white/90 transition-colors">{quote}</p>
        
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-purple-500/30 group-hover:border-purple-500/50 transition-colors">
            <Image 
              src={imageSrc}
              alt={name}
              fill
              sizes="48px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">{name}</h4>
            <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px]"></div>
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-purple-600/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-purple-500/20">
            <span className="text-purple-300 text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-white/70">
            We take pride in our ability to connect companies with exceptional talent that drives success.
            Here's what some of our clients have to say about working with us.
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
              duration={500}
            >
              <Testimonial
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                imageSrc={testimonial.imageSrc}
              />
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-up" delay={200} className="mt-16 text-center">
          <div className="bg-card border border-purple-500/10 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600/10 rounded-full"></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <AnimateOnScroll animation="fade-up" delay={100} className="inline-block">
                  Ready to Find Your Perfect Talent Match?
                </AnimateOnScroll>
              </h3>
              <AnimateOnScroll animation="fade-up" delay={200}>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Let us help you identify and attract the exceptional talent your organization needs to thrive in today's competitive landscape.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={300}>
                <a 
                  href="#contact" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/40"
                >
                  Start the Conversation
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
