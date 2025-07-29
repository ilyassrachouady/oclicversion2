import React, { useState, useEffect } from 'react';
import { Search, Palette, Code, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
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

    const element = document.getElementById('process');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      subtitle: 'Deep Business Analysis',
      description: 'We analyze your business, competitors, and target audience to create a strategic foundation for growth.',
      features: ['Business Goals Analysis', 'Competitor Research', 'User Persona Development'],
      duration: '1-2 Days'
    },
    {
      icon: Palette,
      number: '02',
      title: 'Design',
      subtitle: 'AI-Powered Creation',
      description: 'Our AI creates multiple design variations optimized for your industry and conversion goals.',
      features: ['AI Design Generation', 'Brand Integration', 'Conversion Optimization'],
      duration: '3-5 Days'
    },
    {
      icon: Code,
      number: '03',
      title: 'Develop',
      subtitle: 'Premium Development',
      description: 'Clean, fast, and scalable code that performs beautifully across all devices and browsers.',
      features: ['Lightning-Fast Performance', 'Mobile-First Design', 'SEO Optimization'],
      duration: '1-2 Weeks'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Deploy & Scale',
      subtitle: 'Launch & Optimize',
      description: 'We launch your website and continuously optimize for maximum performance and conversions.',
      features: ['Seamless Launch', 'Performance Monitoring', 'Ongoing Optimization'],
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray rounded-full mb-6">
            <span className="text-sm font-medium text-text-primary">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            From Concept to
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              {' '}Conversion Machine
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our proven 4-step methodology transforms your website into a strategic growth engine
            that attracts, converts, and retains high-value clients.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100 hover:border-secondary/20">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-text-light">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent-neon rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-secondary font-medium text-sm">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                        <CheckCircle size={14} className="text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Duration */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-text-light bg-accent-lightGray px-2 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-text-light" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to transform your website into a growth engine?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your project and create a custom strategy for your business.
            </p>
            <button className="bg-text-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-text-primary/90 transition-all duration-300 group">
              <span className="flex items-center justify-center">
                Start Your Project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;