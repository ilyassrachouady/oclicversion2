import React, { useState, useEffect } from 'react';
import {
  Zap,
  Palette,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const WhyOcliq = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-ocliq');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Palette,
      title: 'Expert Design Intelligence',
      description: 'Our team analyzes your industry, competitors, and target audience to create data-driven designs that convert.',
      benefits: ['Conversion optimization', 'Industry-specific insights', 'Proven methodologies'],
      visual: '🎨'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Delivery',
      description: 'From concept to launch in record time without compromising quality. Our streamlined process gets you results faster.',
      benefits: ['7-14 day delivery', 'Agile methodology', 'Real-time collaboration'],
      visual: '⚡'
    },
    {
      icon: Target,
      title: 'Conversion-First Approach',
      description: 'Every element is strategically placed to guide visitors toward your business goals. We design for results, not just aesthetics.',
      benefits: ['Strategic user flows', 'A/B tested elements', 'Performance tracking'],
      visual: '🎯'
    },
    {
      icon: Rocket,
      title: 'Growth-Focused Strategy',
      description: 'We don\'t just build websites; we engineer growth engines that scale with your business and adapt to market changes.',
      benefits: ['Scalable architecture', 'Growth analytics', 'Future-proof design'],
      visual: '🚀'
    }
  ];

  const differentiators = [
    'AI-powered design optimization',
    'Industry-specific conversion strategies',
    'Real-time performance analytics',
    'Dedicated growth specialist',
    'Lifetime design updates',
    '99.9% uptime guarantee'
  ];

  return (
    <section id="why-ocliq" className="py-24 bg-gradient-to-br from-white to-accent-lightGray">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              The Ocliq Advantage
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Why Choose 
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              {' '}Ocliq?
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're not just another web design agency. We're your strategic growth partner, 
            combining cutting-edge AI with proven conversion strategies.
          </p>
        </div>

        {/* Interactive Features */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-20 transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-white shadow-lg border-2 border-secondary' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeFeature === index ? 'bg-secondary text-white' : 'bg-accent-lightGray text-secondary'
                  }`}>
                    <feature.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Visual */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-8xl mb-6">{features[activeFeature].visual}</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-text-secondary mb-6">
                {features[activeFeature].description}
              </p>
              
              <div className="space-y-3">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <CheckCircle size={16} className="text-secondary" />
                    <span className="text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className={`bg-text-primary rounded-3xl p-12 text-center transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-8">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <CheckCircle size={20} className="text-accent-neon flex-shrink-0" />
                <span className="text-left">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-4 text-white">
              <TrendingUp size={24} className="text-accent-neon" />
              <span className="text-xl font-semibold">
                Average client sees 340% increase in conversions within 90 days
              </span>
            </div>
          </div>

          <button className="bg-accent-neon text-text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent-neon/90 transition-all duration-300 group">
            <span className="flex items-center justify-center">
              Start Your Transformation
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyOcliq;
