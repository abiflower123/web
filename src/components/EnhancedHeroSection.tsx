import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, size, variant, className = '' }) => {
  const baseClasses = "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "";
  const variantClasses = variant === "outline" ? "" : "";
  
  return (
    <a href={to} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  );
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, animation, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export default function EnhancedHeroSection() {
  return (
    <>
      <style>{`
        /* Logo Entrance Animation */
        @keyframes logo-entrance {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-15deg);
            filter: blur(10px);
          }
          60% {
            transform: scale(1.05) rotate(5deg);
            filter: blur(3px);
          }
          80% {
            transform: scale(0.98) rotate(-2deg);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        /* Logo Continuous Glow Pulse - Reduced glow */
        @keyframes logo-glow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.3));
          }
        }

        /* Badge Scale In Animation */
        @keyframes badge-scale-in {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          70% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* Text Box Fade and Slide Up */
        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        /* Button Slide from Left */
        @keyframes button-slide-left {
          0% {
            opacity: 0;
            transform: translateX(-40px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* Button Slide from Right */
        @keyframes button-slide-right {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* Background Animations */
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.02); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(10px, -10px) scale(1.05); opacity: 0.6; }
          50% { transform: translate(-8px, -20px) scale(0.95); opacity: 0.5; }
          75% { transform: translate(-12px, -10px) scale(1.03); opacity: 0.7; }
        }

        @keyframes floatTech {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateX(200%) skewX(-12deg); opacity: 0; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }

        /* Animation Classes */
        .animate-logo-entrance {
          animation: logo-entrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0s forwards;
        }

        .animate-logo-glow-pulse {
          animation: logo-glow-pulse 3s ease-in-out 1s infinite;
        }

        .animate-badge-entrance {
          opacity: 0;
          animation: badge-scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards,
                     bounce-slow 3s ease-in-out 1s infinite;
        }

        .animate-text-reveal {
          opacity: 0;
          animation: text-reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
        }

        .animate-button-slide-left {
          opacity: 0;
          animation: button-slide-left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s forwards;
        }

        .animate-button-slide-right {
          opacity: 0;
          animation: button-slide-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s forwards;
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 3s ease-in-out 1s infinite;
        }

        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 20s linear infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Main Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/t3.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-900/80 to-gray-900/85" />
          
          {/* Animated Gradient Accent Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-transparent to-orange-600/15 animate-gradient-flow" />
        </div>

        {/* Dynamic Mesh Gradient Orbs - Reduced glow */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-2xl animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-2xl animate-pulse-slow delay-500" />
        </div>

        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 z-10 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(0deg, rgba(249, 115, 22, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 20s linear infinite',
          }}
        />

        {/* Floating Tech Elements - Reduced opacity */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: i % 2 === 0 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 197, 253, 0.2))' 
                  : 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(251, 146, 60, 0.2))',
                animation: `floatParticle ${10 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <AnimatedSection className="text-center max-w-6xl mx-auto">
            {/* Logo Container with Proper Spacing */}
            <div className="flex flex-col items-center justify-center relative">
              <div className="relative mb-8">
                
                {/* Logo Container with Entrance Animation */}
                <div className="relative group">
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Since 2017 Badge - Positioned at top of logo - Responsive */}
                  <div className="absolute left-1/2 -top-10 md:-top-12 lg:-top-14 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-bold animate-badge-entrance z-20 shadow-xl backdrop-blur-sm border-2 border-white/20">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Since 2017
                    </div>
                  </div>
                  
                  <div className="relative animate-logo-entrance hover:scale-105 transition-transform duration-300 pt-6">
                    <div className="relative">
                      {/* Enhanced Shine Effect - Reduced opacity */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
                      
                      {/* Logo with Glow Pulse Animation - Reduced glow */}
                      <div className="animate-logo-glow-pulse">
                        <img 
                          src="/logo.png" 
                          alt="Smark Solutions Logo" 
                          className="h-80 w-80 md:h-90 md:w-90 object-contain relative z-10"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.getElementById('logo-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                      </div>
                      
                      {/* Fallback Logo */}
                      <div id="logo-fallback" className="hidden relative z-10 h-80 w-80 md:h-90 md:w-90 animate-logo-glow-pulse">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/80 via-blue-500/80 to-orange-500/80 shadow-xl" />
                        <div className="relative h-full w-full flex items-center justify-center bg-gray-900/90 rounded-full m-1">
                          <div className="text-6xl md:text-7xl font-bold text-white">
                            SS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tagline - Reduced spacing and padding */}
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white font-medium px-4 animate-text-reveal backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl mb-8">
                A leading IT solutions and skill-training company delivering innovative
                <span className="text-orange-300 font-semibold"> software services </span>
                and empowering students with
                <span className="text-blue-300 font-semibold"> industry-ready skills</span>.
              </p>
            </div>
            
            {/* CTA Buttons with Slide Animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                to="/contact" 
                size="lg" 
                className="animate-button-slide-left relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 border-white/20"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine" />
                <span className="relative flex items-center text-lg font-semibold">
                  Get in Touch
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/services" 
                size="lg" 
                variant="outline"
                className="animate-button-slide-right border-2 border-blue-400 text-white bg-blue-500/15 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 backdrop-blur-md"
              >
                <span className="flex items-center text-lg font-semibold">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Our Services
                </span>
              </Button>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-8 h-12 border-2 border-blue-400/50 rounded-full flex justify-center backdrop-blur-md bg-white/5 shadow-lg">
            <div className="w-1.5 h-4 bg-blue-400 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </section>
    </>
  );
}