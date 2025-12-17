module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      animation: {
        // Existing animations
        'scale-in': 'scaleIn 1.5s ease-out',
        'pulse-slow': 'pulse 5s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-slow-reverse': 'spinReverse 18s linear infinite',
        'float-particle': 'floatParticle 20s ease-in-out infinite',
        'float-subtle': 'floatSubtle 8s ease-in-out infinite',
        'orbit-particle': 'orbitParticle 25s linear infinite',
        'move-background': 'moveBackground 60s linear infinite alternate',
        'gradient-flow': 'gradientFlow 10s ease infinite alternate',
        'gradient-border': 'gradientBorder 3s linear infinite',
        'gradient-move': 'gradientMove 15s ease infinite alternate',
        'text-slide-up': 'textSlideUp 0.6s ease-out forwards',
        'feature-slide': 'featureSlide 0.5s ease-out forwards',
        'progress-bar': 'progressBar 2s ease-out forwards',
        'moving-dots': 'movingDots 15s linear infinite',
        'float-line': 'floatLine 15s ease-in-out infinite',
        'float-code': 'floatCode 8s ease-in-out infinite',
        'float-code-delayed': 'floatCode 8s ease-in-out infinite 2s',
        
        // New animations
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'timeline-item': 'timelineItem 0.6s ease-out forwards',
        'text-gradient': 'textGradient 3s ease infinite alternate',
        'shine': 'shine 2s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        // Existing keyframes
        scaleIn: {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        orbitParticle: {
          '0%': { 
            transform: 'translate(-50%, -50%) rotate(0deg) translateX(var(--distance, 150px)) rotate(0deg)',
            opacity: '0.6'
          },
          '50%': { 
            opacity: '0.3'
          },
          '100%': { 
            transform: 'translate(-50%, -50%) rotate(360deg) translateX(var(--distance, 150px)) rotate(-360deg)',
            opacity: '0.6'
          },
        },
        moveBackground: {
          '0%': { 
            transform: 'scale(1) translateX(0) translateY(0)',
          },
          '100%': { 
            transform: 'scale(1.02) translateX(-10px) translateY(-5px)',
          },
        },
        floatParticle: {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
            opacity: '0.4'
          },
          '33%': { 
            transform: 'translateY(-15px) translateX(8px)',
            opacity: '0.6'
          },
          '66%': { 
            transform: 'translateY(8px) translateX(-4px)',
            opacity: '0.5'
          },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientBorder: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        gradientMove: {
          '0%': { transform: 'translateX(-10%) translateY(-10%)' },
          '100%': { transform: 'translateX(10%) translateY(10%)' },
        },
        textSlideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        featureSlide: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        progressBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        movingDots: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(5px) translateX(-5px)' },
        },
        floatLine: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatCode: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        
        // New keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(10px) rotate(-5deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        timelineItem: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        textGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        scrollIndicator: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '1000': '1000ms',
      },
    },
  },

  
  plugins: [],
}