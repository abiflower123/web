import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 500);
          }, 300);
          return 100;
        }
        return prev + 3;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Floating Balls */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: `radial-gradient(circle at 30% 30%, 
                ${Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'} 0%, 
                ${Math.random() > 0.5 ? '#60a5fa' : '#a855f7'} 50%, 
                transparent 70%)`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Logo with Spinning Circular Line */}
      <div className="relative z-10">
        {/* Outer Glow Effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
        
        {/* Main Container */}
        <div className="relative w-64 h-64">
          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              background: `conic-gradient(
                from ${progress * 3.6}deg,
                transparent 0deg,
                #3b82f6 180deg,
                #8b5cf6 270deg,
                transparent 360deg
              ) border-box`,
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              animation: 'spin 3s linear infinite',
            }}
          >
            {/* Ring Glow */}
            <div className="absolute inset-[-2px] rounded-full border-2 border-transparent"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6) border-box',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                filter: 'blur(3px)',
                opacity: 0.4,
              }}
            />
          </div>

          {/* Middle Ring (Reverse Spin) */}
          <div className="absolute inset-6 rounded-full border border-transparent"
            style={{
              background: `conic-gradient(
                from ${-progress * 3.6}deg,
                transparent 0deg,
                #60a5fa 90deg,
                #a855f7 270deg,
                transparent 360deg
              ) border-box`,
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              animation: 'spin 2s linear infinite reverse',
            }}
          />

          {/* Orbiting Dots */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(112px) rotate(-${i * 60}deg)`,
                animation: `orbit 4s linear infinite`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: '0 0 6px rgba(59, 130, 246, 0.6)',
              }}
            />
          ))}

          {/* Logo Center */}
          <div className="absolute inset-12 flex items-center justify-center">
            <div className="relative w-32 h-32">
              {/* Logo Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-md border border-white/20 shadow-2xl" />
              
              {/* Logo Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg animate-pulse" />
              
              {/* Logo */}
              <div className="relative w-full h-full rounded-full flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Smark Solutions" 
                  className="w-20 h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center">
                  <Sparkles className="w-20 h-20 text-white" />
                </div>
              </div>

              {/* Inner Spinning Ring */}
              <div className="absolute -inset-4 rounded-full border border-transparent"
                style={{
                  background: `conic-gradient(
                    from ${progress * 7.2}deg,
                    transparent 0deg,
                    rgba(59, 130, 246, 0.5) 120deg,
                    rgba(139, 92, 246, 0.5) 240deg,
                    transparent 360deg
                  ) border-box`,
                  mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  animation: 'spin 1.5s linear infinite',
                }}
              />
            </div>
          </div>

          {/* Progress Dots */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                style={{
                  animation: `pulse 1.2s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Percentage */}
        <div className="mt-8 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            {progress}%
          </div>
          <div className="text-sm text-white/70 font-medium mt-2">
            Loading...
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(112px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(112px) rotate(-360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}