import { useEffect, useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustLogos = [
    'Preptiq',
    'PursueU',
    'PropBolt',
    'Corbeil',
    'LemayConsulting',
    'Pearline',
    'KratomOnline.ca'
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] bg-background-light overflow-hidden">
      {/* Premium background gradient with our colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-neutral via-background-light to-accent-lightGray/30"></div>

      {/* Subtle floating elements with our brand colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-secondary/5 to-accent-neon/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-accent-neon/5 to-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-[90vw] mx-auto px-4 text-center pt-20 md:pt-24 pb-8 md:pb-12 min-h-[80vh] md:min-h-[85vh] flex flex-col justify-center">
        <div className={`space-y-3 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* 1. Label Badge */}
          <div className={`flex justify-center mb-3 transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray/80 backdrop-blur-sm rounded-full border border-accent-lightGray">
              <Globe className="w-4 h-4 text-secondary mr-2" />
              <span className="text-sm font-medium text-text-primary tracking-wide">
                World-Class Website Design
              </span>
            </div>
          </div>

          {/* 2. Main Headline Block */}
          <div className={`space-y-3 mb-4 transform transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              <div className="font-bold text-text-primary mb-2">
                We Don't Just Build Websites —
              </div>
              <div className="font-bold bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
                We Craft Digital Masterpieces
              </div>
            </h1>
          </div>

          {/* 3. Subheadline */}
          <div className={`mb-6 transform transition-all duration-700 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-[80%] mx-auto font-light">
              Modern, performance-driven, and brand-aligned websites for businesses who play to win.
            </p>
          </div>

          {/* 4. CTA Buttons */}
          <div className={`flex flex-col gap-3 items-center mb-4 transform transition-all duration-700 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {/* Primary CTA */}
            <button className="w-full max-w-sm bg-text-primary text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-text-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl active:scale-[0.98]">
              <span className="flex items-center justify-center">
                Get Your Free Homepage Mockup
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button className="w-full max-w-sm text-text-primary px-8 py-4 rounded-2xl font-semibold text-base hover:bg-accent-lightGray transition-all duration-300 border border-accent-lightGray hover:border-text-light active:scale-[0.98]">
              View Our Work
            </button>
          </div>

          {/* 5. Trust Logos Slider */}
          <div className={`transform transition-all duration-700 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-sm text-text-bold from-secondary to-accent-neon font-medium mb-3 from-secondary to-accent-neon tracking-wide">Trusted by</p>

            {/* Infinite Logo Slider */}
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-background-light to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-background-light to-transparent z-10"></div>

              {/* Sliding container */}
              <div className="flex animate-scroll pause-animation">
                {/* First set of logos */}
                {trustLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 mx-6 text-text-light font-medium text-sm tracking-wide whitespace-nowrap">
                    {logo}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {trustLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 mx-6 text-text-light font-medium text-sm tracking-wide whitespace-nowrap">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;