import { useEffect, useState, useCallback } from 'react';
import { 
  Brain, Zap, Sparkles, Star, Rocket, Heart, Target, Cloud, 
  Shield, BarChart3, Settings, Users, Eye, Briefcase
} from 'lucide-react';

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);

  const updateScrollY = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [updateScrollY]);

  // Define floating elements for different sections
  const floatingElements = [
    // Hero section elements
    {
      icon: Sparkles,
      section: 'hero',
      left: '10%',
      top: '20%',
      size: 'w-6 h-6',
      color: 'text-yellow-400',
      speed: 0.3,
      delay: 0
    },
    {
      icon: Star,
      section: 'hero',
      left: '85%',
      top: '30%',
      size: 'w-5 h-5',
      color: 'text-yellow-500',
      speed: 0.4,
      delay: 500
    },
    {
      icon: Zap,
      section: 'hero',
      left: '15%',
      top: '70%',
      size: 'w-4 h-4',
      color: 'text-yellow-600',
      speed: 0.2,
      delay: 1000
    },
    {
      icon: Rocket,
      section: 'hero',
      left: '90%',
      top: '60%',
      size: 'w-5 h-5',
      color: 'text-orange-400',
      speed: 0.35,
      delay: 1500
    },

    // About section elements
    {
      icon: Brain,
      section: 'about',
      left: '8%',
      top: '25%',
      size: 'w-7 h-7',
      color: 'text-yellow-500',
      speed: 0.25,
      delay: 0
    },
    {
      icon: Target,
      section: 'about',
      left: '92%',
      top: '35%',
      size: 'w-6 h-6',
      color: 'text-yellow-600',
      speed: 0.3,
      delay: 800
    },
    {
      icon: Cloud,
      section: 'about',
      left: '12%',
      top: '80%',
      size: 'w-5 h-5',
      color: 'text-blue-400',
      speed: 0.4,
      delay: 400
    },
    {
      icon: Shield,
      section: 'about',
      left: '88%',
      top: '75%',
      size: 'w-6 h-6',
      color: 'text-green-400',
      speed: 0.2,
      delay: 1200
    },

    // Careers section elements
    {
      icon: Briefcase,
      section: 'careers',
      left: '5%',
      top: '30%',
      size: 'w-6 h-6',
      color: 'text-yellow-500',
      speed: 0.3,
      delay: 0
    },
    {
      icon: Users,
      section: 'careers',
      left: '95%',
      top: '40%',
      size: 'w-7 h-7',
      color: 'text-blue-500',
      speed: 0.25,
      delay: 600
    },
    {
      icon: Heart,
      section: 'careers',
      left: '10%',
      top: '75%',
      size: 'w-5 h-5',
      color: 'text-pink-400',
      speed: 0.35,
      delay: 300
    },

    // Contact section elements
    {
      icon: Settings,
      section: 'contact',
      left: '7%',
      top: '20%',
      size: 'w-6 h-6',
      color: 'text-gray-400',
      speed: 0.2,
      delay: 0
    },
    {
      icon: BarChart3,
      section: 'contact',
      left: '93%',
      top: '30%',
      size: 'w-5 h-5',
      color: 'text-purple-400',
      speed: 0.4,
      delay: 700
    },
    {
      icon: Eye,
      section: 'contact',
      left: '15%',
      top: '85%',
      size: 'w-4 h-4',
      color: 'text-cyan-400',
      speed: 0.3,
      delay: 1000
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        
        // Calculate scroll-based movement
        const scrollOffset = scrollY * element.speed;
        const rotationOffset = (scrollY * element.speed * 0.5) % 360;
        
        return (
          <div
            key={index}
            className="absolute opacity-60 will-change-transform"
            style={{
              left: element.left,
              top: element.top,
              transform: `translateY(${scrollOffset}px) rotate(${rotationOffset}deg) translateZ(0)`,
              transition: 'opacity 0.3s ease-out',
              animationDelay: `${element.delay}ms`,
            }}
          >
            <div className="animate-float-fast">
              <IconComponent 
                className={`${element.size} ${element.color} drop-shadow-sm`}
              />
            </div>
          </div>
        );
      })}
      
      {/* Additional decorative elements that move with scroll */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div
          className="absolute w-3 h-3 bg-yellow-400/50 rounded-full blur-sm"
          style={{
            left: '20%',
            top: '15%',
            transform: `translateY(${scrollY * 0.15}px) translateZ(0)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-orange-400/60 rounded-full blur-sm"
          style={{
            left: '75%',
            top: '25%',
            transform: `translateY(${scrollY * 0.25}px) translateZ(0)`,
          }}
        />
        <div
          className="absolute w-4 h-4 bg-blue-400/40 rounded-full blur-sm"
          style={{
            left: '30%',
            top: '60%',
            transform: `translateY(${scrollY * 0.2}px) translateZ(0)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-purple-400/50 rounded-full blur-sm"
          style={{
            left: '80%',
            top: '70%',
            transform: `translateY(${scrollY * 0.35}px) translateZ(0)`,
          }}
        />
        
        {/* Floating lines */}
        <div
          className="absolute w-12 h-0.5 bg-gradient-to-r from-yellow-400/40 to-transparent"
          style={{
            left: '25%',
            top: '40%',
            transform: `translateY(${scrollY * 0.1}px) rotate(${(scrollY * 0.1) % 360}deg) translateZ(0)`,
          }}
        />
        <div
          className="absolute w-8 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent"
          style={{
            left: '70%',
            top: '55%',
            transform: `translateY(${scrollY * 0.3}px) rotate(${(scrollY * 0.2) % 360}deg) translateZ(0)`,
          }}
        />
      </div>
    </div>
  );
};

export default FloatingElements;