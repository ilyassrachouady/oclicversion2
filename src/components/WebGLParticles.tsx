import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  size: number;
  color: [number, number, number];
}

const WebGLParticles: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      z: Math.random() * 100,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      vz: (Math.random() - 0.5) * 0.5,
      life: Math.random() * 100,
      maxLife: 100 + Math.random() * 100,
      size: 1 + Math.random() * 3,
      color: [
        99 + Math.random() * 50,   // Blue-ish
        102 + Math.random() * 50,  // Blue-ish
        241 + Math.random() * 14   // Blue-ish
      ]
    });

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particlesRef.current.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.life++;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.1;
          particle.vy += (dy / distance) * force * 0.1;
        }

        // Apply some friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.vz *= 0.99;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.offsetWidth ||
            particle.y < 0 || particle.y > canvas.offsetHeight ||
            particle.life > particle.maxLife) {
          particlesRef.current[index] = createParticle();
          return;
        }

        // Render particle with 3D effect
        const scale = 1 + particle.z / 100;
        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.8;
        
        // Create gradient for 3D effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * scale
        );
        gradient.addColorStop(0, `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, 1)`);
        gradient.addColorStop(1, `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * scale, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const alpha = (120 - distance) / 120;
            ctx.globalAlpha = alpha * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: 0.6
      }}
    />
  );
};

export default WebGLParticles;
