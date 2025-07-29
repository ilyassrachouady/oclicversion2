import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'glass-navbar'
        : 'bg-background-light/90 backdrop-blur-md border-b border-accent-lightGray/50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
              Ocliq
            </h1>

          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['What We Do', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-text-primary text-white px-6 py-2 rounded-full font-medium hover:bg-text-primary/90 transition-all duration-200 shadow-sm">
              Get Free Mockup
            </button>
          </div>

          <button 
            className="md:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={24} />
              <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={24} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-3 border-t border-accent-lightGray/50">
            <div className="flex flex-col space-y-3">
              {['What We Do', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-accent-lightGray/50">
                <button className="w-full bg-text-primary text-white px-6 py-3 rounded-full font-medium shadow-sm">
                  Get Free Mockup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;