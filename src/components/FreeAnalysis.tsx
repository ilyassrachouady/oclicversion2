import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FreeAnalysis = () => {
  const benefits = [
    'Homepage mockup tailored to your industry',
    'Conversion optimization recommendations',
    'Lead generation strategy outline',
    'Competitive analysis insights',
    'No obligation, completely free'
  ];

  return (
    <section className="py-20 bg-accent-gray text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See What We'd Do With Your Website?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            We'll send you a free homepage mockup & growth plan tailored specifically
            to your business and industry.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary"
                  />
                </div>
                <div>
                  <input
                    type="url"
                    placeholder="Your Website (if you have one)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary">
                    <option>Select Your Industry</option>
                    <option>Legal Services</option>
                    <option>Healthcare/Dental</option>
                    <option>Coaching/Consulting</option>
                    <option>Real Estate</option>
                    <option>Home Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-yellow text-accent-gray px-6 py-4 rounded-lg hover:bg-secondary hover:text-white transition-colors font-semibold text-lg flex items-center justify-center group"
                >
                  Request Free Mockup
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-sm text-text-secondary/70 mt-4">
                We'll send your mockup within 48 hours. No spam, ever.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/70 text-lg">
            Join 100+ professionals who've already transformed their online presence
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeAnalysis;