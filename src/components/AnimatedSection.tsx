import React, { ReactNode } from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  parallax = false,
  parallaxSpeed = 0.5,
}) => {
  const { elementRef: scrollRef, isVisible } = useScrollAnimation();
  const { elementRef: parallaxRef, offset } = useParallax(parallaxSpeed);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;
      case 'fade-in':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide-left':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`;
      case 'slide-right':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`;
      case 'scale-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      default:
        return baseClasses;
    }
  };

  const combinedRef = (node: HTMLElement | null) => {
    if (scrollRef) scrollRef.current = node;
    if (parallax && parallaxRef) parallaxRef.current = node;
  };

  const parallaxStyle = parallax ? {
    transform: `translateY(${offset}px)`,
  } : {};

  return (
    <div
      ref={combinedRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        ...parallaxStyle,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
