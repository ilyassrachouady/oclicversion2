import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO',
      company: 'TechFlow Solutions',
      content: 'Ocliq didn\'t just redesign our website — they engineered a growth machine. Our lead generation increased by 340% in just 3 months. The AI-powered optimization continues to deliver results.',
      rating: 5,
      avatar: '👩‍💼',
      result: '+340% Lead Generation'
    },
    {
      name: 'Dr. Michael Torres',
      title: 'Founder',
      company: 'Wellness Studio Pro',
      content: 'The new website perfectly captures our brand essence and has dramatically increased our bookings. The booking integration works flawlessly, and our clients love the user experience.',
      rating: 5,
      avatar: '👨‍⚕️',
      result: '+280% Bookings'
    },
    {
      name: 'Jennifer Walsh',
      title: 'Partner',
      company: 'FinanceForward',
      content: 'Our client acquisition has never been stronger. The website builds immediate trust and credibility. Ocliq understood our industry and delivered beyond our expectations.',
      rating: 5,
      avatar: '👩‍💻',
      result: '+420% Conversions'
    },
    {
      name: 'Marcus Johnson',
      title: 'Director',
      company: 'Growth Dynamics',
      content: 'Working with Ocliq was a game-changer. They delivered a website that not only looks stunning but actually drives business results. The ROI has been incredible.',
      rating: 5,
      avatar: '👨‍💼',
      result: '+250% Revenue'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-accent-lightGray rounded-full mb-6">
            <Users className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-text-primary">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Trusted by Industry
            <span className="bg-gradient-to-r from-secondary to-accent-neon bg-clip-text text-transparent">
              {' '}Leaders
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their transformation.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-accent-lightGray rounded-3xl p-12 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <Quote size={48} className="text-secondary mx-auto mb-8" />

              <blockquote className="text-2xl md:text-3xl font-medium text-text-primary mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-text-primary text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-text-secondary">
                    {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-secondary fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-secondary bg-white px-2 py-1 rounded-full">
                      {testimonials[currentTestimonial].result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
            >
              <ChevronLeft size={20} className="text-text-secondary" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
            >
              <ChevronRight size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { number: '$2.5M+', label: 'Client Revenue Generated' },
            { number: '150+', label: 'Websites Delivered' },
            { number: '340%', label: 'Average Conversion Increase' },
            { number: '99%', label: 'Client Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;