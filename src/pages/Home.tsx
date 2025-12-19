import { ArrowRight, Code, Brain, GraduationCap, FolderKanban, Users, TrendingUp, CheckCircle, Sparkles, Zap, Target, Award } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import StatsCounter from '../components/home/StatsCounter';
import ContactForm from '../components/home/ContactForm';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState, useRef } from 'react';
import EnhancedHeroSection from "../components/EnhancedHeroSection";

export default function Home() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const achievementsRef = useRef(null);

  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Designing',
      description: 'Professional website development with modern design, responsive layouts and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI / ML Solutions',
      description: 'Cutting-edge AI and Machine Learning solutions for automation and data-driven insights.',
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
    { number: 90, label: 'Happy Clients', suffix: '+', icon: <Target className="h-8 w-8" /> },
   
    { number: 50, label: 'Projects Completed', suffix: '+', icon: <Award className="h-8 w-8" /> },
     
    { number: 15, label: 'Technology Domains', suffix: '+', icon: <Zap className="h-8 w-8" /> },
    { number: 7, label: 'Years Experience', suffix: '+', icon: <Users className="h-8 w-8" /> },
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
      <EnhancedHeroSection />
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
          description: 'Professional website development with modern design, responsive layouts and SEO optimization.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
          color: 'from-blue-500 to-cyan-400',
          path: '/services/web-designing', // Your existing route
        },
        {
          icon: <Brain className="h-12 w-12" />,
          title: 'AI / ML Solutions',
          description: 'Cutting-edge AI and Machine Learning solutions for automation and data-driven insights.',
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
                  src="aaa.jpeg"
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
                    
                    {/* Removed floating stats elements */}
                  </div>
                </div>
              </div>
              
              {/* Removed code badges - Innovation and Technology tags */}
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
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2025 - SMARK Solutions Launch</h3>
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
              
              {/* Stable Counter - No animation */}
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 bg-clip-text text-transparent mb-2">
                {achievement.number}
                <span className="text-3xl">{achievement.suffix}</span>
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {achievement.label}
              </h3>
              
              {/* Static Progress Bar */}
              <div className="mt-6">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 rounded-full"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
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