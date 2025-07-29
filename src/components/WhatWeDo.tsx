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
      title: 'Website Design & SEO',
      description: 'Beautiful, high-converting websites with built-in SEO optimization to drive organic traffic and sales.',
      features: ['Custom Website Design', 'SEO Optimization', 'Mobile-First Approach'],
      highlight: 'Design + SEO'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation & CRM',
      description: 'Automated lead capture systems with seamless CRM integrations to maximize your sales pipeline.',
      features: ['Lead Automation', 'CRM Integration', 'Sales Funnel Setup'],
      highlight: 'Sales-Focused'
    },
    {
      icon: Zap,
      title: 'Chatbots & Mobile Apps',
      description: 'Custom chatbot development and mobile applications to enhance customer experience and engagement.',
      features: ['Custom Chatbots', 'Mobile Applications', 'User Experience Design'],
      highlight: 'Tech Solutions'
    }
  ];

  return (
    <section id="what-we-do" className="pt-4 md:pt-8 pb-12 md:pb-16 bg-background-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray rounded-full mb-3 md:mb-4 shadow-sm">
            <Target className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 md:mb-4 leading-tight px-4">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            We specialize in high-impact digital solutions that drive real business growth
            and deliver measurable results for your company.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-background-light rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon and Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-secondary to-accent-neon rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-white md:w-7 md:h-7" />
                </div>
                <span className="px-2 md:px-3 py-1 bg-accent-lightGray text-secondary text-xs font-medium rounded-full">
                  {service.highlight}
                </span>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 md:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs md:text-sm text-text-secondary justify-center md:justify-start">
                    <CheckCircle size={14} className="text-secondary mr-2 md:mr-3 flex-shrink-0 md:w-4 md:h-4" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100 text-center md:text-left">
                <button className="inline-flex items-center text-secondary font-medium hover:text-text-primary transition-colors duration-200 group text-sm md:text-base">
                  Learn More
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200 md:w-4 md:h-4" />
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
