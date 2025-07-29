import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';

const LoadingOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay ${progress >= 100 ? 'hidden' : ''}`}>
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Premium Logo Animation */}
        <div className="relative">
          <h1 className="text-6xl font-bold font-heading text-white tracking-tight animate-glow-pulse">
            OCLIQ
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-accent-gold/30 blur-2xl animate-morph"></div>
        </div>

        {/* Advanced Loading Spinner */}
        <div className="relative">
          <div className="loading-spinner"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="relative w-32 h-32">
          <Sparkles 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 text-accent-gold animate-float-3d" 
            style={{ animationDelay: '0s' }}
          />
          <Zap 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 text-secondary animate-float-3d" 
            style={{ animationDelay: '1s' }}
          />
          <Star 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 text-white animate-float-3d" 
            style={{ animationDelay: '2s' }}
          />
          <Sparkles 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 text-accent-gold animate-float-3d" 
            style={{ animationDelay: '3s' }}
          />
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-secondary to-accent-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-xl font-semibold text-white animate-glow-pulse">
            Crafting Your Million-Dollar Experience
          </p>
          <p className="text-sm text-white/80">
            {progress < 30 && "Initializing premium components..."}
            {progress >= 30 && progress < 60 && "Loading advanced animations..."}
            {progress >= 60 && progress < 90 && "Applying luxury effects..."}
            {progress >= 90 && "Almost ready..."}
          </p>
        </div>

        {/* Particle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float-3d"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
