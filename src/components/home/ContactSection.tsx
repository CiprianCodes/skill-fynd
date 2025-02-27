import React, { useState } from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import Button from '../ui/Button';
import { LocationIcon, EmailIcon, PhoneIcon } from '@/assets/svg';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      setTimeout(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.',
        });
        setFormData(initialFormData);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your message. Please try again.',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px]"></div>
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-purple-600/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-purple-500/20">
            <span className="text-purple-300 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Us</h2>
          <p className="text-lg text-white/70">
            Ready to find your perfect match? Get in touch and let us help you build your dream team.
          </p>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimateOnScroll animation="fade-right" className="bg-card border border-purple-500/10 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <LocationIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="mt-1 text-white/70">123 Recruitment Street</p>
                  <p className="text-white/70">Skill City, TC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <EmailIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="mt-1">
                    <a href="mailto:info@skillfynd.com" className="text-white/70 hover:text-purple-300 transition-colors">
                      info@skillfynd.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <PhoneIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="mt-1">
                    <a href="tel:+1234567890" className="text-white/70 hover:text-purple-300 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-semibold text-xl mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600/30 hover:bg-purple-600/50 p-3 rounded-full transition-colors">
                  <FaLinkedin className="w-5 h-5 text-purple-300" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600/30 hover:bg-purple-600/50 p-3 rounded-full transition-colors">
                  <FaTwitter className="w-5 h-5 text-purple-300" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600/30 hover:bg-purple-600/50 p-3 rounded-full transition-colors">
                  <FaFacebook className="w-5 h-5 text-purple-300" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" className="bg-card border border-purple-500/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            
            {submitStatus.type && (
              <div 
                className={`p-4 mb-6 rounded-md ${
                  submitStatus.type === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary/50 border border-purple-500/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 focus:scale-[1.02] hover:border-purple-500/40"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary/50 border border-purple-500/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 focus:scale-[1.02] hover:border-purple-500/40"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white/70 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/50 border border-purple-500/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 focus:scale-[1.02] hover:border-purple-500/40"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/70 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary/50 border border-purple-500/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 focus:scale-[1.02] hover:border-purple-500/40"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="w-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-600/30 mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
