import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Calendar,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@ocliq.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'Remote-first with global reach'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 2 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-secondary to-accent-neon">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              We've received your message and will get back to you within 2 hours during business hours.
            </p>
            <div className="space-y-4">
              <p className="text-text-secondary">
                <strong>What happens next?</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-accent-lightGray rounded-xl p-4">
                  <div className="font-semibold text-text-primary mb-2">1. Quick Response</div>
                  <div className="text-text-secondary">We'll reach out within 2 hours to schedule a call</div>
                </div>
                <div className="bg-accent-lightGray rounded-xl p-4">
                  <div className="font-semibold text-text-primary mb-2">2. Strategy Session</div>
                  <div className="text-text-secondary">15-minute call to understand your goals and challenges</div>
                </div>
                <div className="bg-accent-lightGray rounded-xl p-4">
                  <div className="font-semibold text-text-primary mb-2">3. Custom Proposal</div>
                  <div className="text-text-secondary">Tailored solution with timeline and investment details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary to-accent-neon">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform 
            <span className="text-accent-neon">
              {' '}Your Business?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Let's discuss how we can help you create a website that drives real results. 
            Book a free strategy call or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="new-website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="optimization">Conversion Optimization</option>
                    <option value="maintenance">Ongoing Maintenance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project goals, challenges, and what you're looking to achieve..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-text-primary text-white py-4 rounded-xl font-semibold hover:bg-text-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Quick Contact Options */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Prefer to Talk?
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-xl p-3">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{info.title}</div>
                      <div className="text-accent-neon font-medium">{info.content}</div>
                      <div className="text-white/70 text-sm">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-accent-neon text-text-primary py-4 rounded-xl font-semibold hover:bg-accent-neon/90 transition-all duration-300 group">
                <span className="flex items-center justify-center">
                  <Calendar size={20} className="mr-2" />
                  Book Free Strategy Call
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* FAQ */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-white mb-6">
                Quick Questions?
              </h3>
              
              <div className="space-y-4 text-white/80">
                <div>
                  <div className="font-medium text-white">How quickly can you start?</div>
                  <div className="text-sm">Most projects begin within 1-2 weeks of contract signing.</div>
                </div>
                <div>
                  <div className="font-medium text-white">Do you work with small businesses?</div>
                  <div className="text-sm">Absolutely! We have solutions for businesses of all sizes.</div>
                </div>
                <div>
                  <div className="font-medium text-white">What's included in ongoing support?</div>
                  <div className="text-sm">Updates, security monitoring, performance optimization, and strategic guidance.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
