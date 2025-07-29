import React, { useEffect, useState } from 'react';
import {
  Palette,
  TrendingUp,
  Zap,
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const WhatWeDo = () => {
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

    const element = document.getElementById('what-we-do');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Modern Website Design',
      description: 'Sophisticated design systems that perfectly capture your brand and optimize for conversions.',
      features: ['Custom Visual Identity', 'Mobile-First Approach', 'Performance Optimization'],
      highlight: 'Design-Driven'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Data-driven strategies that turn visitors into customers through psychological design principles.',
      features: ['Funnel Analysis', 'User Journey Mapping', 'Performance Tracking'],
      highlight: 'Results-Focused'
    },
    {
      icon: Zap,
      title: 'Development & Integrations',
      description: 'Seamless connections between your website and business systems for maximum efficiency.',
      features: ['Custom Development', 'Third-Party Integrations', 'Workflow Automation'],
      highlight: 'Fully Integrated'
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-background-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <Target className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Three Pillars of Growth
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We combine modern design expertise, conversion psychology, and seamless integrations
            to create websites that don't just look good — they perform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon and Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent-neon rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-white" />
                </div>
                <span className="px-3 py-1 bg-accent-lightGray text-secondary text-xs font-medium rounded-full">
                  {service.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                    <CheckCircle size={16} className="text-secondary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="flex items-center text-secondary font-medium hover:text-text-primary transition-colors duration-200 group">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhatWeDo;
