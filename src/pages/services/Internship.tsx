import { useState, FormEvent } from 'react';
import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import emailjs from '@emailjs/browser';
import { Award, Users, Code, BookOpen, Brain, TrendingUp, Zap, Target, CheckCircle, ArrowRight, Sparkles, Cpu, Eye, MessageSquare, Database, Shield, AlertCircle } from 'lucide-react';

export default function Internship() {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
    domain: '',
  });
  
  const [alerts, setAlerts] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
  });
  
  const [showAlerts, setShowAlerts] = useState({
    name: false,
    college: false,
    email: false,
    phone: false,
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Validation functions
  const validateName = (name: string): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name) && name.trim().length > 0;
  };

  const validateCollege = (college: string): boolean => {
    const collegeRegex = /^[A-Za-z\s.,'()&0-9-]+$/;
    return collegeRegex.test(college) && college.trim().length > 0;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s+\-]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateForm = (): boolean => {
    const newAlerts = {
      name: '',
      college: '',
      email: '',
      phone: '',
    };

    let isValid = true;

    // Validate name
    if (!validateName(formData.name)) {
      newAlerts.name = 'Name should contain only letters and spaces';
      isValid = false;
    }

    // Validate college
    if (!validateCollege(formData.college)) {
      newAlerts.college = 'College name should contain letters, spaces, and common punctuation';
      isValid = false;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newAlerts.email = 'Please enter a valid email address (e.g., example@domain.com)';
      isValid = false;
    }

    // Validate phone
    if (!validatePhone(formData.phone)) {
      newAlerts.phone = 'Phone number should contain only numbers and be at least 10 digits';
      isValid = false;
    }

    setAlerts(newAlerts);
    setShowAlerts({
      name: newAlerts.name !== '',
      college: newAlerts.college !== '',
      email: newAlerts.email !== '',
      phone: newAlerts.phone !== '',
    });
    
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');

    try {
      emailjs.init('IblyrGZrui7lX-4DY');
      
      const result = await emailjs.send(
        'service_s62yzrs',
        'template_msd8aco',
        {
          from_name: formData.name,
          college: formData.college,
          from_email: formData.email,
          phone: formData.phone,
          domain: formData.domain,
          message: `Internship Application\n\nCollege: ${formData.college}\nDomain: ${formData.domain}`,
          subject: 'Internship Application - ' + formData.domain,
          to_name: 'SMARK Solutions',
        }
      );

      console.log('Application sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', college: '', email: '', phone: '', domain: '' });
      setAlerts({ name: '', college: '', email: '', phone: '' });
      setShowAlerts({ name: false, college: false, email: false, phone: false });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Application failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const domains = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'C', 'C++'],
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'AI / ML',
      items: ['Machine Learning', 'Deep Learning', 'Generative AI'],
      icon: <Brain className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Full Stack Web Development (MERN)',
      items: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js', 'Express.js', 'MongoDB'],
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600',
    },
    {
      category: 'Backend Development',
      items: ['PHP', 'MySQL'],
      icon: <Database className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
    },
    {
      category: 'Frontend Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: <Eye className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const benefits = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Live Projects',
      description: 'Work on real-world projects with our experienced team',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional Mentoring',
      description: 'Direct guidance from industry professionals',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certificate',
      description: 'Receive internship completion certificate',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Industry Exposure',
      description: 'Gain valuable industry experience and skills',
      color: 'from-green-500 to-green-600',
    },
  ];

  const careerBenefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Resume Building',
      description: 'Add valuable industry experience to your resume'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Skill Development',
      description: 'Learn cutting-edge technologies used in industry'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Career Guidance',
      description: 'Get mentorship for career planning and growth'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Job Readiness',
      description: 'Become industry-ready with practical experience'
    }
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-8">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url('/tech-bg-transparent.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
          
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
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-orange-50/60 dark:from-gray-900/70 dark:via-gray-800/80 dark:to-gray-900/70" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
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
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>

        {/* Binary Code Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(20)].map((_, i) => (
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
              {`${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}`}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Header */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-orange-100/80 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
              <Award className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Career Launchpad
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              Internship Programs
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Industry-focused internship programs providing <span className="text-blue-500 font-semibold">hands-on experience</span> with 
              <span className="text-orange-500 font-semibold"> real projects</span> and professional mentoring
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
              {[
                { number: '100%', label: 'Practical Training', icon: <Code className="h-8 w-8" /> },
                { number: '1:1', label: 'Mentorship', icon: <Users className="h-8 w-8" /> },
                { number: '50+', label: 'Live Projects', icon: <TrendingUp className="h-8 w-8" /> },
                { number: '100%', label: 'Certification', icon: <Award className="h-8 w-8" /> },
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

      {/* Benefits Section */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
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
              <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
              <span className="text-blue-500 font-semibold">Why Choose Us</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Internship Benefits
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Gain practical experience and industry-ready skills that employers value
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={300 + (index * 50)}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${benefit.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col border border-gray-100/50 dark:border-gray-700/50">
                    {/* Icon Container with Heading */}
                    <div className="relative mb-4">
                      <div className={`relative flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white transform group-hover:scale-105 transition-all duration-500`}>
                        {benefit.icon}
                        <h3 className="text-lg font-bold text-white whitespace-nowrap">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                      {benefit.description}
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
                    
                    {/* Hover Effect Line */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 opacity-10">
          {['🎯', '💼', '🚀', '🌟', '📚', '🏆'].map((icon, i) => (
            <div
              key={`internship-icon-${i}`}
              className="absolute text-4xl animate-float-slow"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${20 + i * 2}s`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
              <Target className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold">Available Domains</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Domain
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select from a wide range of technology domains
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-8">
            {domains.map((domain, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="group relative">
                  <div className={`absolute -inset-3 bg-gradient-to-r ${domain.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${domain.color} text-white transform group-hover:rotate-12 transition-transform duration-500`}>
                        {domain.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {domain.category}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {domain.items.map((item, idx) => (
                        <AnimatedSection key={idx} animation="scale" delay={idx * 50}>
                          <span
                            className={`bg-gradient-to-r ${domain.color} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
                          >
                            {item}
                          </span>
                        </AnimatedSection>
                      ))}
                    </div>
                    
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Career Benefits Section */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
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
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
              <ArrowRight className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold">Career Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Boost Your Career
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {careerBenefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-100/50 dark:border-gray-700/50">
                    <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-orange-500/10 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <div className="text-blue-500 dark:text-blue-400">
                        {benefit.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                    
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
        </div>
      </section>

      {/* Application Form Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-move" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-orange-100/80 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
                <Code className="h-6 w-6 text-orange-500 animate-pulse" />
                <span className="text-orange-500 font-semibold text-lg">Start Your Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                Apply for Internship
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/30 dark:border-gray-700/30">
                Fill out the form below to start your internship journey with us
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100/50 dark:border-gray-700/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({ ...formData, name: value });
                            // Clear name alert when typing
                            if (alerts.name) {
                              setAlerts({ ...alerts, name: '' });
                              setShowAlerts({ ...showAlerts, name: false });
                            }
                          }}
                          onBlur={() => {
                            // Validate name on blur
                            const isValid = validateName(formData.name);
                            const message = isValid ? '' : 'Name should contain only letters and spaces';
                            setAlerts({ ...alerts, name: message });
                            setShowAlerts({ ...showAlerts, name: !isValid });
                          }}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          placeholder="Your Full Name"
                        />
                        {showAlerts.name && alerts.name && (
                          <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
                            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{alerts.name}</span>
                          </div>
                        )}
                      </div>

                      <div className="group">
                        <label htmlFor="college" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          College Name
                        </label>
                        <input
                          type="text"
                          id="college"
                          required
                          value={formData.college}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({ ...formData, college: value });
                            // Clear college alert when typing
                            if (alerts.college) {
                              setAlerts({ ...alerts, college: '' });
                              setShowAlerts({ ...showAlerts, college: false });
                            }
                          }}
                          onBlur={() => {
                            // Validate college on blur
                            const isValid = validateCollege(formData.college);
                            const message = isValid ? '' : 'College name should contain letters, spaces, and common punctuation';
                            setAlerts({ ...alerts, college: message });
                            setShowAlerts({ ...showAlerts, college: !isValid });
                          }}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          placeholder="Your College Name"
                        />
                        {showAlerts.college && alerts.college && (
                          <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
                            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{alerts.college}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email ID
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({ ...formData, email: value });
                            // Clear email alert when typing
                            if (alerts.email) {
                              setAlerts({ ...alerts, email: '' });
                              setShowAlerts({ ...showAlerts, email: false });
                            }
                          }}
                          onBlur={() => {
                            // Validate email on blur
                            const isValid = validateEmail(formData.email);
                            const message = isValid ? '' : 'Please enter a valid email address (e.g., example@domain.com)';
                            setAlerts({ ...alerts, email: message });
                            setShowAlerts({ ...showAlerts, email: !isValid });
                          }}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                        {showAlerts.email && alerts.email && (
                          <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
                            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{alerts.email}</span>
                          </div>
                        )}
                      </div>

                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({ ...formData, phone: value });
                            // Clear phone alert when typing
                            if (alerts.phone) {
                              setAlerts({ ...alerts, phone: '' });
                              setShowAlerts({ ...showAlerts, phone: false });
                            }
                          }}
                          onBlur={() => {
                            // Validate phone on blur
                            const isValid = validatePhone(formData.phone);
                            const message = isValid ? '' : 'Phone number should contain only numbers and be at least 10 digits';
                            setAlerts({ ...alerts, phone: message });
                            setShowAlerts({ ...showAlerts, phone: !isValid });
                          }}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          placeholder="+91 12345 67890"
                        />
                        {showAlerts.phone && alerts.phone && (
                          <div className="mt-2 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
                            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{alerts.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="domain" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Select Domain
                      </label>
                      <select
                        id="domain"
                        required
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                      >
                        <option value="">Select a domain</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C/C++">C/C++</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Deep Learning">Deep Learning</option>
                        <option value="Generative AI">Generative AI</option>
                        <option value="Full Stack MERN">Full Stack Web Development (MERN)</option>
                        <option value="Backend Development">Backend Development (PHP/MySQL)</option>
                        <option value="Frontend Development">Frontend Development</option>
                      </select>
                    </div>

                    {status === 'success' && (
                      <AnimatedSection animation="scale">
                        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg backdrop-blur-sm">
                          Application submitted successfully! We'll contact you soon.
                        </div>
                      </AnimatedSection>
                    )}

                    {status === 'error' && (
                      <AnimatedSection animation="scale">
                        <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg backdrop-blur-sm">
                          Failed to submit application. Please try again or contact us directly.
                        </div>
                      </AnimatedSection>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group backdrop-blur-sm"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {status === 'loading' ? 'Submitting...' : 'Apply Now'}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920')] bg-cover bg-center opacity-10" />
          
          {[...Array(15)].map((_, i) => (
            <div
              key={`cta-particle-${i}`}
              className="absolute rounded-full bg-white/20 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <BookOpen className="h-6 w-6 text-white animate-spin-slow" />
              <span className="text-white font-semibold text-lg">Kickstart Your Career</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              Ready to Launch Your Tech Career?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
              Join our internship program and gain the practical experience that top employers are looking for. 
              Work on real projects, learn from industry experts, and build a portfolio that stands out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Contact for Details
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/portfolio" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View Intern Projects
                  <Eye className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}