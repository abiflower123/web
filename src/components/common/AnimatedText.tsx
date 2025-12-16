import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale';
}

export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  staggerDelay = 50,
  animation = 'fade-up' 
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const animations = {
    'fade-up': 'translate-y-4 opacity-0',
    'slide-left': 'translate-x-4 opacity-0',
    'slide-right': '-translate-x-4 opacity-0',
    'scale': 'scale-95 opacity-0',
  };

  return (
    <div className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animations[animation]
          }`}
          style={{
            transitionDelay: `${delay + index * staggerDelay}ms`,
            animation: isVisible ? `textGlow 2s ease-in-out ${index * 0.1}s infinite alternate` : 'none',
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </div>
  );
}