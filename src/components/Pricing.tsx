import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap, 
  Crown, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Essentials',
      subtitle: 'Perfect for small businesses',
      price: { monthly: 2997, yearly: 29970 },
      originalPrice: { monthly: 4997, yearly: 49970 },
      icon: Zap,
      color: 'secondary',
      popular: false,
      features: [
        'Professional website design',
        'Mobile-responsive layout',
        'Basic SEO optimization',
        'Contact form integration',
        'Social media links',
        '30-day support',
        'SSL certificate included',
        'Basic analytics setup'
      ],
      deliverables: [
        '5-page custom website',
        'Logo integration',
        'Basic content creation',
        '2 rounds of revisions'
      ],
      timeline: '7-10 business days'
    },
    {
      name: 'Growth',
      subtitle: 'Most popular for growing businesses',
      price: { monthly: 4997, yearly: 49970 },
      originalPrice: { monthly: 7997, yearly: 79970 },
      icon: TrendingUp,
      color: 'accent-neon',
      popular: true,
      features: [
        'Everything in Essentials',
        'Advanced conversion optimization',
        'Advanced SEO & local search',
        'Lead capture & automation',
        'CRM integration',
        'A/B testing setup',
        '90-day support & optimization',
        'Performance analytics dashboard',
        'Email marketing integration',
        'Booking system (if applicable)'
      ],
      deliverables: [
        '10-page custom website',
        'Professional copywriting',
        'Lead magnets & forms',
        'Unlimited revisions'
      ],
      timeline: '10-14 business days'
    },
    {
      name: 'Custom Enterprise',
      subtitle: 'Enterprise-level transformation',
      price: { monthly: 9997, yearly: 99970 },
      originalPrice: { monthly: 14997, yearly: 149970 },
      icon: Crown,
      color: 'text-primary',
      popular: false,
      features: [
        'Everything in Growth',
        'Custom chatbot development',
        'Advanced automation workflows',
        'Multi-location optimization',
        'Custom integrations',
        'Dedicated account manager',
        '6-month support & optimization',
        'Monthly strategy calls',
        'Priority support',
        'Custom analytics dashboard',
        'Conversion rate guarantee'
      ],
      deliverables: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced custom features',
        'White-glove service'
      ],
      timeline: '14-21 business days'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-accent-lightGray">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <Star className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              Investment Options
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Choose Your 
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              {' '}Growth Plan
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Every plan includes our signature 
            conversion optimization and ongoing support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'monthly' 
                  ? 'bg-secondary text-white' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'yearly' 
                  ? 'bg-secondary text-white' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              + Maintenance
              <span className="ml-2 text-xs bg-accent-neon text-text-primary px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${plan.popular ? 'ring-2 ring-secondary scale-105' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  plan.color === 'secondary' ? 'bg-secondary text-white' :
                  plan.color === 'accent-neon' ? 'bg-accent-neon text-text-primary' :
                  'bg-text-primary text-white'
                }`}>
                  <plan.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-secondary mb-6">
                  {plan.subtitle}
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-text-primary">
                      ${(plan.price[billingCycle] / 100).toLocaleString()}
                    </span>
                    {billingCycle === 'yearly' && (
                      <span className="text-text-secondary">/year</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg text-text-secondary line-through">
                      ${(plan.originalPrice[billingCycle] / 100).toLocaleString()}
                    </span>
                    <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      Save ${((plan.originalPrice[billingCycle] - plan.price[billingCycle]) / 100).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-text-secondary mb-6">
                  <strong>Timeline:</strong> {plan.timeline}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 group ${
                plan.popular 
                  ? 'bg-secondary text-white hover:bg-secondary/90' 
                  : 'bg-text-primary text-white hover:bg-text-primary/90'
              }`}>
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold text-text-primary">
                Not sure which plan is right for you?
              </h3>
            </div>
            <p className="text-text-secondary mb-6">
              Book a free 15-minute strategy call and we'll recommend the perfect solution for your business.
            </p>
            <button className="bg-accent-neon text-text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent-neon/90 transition-all duration-300">
              Book Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
