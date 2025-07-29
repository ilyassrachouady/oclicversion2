import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';

const FloatingAction = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    { icon: MessageCircle, label: 'Chat', color: 'from-secondary to-accent-gold' },
    { icon: Phone, label: 'Call', color: 'from-accent-gold to-secondary' },
    { icon: Mail, label: 'Email', color: 'from-primary to-secondary' },
  ];

  return (
    <>
      {/* Main Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          {/* Expanded Action Items */}
          {isExpanded && (
            <div className="absolute bottom-20 right-0 space-y-4">
              {actions.map((action, index) => (
                <div
                  key={action.label}
                  className={`floating-action-item opacity-0 animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    className={`w-14 h-14 bg-gradient-to-r ${action.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group magnetic-element card-3d`}
                  >
                    <action.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {action.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`floating-action magnetic-element ${isExpanded ? 'rotate-45' : ''}`}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 magnetic-element card-3d animate-slide-up"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}

      <style jsx>{`
        .floating-action-item {
          position: relative;
          animation: slideUp 0.3s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default FloatingAction;
