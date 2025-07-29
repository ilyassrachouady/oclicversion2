import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need technical knowledge to work with you?',
      answer: 'Not at all! We handle everything from design to development to hosting. You focus on running your business while we take care of all the technical details. We\'ll train you on simple content updates if needed.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most websites are completed in 2-4 weeks. This includes strategy, design, development, and optimization. Rush projects can be accommodated for an additional fee.'
    },
    {
      question: 'Is there a long-term contract required?',
      answer: 'No contracts, just results! We work on a project basis. Many clients choose ongoing optimization services, but there\'s never any obligation to continue beyond your initial project.'
    },
    {
      question: 'What if I already have a website?',
      answer: 'Perfect! We specialize in website redesigns and optimization. We\'ll audit your current site, identify what\'s working and what isn\'t, then create a conversion-optimized version that gets better results.'
    },
    {
      question: 'Do you work with my existing brand?',
      answer: 'Absolutely. We work within your existing brand guidelines and can enhance your brand presence online. If you need brand development, we can help with that too.'
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'While results vary by industry and starting point, our clients typically see 2-5x increases in leads within the first 90 days. We focus on qualified leads that convert to paying clients.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer various support packages including hosting, maintenance, updates, and continued optimization. We want to be your long-term digital growth partner.'
    },
    {
      question: 'How much does a project typically cost?',
      answer: 'Investment varies based on scope and requirements, typically ranging from $5,000 to $25,000. We\'ll provide a detailed proposal after our free consultation and mockup review.'
    }
  ];

  return (
    <section className="py-20 bg-background-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
            Is This For You?
          </h2>
          <p className="text-xl font-body text-text-secondary">
            Common questions from professionals considering a strategic website transformation
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-background-neutral transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={20} className="text-primary" />
                  ) : (
                    <Plus size={20} className="text-primary" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-white/80 mb-6">
            Let's hop on a 15-minute call to discuss your specific situation and goals.
          </p>
          <button className="bg-accent-yellow text-accent-gray px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;