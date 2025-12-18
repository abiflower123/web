import { Code, Brain, GraduationCap, FolderKanban, Users, BookOpen, Sparkles, Zap, Target, Award, CheckCircle, Clock, Globe, Shield } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function Services() {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="h-16 w-16" />,
      title: 'Web Designing',
      description: 'Professional website development with modern design, responsive layouts and seamless user experience. We create websites that drive results.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
      link: '/services/web-designing',
      color: 'from-blue-500 to-blue-600',
      stats: ['98%', '24/7', '50+'],
      statLabels: ['Satisfaction', 'Support', 'Projects'],
    },
    {
      icon: <Brain className="h-16 w-16" />,
      title: 'AI / ML Solutions',
      description: 'Cutting-edge Artificial Intelligence and Machine Learning solutions to automate processes and gain valuable insights from your data.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      link: '/services/ai-ml',
      color: 'from-purple-500 to-purple-600',
      stats: ['95%', 'Custom', '15+'],
      statLabels: ['Accuracy', 'Solutions', 'Models'],
    },
    {
      icon: <FolderKanban className="h-16 w-16" />,
      title: 'Student Projects',
      description: 'Comprehensive project development and guidance for students across various disciplines with quality support and mentoring.',
      features: ['Main Projects', 'Mini Projects', 'Research Projects', 'Technical Guidance'],
      link: '/services/student-projects',
      color: 'from-orange-500 to-orange-600',
      stats: ['200+', '100%', 'A+'],
      statLabels: ['Students', 'Guidance', 'Grades'],
    },
    {
      icon: <Users className="h-16 w-16" />,
      title: 'Internship Programs',
      description: 'Industry-focused internship programs providing hands-on experience with real-time projects and direct mentoring by professionals.',
      features: ['Live Projects', 'Professional Mentoring', 'Certificate', 'Industry Exposure'],
      link: '/services/internship',
      color: 'from-green-500 to-green-600',
      stats: ['6+', 'Live', 'Certified'],
      statLabels: ['Months', 'Projects', 'Interns'],
    },
    {
      icon: <BookOpen className="h-16 w-16" />,
      title: 'Training Courses',
      description: 'Professional training courses delivered by experienced  working professionals covering latest technologies.',
      features: ['Expert Trainers', 'Practical Learning', 'Updated Curriculum', 'Certification'],
      link: '/services/courses',
      color: 'from-red-500 to-red-600',
      stats: ['50+', 'Hands-on', 'Industry'],
      statLabels: ['Courses', 'Training', 'Experts'],
    },
    {
      icon: <GraduationCap className="h-16 w-16" />,
      title: 'PhD Guidance',
      description: 'Complete assistance for research scholars from admission to thesis submission including topic selection and paper publication.',
      features: ['Topic Selection', 'Research Support', 'Paper Writing', 'Thesis Preparation'],
      link: '/contact',
      color: 'from-indigo-500 to-indigo-600',
      stats: ['100%', 'Journals', 'Support'],
      statLabels: ['Guidance', 'Publications', 'End-to-End'],
    },
  ];

  const benefits = [
    { icon: <Target className="h-8 w-8" />, title: 'Expert Team', description: 'Highly qualified and experienced professionals' },
    { icon: <CheckCircle className="h-8 w-8" />, title: 'Quality Service', description: 'Top-notch quality in every project' },
    { icon: <Shield className="h-8 w-8" />, title: 'Affordable Pricing', description: 'Cost-effective without compromising quality' },
    { icon: <Clock className="h-8 w-8" />, title: 'On-Time Delivery', description: 'Strict adherence to deadlines' },
    { icon: <Globe className="h-8 w-8" />, title: 'Latest Technologies', description: 'Cutting-edge tech stack' },
    { icon: <Award className="h-8 w-8" />, title: 'Certified Trainers', description: 'Industry-certified professionals' },
  ];

  useEffect(() => {
    // Initialize any service page specific animations
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Banner Section - Enhanced with Transparent Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-8">
        {/* Transparent Technology Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Main Transparent Tech Background Image */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url('/o.jpeg')",
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
                Comprehensive Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              Our Services
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Empowering <span className="text-blue-500 font-semibold">businesses</span> with innovative solutions
              and <span className="text-orange-500 font-semibold">students</span> with industry-ready skills
            </p>
            
            {/* Animated Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
              {[
                { number: '6+', label: 'Service Categories', icon: <Code className="h-8 w-8" /> },
                { number: '50+', label: 'Projects Completed', icon: <CheckCircle className="h-8 w-8" /> },
                { number: '15+', label: 'Technologies', icon: <Zap className="h-8 w-8" /> },
                { number: '200+', label: 'Students Trained', icon: <GraduationCap className="h-8 w-8" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 group backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/15 to-orange-500/15 mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-blue-500 dark:text-blue-400">
                      {stat.icon}
                    </div>
                  </div>
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
{/* What We Offer Section - Enhanced */}
<section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
  {/* Animated Background Pattern */}
  <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, #f97316 0%, transparent 50%)
      `,
    }} />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <AnimatedSection animation="fade-up" delay={0} className="text-center mb-4">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
        <Zap className="h-5 w-5 text-blue-500 animate-pulse" />
        <span className="text-blue-500 font-semibold">Our Expertise</span>
      </div>
    </AnimatedSection>
    
    <AnimatedSection animation="fade-up" delay={100} className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
        What We Offer
      </h2>
    </AnimatedSection>
    
    <AnimatedSection animation="fade-up" delay={200} className="text-center mb-12">
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Comprehensive services designed to meet diverse needs of businesses and students
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <AnimatedSection animation="fade-up" delay={300 + (index * 50)}>
            <div className="group relative h-full">
              {/* Card Hover Effect */}
              <div className={`absolute -inset-3 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col border border-gray-100/50 dark:border-gray-700/50 overflow-hidden">
                {/* Icon Container with Heading - Heading placed in the colored bar */}
                <div className="relative mb-6">
                  <div className={`relative flex items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${service.color} text-white transform group-hover:scale-105 transition-all duration-500`}>
                    {service.icon}
                    <h3 className="text-xl font-bold text-white whitespace-nowrap">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Stats - Fixed for Certified text */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-2 rounded-lg bg-gradient-to-br from-blue-50/80 to-orange-50/80 dark:from-gray-700/80 dark:to-gray-800/80 backdrop-blur-sm min-h-[70px] flex flex-col justify-center">
                      <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent px-1">
                        {stat}
                      </div>
                      <div className={`text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 px-1 ${
                        // Special smaller text size for "Certified" to prevent wrapping
                        service.statLabels[idx] === "Certified" ? "text-xs leading-tight" : ""
                      }`}>
                        {service.statLabels[idx]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm break-words max-w-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Button */}
                <div className="mt-auto pt-6 border-t border-gray-100/50 dark:border-gray-700/50">
                  <Button 
                    to={service.link} 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                  >
                    <span className="relative flex items-center justify-center">
                      Explore Service
                      <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                  </Button>
                </div>

                {/* Hover Effect Line */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Why Choose Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
          
          {/* Floating Benefits */}
          <div className="absolute inset-0 opacity-10">
            {['✓', '✓', '✓', '✓', '✓', '✓'].map((check, i) => (
              <div
                key={`benefit-check-${i}`}
                className="absolute text-6xl font-bold text-green-500 animate-float-slow"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 1.2}s`,
                  animationDuration: `${15 + i * 2}s`,
                }}
              >
                {check}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
                <Target className="h-5 w-5 text-orange-500 animate-pulse" />
                <span className="text-orange-500 font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Benefits of Choosing SMARK Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with practical experience to deliver exceptional
                results that exceed expectations
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 100}>
                  <div className="group relative">
                    {/* Card Hover Effect */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
                    
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 dark:border-gray-700/50">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-orange-500/10 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <div className="text-blue-500 dark:text-blue-400">
                          {benefit.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-6">
                        <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-full animate-progress-bar"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Section */}
            <AnimatedSection animation="fade-up" delay={600} className="mt-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-gradient-to-br from-blue-500/5 to-orange-500/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100/50 dark:border-gray-600/50">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
                      <Sparkles className="h-6 w-6 text-blue-500 animate-spin-slow" />
                      <span className="text-blue-500 font-semibold text-lg">Ready to Get Started?</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed mb-8">
                      Let's discuss how we can help you achieve your goals with our 
                      <span className="text-blue-500"> comprehensive services</span> and 
                      <span className="text-orange-500"> expert guidance</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        to="/contact" 
                        className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                      >
                        <span className="flex items-center">
                          Contact Us Now
                          <Sparkles className="ml-2 h-5 w-5" />
                        </span>
                      </Button>
                      <Button 
                        to="/portfolio" 
                        variant="outline"
                        className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      >
                        View Our Projects
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}