import { useRef, useState, useCallback } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  darkMode?: boolean;
  style?: React.CSSProperties;
}

const InteractiveCard = ({ children, className = '', intensity = 0.5, darkMode = false, style }: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    
    if (cardRef.current && intensity > 0.5) {
      // Very subtle scale effect for high intensity cards only
      cardRef.current.style.transform = 'scale(1.02) translateZ(0)';
    }
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(1) translateZ(0)';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;