import AnimatedSection from '../components/common/AnimatedSection';
import { Target, Users, Lightbulb, Award, Sparkles, Zap, Brain, Code, GraduationCap, BookOpen, Globe, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import Button from '../components/common/Button';

export default function About() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project and training program we deliver.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Working together with our clients to achieve their goals and vision.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to provide innovative solutions.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'Delivering top-notch quality in all our services and training programs.',
      color: 'from-green-500 to-green-600',
    },
  ];

  const teamHighlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Expert Professionals',
      description: 'Years of industry experience',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Latest Technologies',
      description: 'Cutting-edge tech stack',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Student Mentors',
      description: 'Passionate educators',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Research Experts',
      description: 'PhD guidance specialists',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Standards',
      description: 'International quality',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Trusted Partner',
      description: 'Reliable & dependable',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Banner Section - Enhanced with Transparent Background Image */}
<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-8">
        {/* Transparent Technology Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Main Transparent Tech Background Image */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url('/ab.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
          
          {/* Multiple Layered Background Effects */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
              `,
            }}
          />
          
          {/* Gradient Overlay to blend with the tech image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-orange-50/60 dark:from-gray-900/70 dark:via-gray-800/80 dark:to-gray-900/70" />
          
          {/* Dark Mode Specific Overlay */}
          <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-gray-900/50 via-gray-800/60 to-gray-900/50" />
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={`hero-particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-orange-400/30 dark:from-blue-500/25 dark:to-orange-500/25"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animation: `floatParticle ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          
          {/* Additional floating tech elements */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-float-slow delay-500" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 rounded-full blur-2xl animate-float-slow delay-700" />
        </div>

        {/* Binary Code Animation Overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(15)].map((_, i) => (
            <div
              key={`binary-hero-${i}`}
              className="absolute font-mono text-blue-500 dark:text-cyan-400 text-sm md:text-base"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatTech ${20 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.3,
              }}
            >
              {`${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}`}
            </div>
          ))}
        </div>

        {/* Tech Circuit Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23038afc" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E')`,
            backgroundSize: '150px 150px',
          }}
        />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Header with Enhanced Design */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-orange-100/80 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
              <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Our Journey Since 2017
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Empowering <span className="text-blue-500 font-semibold">businesses</span> with innovative solutions
              and <span className="text-orange-500 font-semibold">students</span> with industry-ready skills since 2017
            </p>
            
            {/* Animated Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
              {[
                { number: '8+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '50+', label: 'Projects Completed' },
                { number: '200+', label: 'Students Trained' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center transform hover:scale-110 transition-transform duration-300 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
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

      {/* Who We Are Section - Enhanced */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #f97316 0%, transparent 50%)
            `,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`who-particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-orange-400/10"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 4) * 15}%`,
                width: `${Math.random() * 5 + 3}px`,
                height: `${Math.random() * 5 + 3}px`,
                animation: `floatParticle ${20 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <span className="text-blue-500 font-semibold">Our Identity</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Who We Are
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Animated Image */}
              <AnimatedSection animation="slide-left" className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-2xl animate-gradient-border" />
                    
                    <div className="relative bg-white dark:bg-gray-800 p-1 rounded-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                        alt="Smark Solutions Team"
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
                      />
                      
                      {/* Floating Tech Icons */}
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-green-400 px-4 py-2 rounded-lg text-sm font-mono border-l-4 border-green-500 animate-slide-in-left">
                        {'<Team />'}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-blue-400 px-4 py-2 rounded-lg text-sm font-mono border-l-4 border-blue-500 animate-slide-in-right delay-300">
                        {'<Passion />'}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Enhanced Text Content */}
              <AnimatedSection animation="slide-right" className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-text-slide-up backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-4 rounded-xl">
                    <span className="font-semibold text-blue-500">Smark Solutions</span> is a dynamic and evolving organization 
                    that specializes in providing comprehensive IT solutions and professional skill training. 
                    We are committed to helping businesses thrive in the digital age.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-text-slide-up delay-100 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-4 rounded-xl">
                    Our journey began in 2017 with <span className="font-semibold text-orange-500">Shiva Technology Solutions</span>, 
                    where we focused on delivering technical solutions including website development, 
                    software applications, and enterprise systems.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-text-slide-up delay-200 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-4 rounded-xl">
                    Today, we stand as a trusted partner for both businesses seeking innovative IT solutions 
                    and students aspiring to excel in their academic and professional journeys.
                  </p>
                </div>

                {/* Timeline Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { year: '2017', event: 'Founded Shiva Tech', color: 'bg-blue-500' },
                    { year: '2020', event: 'Expanded Services', color: 'bg-blue-400' },
                    { year: '2023', event: 'Student Programs', color: 'bg-orange-500' },
                    { year: '2025', event: 'Smark Solutions', color: 'bg-orange-400' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-700/80 dark:to-gray-800/80 border border-gray-100/50 dark:border-gray-600/50 transform hover:-translate-y-1 transition-all duration-300 animate-feature-slide backdrop-blur-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-3 h-3 ${item.color} rounded-full mb-2 animate-pulse`} />
                      <div className="font-bold text-gray-900 dark:text-white">{item.year}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.event}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          {['</>', '{ }', '()', '[]', '=>', ';'].map((symbol, i) => (
            <div
              key={`tech-symbol-${i}`}
              className="absolute text-3xl font-mono text-blue-500 animate-float-slow"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
              <Zap className="h-5 w-5 text-orange-500" />
              <span className="text-orange-500 font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive services designed to meet diverse needs of businesses and students
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                title: 'IT Software Solutions',
                description: 'We develop attractive, effective websites, e-commerce platforms, ERP systems, mobile applications, and custom software solutions using latest technologies.',
                icon: <Code className="h-8 w-8" />,
                color: 'from-blue-500 to-blue-600',
                animation: 'slide-right',
              },
              {
                title: 'Skill Training & Development',
                description: 'Comprehensive training in programming, full-stack web development, AI/ML by experienced professionals working on real-time projects.',
                icon: <GraduationCap className="h-8 w-8" />,
                color: 'from-purple-500 to-purple-600',
                animation: 'slide-left',
              },
              {
                title: 'Student Projects & Internships',
                description: 'Quality guidance for main/mini projects and internships with hands-on experience working alongside experienced professionals.',
                icon: <BookOpen className="h-8 w-8" />,
                color: 'from-orange-500 to-orange-600',
                animation: 'slide-right',
              },
              {
                title: 'PhD Guidance & Research Support',
                description: 'Complete research assistance from admission to thesis preparation, including topic selection and journal publications.',
                icon: <Brain className="h-8 w-8" />,
                color: 'from-green-500 to-green-600',
                animation: 'slide-left',
              },
            ].map((service, index) => (
              <AnimatedSection key={index} animation={service.animation} delay={index * 200}>
                <div className="group relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 dark:border-gray-700/50">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="mt-6">
                          <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-full animate-progress-bar"
                              style={{ animationDelay: `${index * 0.3}s` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section - Enhanced */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, #3b82f6 1px, transparent 1px),
              linear-gradient(-45deg, #f97316 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-blue-500 font-semibold">Meet Our Experts</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-gradient-to-br from-blue-50/90 to-orange-50/90 dark:from-gray-700/90 dark:to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100/50 dark:border-gray-700/50">
                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                      Our team comprises highly qualified and experienced professionals who bring
                      together years of industry expertise and technical knowledge. Each member is
                      passionate about delivering excellence and committed to helping our clients
                      and students achieve their goals.
                    </p>
                  </div>
                  
                  {/* Team Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-orange-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100/50 dark:border-gray-700/50">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-orange-500/10 group-hover:scale-110 transition-transform duration-300">
                              <div className="text-blue-500 dark:text-blue-400">
                                {highlight.icon}
                              </div>
                            </div>
                            <div className="text-left">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                {highlight.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center mt-12">
                    <Button 
                      to="/contact" 
                      className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                    >
                      <span className="flex items-center">
                        Join Our Team
                        <Sparkles className="ml-2 h-5 w-5" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-move" />
          
          {/* Floating Values */}
          <div className="absolute inset-0 opacity-10">
            {['E', 'C', 'I', 'Q'].map((letter, i) => (
              <div
                key={`value-letter-${i}`}
                className="absolute text-8xl font-bold text-blue-500 dark:text-blue-400 animate-float-slow"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${30 + (i % 2) * 20}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${20 + i * 3}s`,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
              <Target className="h-5 w-5 text-orange-500" />
              <span className="text-orange-500 font-semibold">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 150}>
                <div className="group relative h-full">
                  {/* Card Hover Effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center h-full border border-gray-100/50 dark:border-gray-700/50">
                    {/* Icon with Animation */}
                    <div className={`inline-flex items-center justify-center p-5 rounded-xl bg-gradient-to-br ${value.color} mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float`}>
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {value.description}
                    </p>
                    
                    {/* Animated Progress Bar */}
                    <div className="mt-6">
                      <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-full animate-progress-bar"
                          style={{ animationDelay: `${index * 0.4}s` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mission Statement */}
          <AnimatedSection animation="fade-up" delay={600} className="mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100/50 dark:border-gray-600/50">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
                      <Award className="h-6 w-6 text-blue-500 animate-spin-slow" />
                      <span className="text-blue-500 font-semibold text-lg">Our Mission</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
                      To empower businesses with innovative solutions and equip students with 
                      <span className="text-blue-500"> industry-ready skills</span> that drive 
                      <span className="text-orange-500"> success</span> in the digital era.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}