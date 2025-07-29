import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Palette } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustBadges = [
    { name: 'Apple', logo: '🍎' },
    { name: 'Notion', logo: '📝' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Shopify', logo: '🛍️' }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary/3 to-accent-neon/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-neon/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className={`space-y-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Design Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray rounded-full">
            <Palette className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              World-Class Website Design
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight">
              We Don't Just Build Websites —{' '}
              <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
                We Craft Digital Masterpieces
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl mx-auto font-light">
              Modern, performance-driven, and brand-aligned websites for businesses who play to win.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-text-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-text-primary/90 transition-all duration-300 group">
              <span className="flex items-center justify-center">
                Get Your Free Homepage Mockup
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button className="text-text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-lightGray transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Trust Badges */}
          <div className="space-y-4">
            <p className="text-sm text-text-light font-medium">Trusted by teams at</p>
            <div className="flex justify-center items-center space-x-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-text-secondary">
                  <span className="text-2xl">{badge.logo}</span>
                  <span className="font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="relative bg-accent-lightGray rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-accent-lightGray rounded w-3/4"></div>
                  <div className="h-4 bg-accent-lightGray rounded w-1/2"></div>
                  <div className="h-8 bg-gradient-to-r from-secondary to-accent-neon rounded w-1/3"></div>
                </div>
              </div>

              {/* Floating Design Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <Palette className="w-6 h-6 text-secondary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <Sparkles className="w-6 h-6 text-accent-neon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-text-light/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-light rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;