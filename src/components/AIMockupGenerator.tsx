import React, { useState, useEffect } from 'react';
import {
  Target,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle,
  Zap,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

const MockupGenerator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ai-mockup-generator');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    { icon: Target, title: 'Brand Analysis', description: 'We analyze your industry, competitors, and brand identity' },
    { icon: Sparkles, title: 'Design Creation', description: 'Our experts create multiple design variations tailored to your brand' },
    { icon: CheckCircle, title: 'Optimization', description: 'We apply conversion best practices and user psychology' },
    { icon: Zap, title: 'Delivery', description: 'Receive your personalized mockup in under 24 hours' }
  ];

  const handleTryFree = () => {
    setIsGenerating(true);
    // Simulate the generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <section id="mockup-generator" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              Free Homepage Mockup
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            See Your Website's Potential
            <br />
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              Before You Commit
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get a fully personalized homepage mockup — completely free, no obligation. No meetings, no sales calls —
            just expert design delivered to your inbox.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Process Steps */}
          <div className={`space-y-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              How We Create Your Mockup
            </h3>

            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                  currentStep === index ? 'bg-accent-lightGray' : 'hover:bg-accent-lightGray/50'
                }`}
                onMouseEnter={() => setCurrentStep(index)}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  currentStep === index 
                    ? 'bg-gradient-to-br from-secondary to-accent-neon text-white' 
                    : 'bg-white text-secondary border border-gray-200'
                }`}>
                  <step.icon size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-1">
                    {step.title}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= index 
                    ? 'border-secondary bg-secondary' 
                    : 'border-gray-300'
                }`}>
                  {currentStep >= index && (
                    <CheckCircle size={14} className="text-white m-0.5" />
                  )}
                </div>
              </div>
            ))}

            <div className="bg-accent-lightGray rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-text-primary">24-Hour Delivery</span>
              </div>
              <p className="text-text-secondary text-sm">
                Most mockups are delivered within 12-24 hours. Rush delivery available for urgent projects.
              </p>
            </div>
          </div>

          {/* Right Side - Interactive Mockup Preview */}
          <div className={`transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Device Frame */}
              <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center space-x-2 p-4 bg-gray-100 border-b">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-white rounded ml-4 px-3 py-1 text-xs text-gray-500">
                      yourwebsite.com
                    </div>
                  </div>

                  {/* Mockup Content */}
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-gradient-to-r from-secondary to-accent-neon rounded w-2/3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    </div>
                    <div className="h-10 bg-text-primary rounded w-1/3"></div>
                    
                    {/* AI Enhancement Indicators */}
                    {isGenerating && (
                      <>
                        <div className="absolute top-20 right-4 bg-white rounded-lg p-2 shadow-lg animate-pulse">
                          <Brain className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="absolute bottom-20 left-4 bg-white rounded-lg p-2 shadow-lg animate-pulse">
                          <Sparkles className="w-4 h-4 text-accent-neon" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Device Options */}
              <div className="flex justify-center space-x-4 mt-6">
                <button className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                  <Monitor size={20} className="text-text-secondary" />
                </button>
                <button className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                  <Tablet size={20} className="text-text-secondary" />
                </button>
                <button className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                  <Smartphone size={20} className="text-text-secondary" />
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <button 
                onClick={handleTryFree}
                disabled={isGenerating}
                className="bg-text-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-text-primary/90 transition-all duration-300 group disabled:opacity-50"
              >
                <span className="flex items-center justify-center">
                  {isGenerating ? (
                    <>
                      <Brain className="w-5 h-5 mr-2 animate-spin" />
                      Generating Your Mockup...
                    </>
                  ) : (
                    <>
                      Try It Free
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
              <p className="text-sm text-text-light mt-3">
                No credit card required • 100% free • No spam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupGenerator;
