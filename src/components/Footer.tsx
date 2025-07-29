import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Website Design & SEO', href: '#what-we-do' },
      { name: 'Lead Generation & CRM', href: '#what-we-do' },
      { name: 'Chatbots & Mobile Apps', href: '#what-we-do' },
      { name: 'Free Homepage Mockup', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
      { name: 'Free Strategy Call', href: '#contact' }
    ],
    resources: [
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Design Process', href: '#what-we-do' },
      { name: 'Success Stories', href: '#portfolio' },
      { name: 'Get Started', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Ocliq</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                World-class website design agency creating digital masterpieces that drive real business results.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent-neon flex-shrink-0" />
                <span className="text-white/90 text-sm md:text-base">contact@ocliq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent-neon flex-shrink-0" />
                <span className="text-white/90 text-sm md:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent-neon flex-shrink-0" />
                <span className="text-white/90 text-sm md:text-base">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-accent-neon/20 p-2 md:p-3 rounded-lg transition-all duration-300 group"
                >
                  <social.icon size={18} className="text-white group-hover:text-accent-neon transition-colors duration-300 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-neon transition-colors duration-300 text-sm md:text-base group flex items-center"
                  >
                    {link.name}
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-neon transition-colors duration-300 text-sm md:text-base group flex items-center"
                  >
                    {link.name}
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-neon transition-colors duration-300 text-sm md:text-base group flex items-center"
                  >
                    {link.name}
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
          <div className="bg-gradient-to-r from-secondary/10 to-accent-neon/10 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">
              Get your free homepage mockup and see how we can elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-accent-neon text-text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-accent-neon/90 transition-all duration-300 group text-sm md:text-base">
                <span className="flex items-center justify-center">
                  Get Free Mockup
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="w-full sm:w-auto border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm md:text-base">
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-white/60 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Ocliq. All rights reserved. Crafted with precision and passion.
            </div>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;