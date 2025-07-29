import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    'Website Design & Development',
    'Conversion Optimization',
    'Lead Generation Automation',
    'Brand Development',
    'SEO & Digital Marketing'
  ];

  const industries = [
    'Legal Services',
    'Healthcare & Dental',
    'Coaching & Consulting',
    'Real Estate',
    'Home Services'
  ];

  return (
    <footer className="bg-accent-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent-yellow to-secondary bg-clip-text text-transparent">Ocliq</h3>
            <p className="text-white/80 mb-6 leading-relaxed font-body">
              We build strategic client acquisition systems for professionals who want to grow their practice
              with measurable ROI and professional results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-yellow hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-yellow hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-yellow hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-yellow">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-accent-yellow transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-yellow">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-accent-yellow transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-yellow">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-accent-yellow" />
                <a href="mailto:hello@ocliq.com" className="text-white/70 hover:text-accent-yellow transition-colors">
                  hello@ocliq.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-accent-yellow" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-accent-yellow transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent-yellow mt-1" />
                <span className="text-white/70">
                  Remote Team<br />
                  Serving Clients Worldwide
                </span>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-accent-yellow text-accent-gray px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors font-semibold">
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Ocliq.com. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent-yellow transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-accent-yellow transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-accent-yellow transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;