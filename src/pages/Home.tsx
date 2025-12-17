import { ArrowRight, Code, Brain, GraduationCap, FolderKanban, Users, TrendingUp, CheckCircle, Sparkles, Zap, Target, Award } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import StatsCounter from '../components/home/StatsCounter';
import ContactForm from '../components/home/ContactForm';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const achievementsRef = useRef(null);

  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Designing',
      description: 'Professional website development with modern design, responsive layouts, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI / ML Solutions',
      description: 'Cutting-edge AI and machine learning solutions for automation and data-driven insights.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FolderKanban className="h-12 w-12" />,
      title: 'Student Projects',
      description: 'Comprehensive project development and guidance across various tech domains.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'Training Courses',
      description: 'Industry-focused training programs delivered by experienced professionals.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500',
      color: 'from-green-500 to-teal-400',
    },
  ];

  const achievements = [
    { number: 50, label: 'Projects Completed', suffix: '+', icon: <Target className="h-8 w-8" /> },
    { number: 200, label: 'Students Trained', suffix: '+', icon: <Users className="h-8 w-8" /> },
    { number: 15, label: 'Technology Domains', suffix: '+', icon: <Zap className="h-8 w-8" /> },
    { number: 5, label: 'Years Experience', suffix: '+', icon: <Award className="h-8 w-8" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          achievements.forEach((achievement, index) => {
            animateCounter(index, achievement.number);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (index: number, target: number) => {
    const duration = 2000;
    const steps = 60;
    const step = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCounters(prev => {
        const newCounters = [...prev];
        newCounters[index] = Math.floor(current);
        return newCounters;
      });
    }, duration / steps);
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section with Transparent Technology Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Transparent Technology Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Main Transparent Tech Background Image */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/t.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(1.2)',
            }}
          />
          
          {/* Multiple Layered Background Effects */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
              `,
            }}
          />
          
          {/* Gradient Overlay to blend with the tech image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-orange-50/30 dark:from-gray-900/50 dark:via-gray-800/60 dark:to-gray-900/50" />
          
          {/* Animated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.2) 25%, rgba(59, 130, 246, 0.2) 26%, transparent 27%, transparent 74%, rgba(249, 115, 22, 0.2) 75%, rgba(249, 115, 22, 0.2) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.2) 25%, rgba(59, 130, 246, 0.2) 26%, transparent 27%, transparent 74%, rgba(249, 115, 22, 0.2) 75%, rgba(249, 115, 22, 0.2) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={`bg-particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20 dark:from-blue-500/15 dark:to-orange-500/15"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animation: `floatParticle ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          
          {/* Additional floating tech elements */}
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-slow delay-500" />
          <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-2xl animate-float-slow delay-700" />
        </div>

        {/* Binary Code Animation Overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={`binary-${i}`}
              className="absolute font-mono text-blue-400 dark:text-cyan-300 text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatTech ${20 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.2,
              }}
            >
              {`${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}`}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Logo Container */}
            <div className="flex flex-col items-center justify-center mb-12 relative">
              <div className="relative mb-10">
                {/* Glowing Rings */}
                <div className="absolute -inset-12 rounded-full border-2 border-blue-400/40 dark:border-blue-500/35 animate-spin-slow" />
                <div className="absolute -inset-8 rounded-full border border-orange-400/50 dark:border-orange-500/45 animate-spin-slow-reverse" style={{ animationDuration: '15s' }} />
                
                {/* Logo Container */}
                <div className="relative group">
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/25 via-orange-500/25 to-orange-500/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative animate-scale-in hover:scale-105 transition-transform duration-500">
                    <div className="relative">
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine" />
                      
                      <img 
                        src="/logo.png" 
                        alt="Smark Solutions Logo" 
                        className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain relative z-10 drop-shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = document.getElementById('logo-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      
                      {/* Fallback Logo */}
                      <div id="logo-fallback" className="hidden relative z-10 h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 animate-gradient-border" />
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-pulse-slow">
                            SS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce-slow z-20 shadow-lg backdrop-blur-sm">
                    Since 2017
                  </div>
                </div>
              </div>
              
              {/* Company Name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
                Smark Solutions
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 backdrop-blur-sm bg-white/30 dark:bg-gray-900/40 p-6 rounded-2xl border border-white/30 dark:border-gray-700/40 shadow-xl">
                A leading IT solutions and skill-training company delivering innovative
                <span className="text-orange-500 font-semibold"> software services </span>
                and empowering students with
                <span className="text-blue-500 font-semibold"> industry-ready skills</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-400">
              <Button 
                to="/contact" 
                size="lg" 
                className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shine" />
                <span className="relative flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/services" 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/30 dark:bg-gray-900/40"
              >
                <span className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Our Services
                </span>
              </Button>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/40">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Rest of the code remains exactly the same... */}
      {/* Services Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-orange-50/30 dark:from-blue-900/10 dark:to-orange-900/5 animate-gradient-flow" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <AnimatedSection animation="fade-up" className="text-center mb-16">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
        <Sparkles className="h-5 w-5 text-orange-500" />
        <span className="text-orange-500 font-semibold">Our Expertise</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Our Core Services
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Comprehensive IT solutions and training programs designed to elevate your
        business and career
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {[
        {
          icon: <Code className="h-12 w-12" />,
          title: 'Web Designing',
          description: 'Professional website development with modern design, responsive layouts, and SEO optimization.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
          color: 'from-blue-500 to-cyan-400',
          path: '/services/web-designing', // Your existing route
        },
        {
          icon: <Brain className="h-12 w-12" />,
          title: 'AI / ML Solutions',
          description: 'Cutting-edge AI and machine learning solutions for automation and data-driven insights.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500',
          color: 'from-purple-500 to-pink-500',
          path: '/services/ai-ml', // Your route is /services/ai-ml
        },
        {
          icon: <FolderKanban className="h-12 w-12" />,
          title: 'Student Projects',
          description: 'Comprehensive project development and guidance across various tech domains.',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500',
          color: 'from-orange-500 to-yellow-500',
          path: '/services/student-projects', // Your existing route
        },
        {
          icon: <GraduationCap className="h-12 w-12" />,
          title: 'Training Courses',
          description: 'Industry-focused training programs delivered by experienced professionals.',
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500',
          color: 'from-green-500 to-teal-400',
          path: '/services/courses', // Your route is /services/courses
        },
        // Note: You also have an "Internship" route in your App.tsx
        // If you want to include it in the services section, you can add:
        /*
        {
          icon: <Briefcase className="h-12 w-12" />,
          title: 'Internship Programs',
          description: 'Hands-on internship opportunities for students to gain real-world experience.',
          image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=500',
          color: 'from-indigo-500 to-purple-500',
          path: '/services/internship',
        }
        */
      ].map((service, index) => (
        <AnimatedSection
          key={index}
          animation="fade-up"
          delay={index * 150}
        >
          <div className="group relative h-full">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
            
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden border border-gray-100 dark:border-gray-700">
              {/* Service Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/20 animate-pulse-slow`} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Icon Overlay */}
                <div className="absolute -top-6 right-6 bg-gradient-to-br from-blue-600 to-blue-500 text-white p-4 rounded-xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                <Button 
                  to={service.path}
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative flex items-center justify-center">
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
      {/* About Section */}
<section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
  {/* Geometric Pattern */}
  <div className="absolute inset-0 z-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(45deg, #3b82f6 1px, transparent 1px),
        linear-gradient(-45deg, #3b82f6 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }} />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Enhanced Image with Overlay Text */}
      <AnimatedSection animation="slide-left" className="relative">
        <div className="relative group">
          {/* Floating Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl animate-float-slow" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl animate-float-slow delay-1000" />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 rounded-2xl animate-gradient-border" />
            
            <div className="relative bg-white dark:bg-gray-800 p-1 rounded-2xl">
              {/* Professional About Us Image with Text Overlay */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="About Us - Smark Solutions Team"
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlay Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-orange-600/60 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/* About Us Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white font-semibold text-sm uppercase tracking-widest">
                        Our Story
                      </span>
                    </div>
                    
                    {/* Main Text */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      About Us
                    </h3>
                    
                    <div className="h-1 w-20 bg-gradient-to-r from-white to-orange-300 rounded-full mx-auto mb-6" />
                    
                    <p className="text-white/90 text-lg max-w-md mx-auto font-light leading-relaxed">
                      Innovating since 2017, empowering businesses and students with cutting-edge technology solutions
                    </p>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm animate-float-slow">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>50+ Projects</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm animate-float-slow delay-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span>8 Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Badges */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm text-green-400 px-4 py-2 rounded-lg text-sm font-mono border-l-4 border-green-500 animate-slide-in-left z-20">
                {'<Innovation />'}
              </div>
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm text-blue-400 px-4 py-2 rounded-lg text-sm font-mono border-l-4 border-blue-500 animate-slide-in-right delay-300 z-20">
                {'<Technology />'}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Text Content - Remains the same */}
      <AnimatedSection animation="slide-right" className="space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Our Journey
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building <span className="text-blue-500">Future</span> Together
          </h2>
        </div>
        
        {/* Timeline */}
        <div className="space-y-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-orange-500 rounded-full" />
          
          {/* Timeline Items */}
          <div className="relative pl-8 animate-timeline-item">
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2017 - Shiva Technology Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We started by providing technical solutions like building websites and software applications.
            </p>
          </div>
          
          <div className="relative pl-8 animate-timeline-item delay-300">
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white dark:border-gray-800" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2025 - Smark Solutions Launch</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expanded to assist students and research scholars with PhD guidance, projects, internships, and training.
            </p>
          </div>
          
          <div className="relative pl-8 animate-timeline-item delay-600">
            <div className="absolute left-0 top-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Today - Your Trusted Partner</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Committed to delivering excellence through expertise, helping businesses thrive and students succeed.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {[
            { text: 'Industry Expertise', icon: <Users className="h-6 w-6" />, color: 'text-blue-500' },
            { text: 'Latest Tech Stack', icon: <Code className="h-6 w-6" />, color: 'text-blue-400' },
            { text: 'Student Focused', icon: <GraduationCap className="h-6 w-6" />, color: 'text-orange-500' },
            { text: 'Quality First', icon: <CheckCircle className="h-6 w-6" />, color: 'text-orange-400' },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-100 dark:border-gray-600 transform hover:-translate-y-1 transition-all duration-300 animate-feature-slide"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color}/10 ${feature.color}/20`}>
                <div className={feature.color}>
                  {feature.icon}
                </div>
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <Button 
            to="/about" 
            variant="outline" 
            size="lg"
            className="group bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-500 text-blue-500 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all duration-300"
          >
            <span className="flex items-center">
              Discover Our Journey
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>
      {/* Achievements Section */}
      <section 
        ref={achievementsRef}
        className="relative py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-move" />
          
          {/* Floating Numbers */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={`number-${i}`}
                className="absolute text-6xl font-bold text-blue-500 dark:text-blue-400 animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${20 + Math.random() * 20}s`,
                }}
              >
                {Math.floor(Math.random() * 9) + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <span className="text-orange-500 font-semibold">Milestones</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that speak for our excellence and commitment to quality
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 200}
              >
                <div className="group relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-100 dark:border-gray-700">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <div className="text-blue-500 dark:text-blue-400">
                        {achievement.icon}
                      </div>
                    </div>
                    
                    {/* Counter */}
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 bg-clip-text text-transparent mb-2">
                      {isVisible ? counters[index] : 0}
                      <span className="text-3xl">{achievement.suffix}</span>
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      {achievement.label}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 rounded-full animate-progress-bar"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Stats Counter */}
          <AnimatedSection animation="fade-up" delay={600} className="mt-16">
            <StatsCounter />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #f97316 0%, transparent 50%)
            `,
          }} />
        </div>

        {/* Floating Contact Icons */}
        <div className="absolute inset-0 z-0">
          {['✉️', '📱', '💬', '📍'].map((icon, i) => (
            <div
              key={`contact-icon-${i}`}
              className="absolute text-2xl animate-float-slow"
              style={{
                left: `${10 + i * 25}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-semibold">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can help you succeed in the digital world.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-white/95 dark:bg-gray-700/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-600">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}