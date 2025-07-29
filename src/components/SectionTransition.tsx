import React, { useEffect, useRef } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'reveal' | 'morph';
  direction?: 'up' | 'down' | 'left' | 'right';
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  variant = 'fade',
  direction = 'up'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransitionClasses = () => {
    const baseClasses = 'section-transition';
    
    switch (variant) {
      case 'slide':
        return `${baseClasses} section-slide-${direction}`;
      case 'reveal':
        return `${baseClasses} section-reveal`;
      case 'morph':
        return `${baseClasses} section-morph`;
      default:
        return `${baseClasses} section-fade`;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${getTransitionClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
