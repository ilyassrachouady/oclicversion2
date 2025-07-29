import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'TechFlow Solutions',
      category: 'SaaS Platform',
      description: 'Complete website redesign for a B2B SaaS company, focusing on conversion optimization and lead generation.',
      image: '🚀',
      metrics: {
        conversion: '+340%',
        traffic: '+180%',
        revenue: '+250%'
      },
      technologies: ['React', 'Conversion Optimization', 'CRM Integration'],
      testimonial: 'Ocliq transformed our online presence. Our lead generation increased by 340% in just 3 months.',
      client: 'Sarah Chen, CEO'
    },
    {
      title: 'Wellness Studio Pro',
      category: 'Health & Wellness',
      description: 'Modern, conversion-focused website for a premium wellness center with booking integration and client management.',
      image: '🧘',
      metrics: {
        conversion: '+280%',
        bookings: '+220%',
        retention: '+160%'
      },
      technologies: ['Next.js', 'Booking System', 'Payment Integration'],
      testimonial: 'The new website perfectly captures our brand essence and has dramatically increased our bookings.',
      client: 'Dr. Michael Torres'
    },
    {
      title: 'FinanceForward',
      category: 'Financial Services',
      description: 'Professional website redesign for a financial advisory firm with trust-building elements and lead capture.',
      image: '💼',
      metrics: {
        conversion: '+420%',
        leads: '+300%',
        trust: '+190%'
      },
      technologies: ['TypeScript', 'Security Features', 'Analytics'],
      testimonial: 'Our client acquisition has never been stronger. The website builds immediate trust and credibility.',
      client: 'Jennifer Walsh, Partner'
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-accent-lightGray">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <Star className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              Our Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Real Results for
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              {' '}Real Businesses
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth through
            strategic design and AI-powered optimization.
          </p>
        </div>

        {/* Featured Project */}
        <div className={`transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Visual */}
              <div className="bg-gradient-to-br from-secondary to-accent-neon p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">{projects[activeProject].image}</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-white font-bold text-lg mb-2">Live Preview</h4>
                    <div className="bg-white rounded-lg p-4 text-left">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="flex-1 bg-gray-100 rounded px-2 py-1 text-xs text-gray-500">
                          {projects[activeProject].title.toLowerCase().replace(' ', '')}.com
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-secondary to-accent-neon rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-8 bg-text-primary rounded w-1/2 mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-12">
                <div className="mb-6">
                  <span className="text-secondary font-medium text-sm">
                    {projects[activeProject].category}
                  </span>
                  <h3 className="text-3xl font-bold text-text-primary mt-2 mb-4">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {projects[activeProject].description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(projects[activeProject].metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-accent-lightGray rounded-xl">
                      <div className="text-2xl font-bold text-secondary mb-1">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-accent-lightGray rounded-xl p-6 mb-8">
                  <p className="text-text-primary italic mb-3">
                    "{projects[activeProject].testimonial}"
                  </p>
                  <p className="text-sm font-medium text-secondary">
                    — {projects[activeProject].client}
                  </p>
                </div>

                {/* CTA */}
                <button className="flex items-center text-secondary font-semibold hover:text-text-primary transition-colors duration-200 group">
                  View Case Study
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevProject}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <ChevronLeft size={20} className="text-text-secondary" />
              <span className="text-sm font-medium text-text-secondary">Previous</span>
            </button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeProject ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="text-sm font-medium text-text-secondary">Next</span>
              <ChevronRight size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-text-primary to-secondary rounded-2xl p-12 shadow-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Your Website's Potential?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a fully personalized homepage mockup — completely free, no obligation.
              See exactly how your website could look and perform.
            </p>
            <button className="bg-white text-text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 group shadow-lg">
              <span className="flex items-center justify-center">
                Get Your Free Homepage Mockup
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <p className="text-white/70 text-sm mt-4">
              No meetings, no sales calls — just expert design delivered to your inbox
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;