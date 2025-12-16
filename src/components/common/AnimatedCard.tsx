import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  hoverEffect?: boolean;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  index = 0,
  hoverEffect = true 
}: AnimatedCardProps) {
  return (
    <div
      className={`relative transition-all duration-500 ease-out ${
        hoverEffect ? 'hover:-translate-y-2 hover:shadow-2xl' : ''
      } ${className}`}
      style={{
        animationDelay: `${delay + index * 100}ms`,
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `cardReveal 0.6s ease-out forwards ${delay + index * 100}ms`,
      }}
    >
      {/* Hover Border Animation */}
      {hoverEffect && (
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-blue-500/10 group-hover:to-blue-500/20 transition-all duration-500 blur-sm" />
      )}
      
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
        {children}
      </div>
    </div>
  );
}