import React, { useState, useEffect } from 'react';
import { Scale, Users, Heart, Building, MapPin, Sparkles } from 'lucide-react';

const WhoWeHelp = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('who-we-help');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: Scale,
      name: 'Lawyers',
      description: 'Legal professionals',
      color: 'from-primary to-primary-600',
      stats: '+300% leads'
    },
    {
      icon: Users,
      name: 'Coaches',
      description: 'Life & business coaches',
      color: 'from-secondary to-secondary-600',
      stats: '+250% revenue'
    },
    {
      icon: Heart,
      name: 'Dentists',
      description: 'Healthcare providers',
      color: 'from-primary-600 to-secondary',
      stats: '62% conversion'
    },
    {
      icon: Building,
      name: 'Agencies',
      description: 'Digital agencies',
      color: 'from-secondary to-primary',
      stats: '+400% growth'
    },
    {
      icon: MapPin,
      name: 'Local Businesses',
      description: 'Service providers',
      color: 'from-primary-700 to-secondary-700',
      stats: '+180% calls'
    }
  ];

  return (
    <section id="who-we-help" className="py-20 bg-white relative">
      {/* Simple background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-secondary/5 to-accent-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`mb-16 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full border border-slate-200 mb-6">
            <Sparkles className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-semibold text-primary">
              Smart Website Solutions for Service-Based Industries
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
            Who We Help <span className="text-secondary">Grow</span> Online
          </h2>
          <p className="text-xl font-body text-text-secondary max-w-3xl mx-auto">
            We specialize in creating conversion-focused websites for professionals and small businesses
            who need to attract, convert, and retain high-value clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-secondary/30 transition-all duration-300 cursor-pointer hover:shadow-lg transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <industry.icon size={28} className="text-white" />
                </div>

                <h3 className="font-bold text-lg text-text-primary mb-2 font-heading">
                  {industry.name}
                </h3>
                <p className="text-sm text-text-secondary mb-3 font-body">{industry.description}</p>

                {/* Stats Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                  {industry.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative p-8 bg-slate-50 rounded-xl border border-slate-200 group hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-lg text-text-secondary font-medium">
                  "We've worked with professionals across industries to increase their revenue,
                  authority, and peace of mind through strategic web design."
                </p>
                <p className="text-sm text-primary font-semibold mt-2">
                  — Ocliq Development Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;