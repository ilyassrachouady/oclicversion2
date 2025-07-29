import React, { useState, useEffect } from 'react';
import {
  Quote,
  Heart,
  Target,
  Zap,
  Users,
  Award,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Client-First Philosophy',
      description: 'Your success is our success. Every decision we make is guided by what will drive the best results for your business.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Target,
      title: 'Results-Driven Approach',
      description: 'We don\'t just create beautiful websites. We engineer conversion machines that deliver measurable business growth.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovation & Speed',
      description: 'Leveraging cutting-edge AI and proven methodologies to deliver exceptional results faster than traditional agencies.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Partnership Mindset',
      description: 'We\'re not just a vendor; we\'re your strategic growth partner, invested in your long-term success.',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Websites Delivered', icon: Award },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
    { number: '340%', label: 'Average Conversion Increase', icon: Target },
    { number: '100%', label: 'Client Satisfaction Rate', icon: Heart }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              About Ocliq
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Built by Entrepreneurs,
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              {' '}For Entrepreneurs
            </span>
          </h2>
        </div>

        {/* Founder Quote */}
        <div className={`bg-gradient-to-br from-secondary to-accent-neon rounded-3xl p-12 mb-20 transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={48} className="text-white/80 mx-auto mb-8" />

            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "We started Ocliq because we were frustrated with agencies that promised the world but delivered mediocre results.
              As full-stack engineers with 5+ years of experience, we understand what actually works in web development.
              That's why we've built a system that combines modern design expertise with proven conversion strategies
              to deliver websites that actually grow your business."
            </blockquote>

            <div className="flex items-center justify-center space-x-6">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
                  👨‍💻
                </div>
                <div className="font-bold text-lg">Ilyass Rachouady</div>
                <div className="text-white/80 text-sm">Co-Founder & Lead Developer</div>
              </div>
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
                  👨‍💻
                </div>
                <div className="font-bold text-lg">Amine Belaoudi</div>
                <div className="text-white/80 text-sm">Co-Founder & Lead Designer</div>
              </div>
            </div>
            <div className="text-center text-white/60 text-sm mt-4">
              Full-stack engineers • 5+ years experience • 50+ websites delivered
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={`mb-20 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-text-primary text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-accent-lightGray rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${value.color}`}>
                  <value.icon size={24} />
                </div>

                <h4 className="text-xl font-bold text-text-primary mb-4">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
                <stat.icon size={24} className="text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`bg-accent-lightGray rounded-3xl p-12 text-center transform transition-all duration-700 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-text-primary mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            To democratize high-converting website design by combining modern development expertise
            with proven conversion strategies, making enterprise-level optimization accessible
            to businesses of all sizes. We believe every entrepreneur deserves a website that
            works as hard as they do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;