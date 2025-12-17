import { Mail, Phone, MapPin, Clock, Sparkles, Zap, MessageSquare, Send, Globe, Users, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import ContactForm from '../components/home/ContactForm';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect } from 'react';

export default function Contact() {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Visit Us',
      details: ['709, RST Building, Pattagasalianvilai', 'Nagercoil - 629002'],
      color: 'from-blue-500 to-blue-600',
      stat: 'Easy to Find',
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Call Us',
      details: ['+91 8300 123435', '04652 469848'],
      color: 'from-orange-500 to-orange-600',
      stat: '24/7 Available',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Us',
      details: ['smarksolutions.ngl@gmail.com'],
      color: 'from-purple-500 to-purple-600',
      stat: 'Fast Response',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Working Hours',
      details: ['Monday - Saturday', '(2nd & 4th Saturday - Holiday)', '9:30 AM - 6:30 PM'],
      color: 'from-green-500 to-green-600',
      stat: 'Flexible Timing',
    },
  ];

  const contactReasons = [
    { icon: <CheckCircle className="h-6 w-6" />, text: 'Quick Response Time' },
    { icon: <Users className="h-6 w-6" />, text: 'Expert Consultation' },
    { icon: <MessageSquare className="h-6 w-6" />, text: 'Personalized Solutions' },
    { icon: <Globe className="h-6 w-6" />, text: 'Global Support' },
  ];

  useEffect(() => {
    // Initialize any contact page specific animations
  }, []);

  return (
    <>
    <div className="pt-20 animate-fade-in">
      {/* Hero Section - Enhanced with Transparent Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-8">
        {/* Transparent Technology Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Main Transparent Tech Background Image */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url('/c.jpeg')",
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          
          {/* Additional floating tech elements */}
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-float-slow delay-500" />
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 rounded-full blur-2xl animate-float-slow delay-700" />
        </div>

        {/* Binary Code Animation Overlay */}
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
              {`${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}`}
            </div>
          ))}
        </div>

        {/* Contact Icons Animation */}
        <div className="absolute inset-0 z-0 opacity-15">
          {['📱', '✉️', '📍', '💬', '📞', '🌐'].map((icon, i) => (
            <div
              key={`contact-icon-${i}`}
              className="absolute text-4xl animate-float-slow"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${20 + i * 3}s`,
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
              }}
            >
              {icon}
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
              <MessageSquare className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Get in Touch
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              Contact Us
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Let's discuss how we can help you achieve your goals with 
              <span className="text-blue-500 font-semibold"> innovative solutions</span> and 
              <span className="text-orange-500 font-semibold"> expert guidance</span>
            </p>
            
            {/* Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 animate-slide-up delay-400">
              {[
                { number: '< 2h', label: 'Response Time', icon: <Clock className="h-8 w-8" /> },
                { number: '100%', label: 'Satisfaction', icon: <CheckCircle className="h-8 w-8" /> },
                { number: '24/7', label: 'Support', icon: <Users className="h-8 w-8" /> },
                { number: '50+', label: 'Clients', icon: <Globe className="h-8 w-8" /> },
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

      {/* Contact Information Section - Enhanced */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #f97316 0%, transparent 50%)
            `,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`info-particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-orange-400/10"
              style={{
                left: `${10 + (i * 8)}%`,
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
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
              <span className="text-blue-500 font-semibold">Reach Out</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get in touch with our expert team
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <AnimatedSection animation="scale" delay={index * 100}>
                  <div className="group relative h-full">
                    {/* Card Hover Effect */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${info.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
                    
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center h-full border border-gray-100/50 dark:border-gray-700/50">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className={`absolute -inset-4 bg-gradient-to-r ${info.color} rounded-full blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${info.color} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {info.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                        {info.title}
                      </h3>

                      {/* Details */}
                      <div className="space-y-2 mb-6">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>

                      {/* Stat */}
                      <div className="mt-auto pt-4 border-t border-gray-100/50 dark:border-gray-700/50">
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-500/10 to-orange-500/10 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full">
                          {info.stat}
                        </span>
                      </div>

                      {/* Hover Effect Line */}
                      <div 
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up" delay={400} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
                <Send className="h-5 w-5 text-orange-500 animate-pulse" />
                <span className="text-orange-500 font-semibold">Send Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="relative group">
                {/* Form Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100/50 dark:border-gray-700/50 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 z-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(90deg, #3b82f6 1px, transparent 1px),
                        linear-gradient(0deg, #3b82f6 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }} />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Why Contact Us */}
                    <div className="mb-8 text-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Why Choose Our Contact?
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {contactReasons.map((reason, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-blue-50/80 to-orange-50/80 dark:from-gray-700/80 dark:to-gray-800/80 backdrop-blur-sm"
                          >
                            <div className="text-blue-500 dark:text-blue-400">
                              {reason.icon}
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {reason.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Form */}
                    <ContactForm />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced */}
<section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
  </div>

  {/* Floating Location Icons */}
  <div className="absolute inset-0 z-0 opacity-10">
    {['📍', '📍', '📍', '📍', '📍', '📍'].map((pin, i) => (
      <div
        key={`location-pin-${i}`}
        className="absolute text-4xl animate-float-slow"
        style={{
          left: `${15 + i * 12}%`,
          top: `${25 + (i % 3) * 15}%`,
          animationDelay: `${i * 1}s`,
          animationDuration: `${15 + i * 2}s`,
        }}
      >
        {pin}
      </div>
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <AnimatedSection animation="fade-up" className="text-center mb-12">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
        <MapPin className="h-5 w-5 text-orange-500 animate-pulse" />
        <span className="text-orange-500 font-semibold">Our Location</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Find Us on Map
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Visit us at our office location in Nagercoil - Easily accessible from all parts of the city
      </p>
    </AnimatedSection>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <AnimatedSection animation="slide-left" className="lg:col-span-2">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100/50 dark:border-gray-700/50">
              <div className="aspect-w-16 aspect-h-9 h-96">
                {/* Updated Google Maps Embed with exact Nagercoil coordinates */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.480654!2d77.4332891!3d8.183424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1b3b0a7c1a3%3A0x4a2f8f8f8f8f8f8f!2sRST%20Building%2C%20Pattagasalianvilai%2C%20Nagercoil%2C%20Tamil%20Nadu%20629002!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smark Solutions - Nagercoil Office Location"
                  className="rounded-xl"
                />
              </div>
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        Smark Solutions - Nagercoil Office
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        709, RST Building, Pattagasalianvilai, Nagercoil - 629002
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Near Main Road, Easy to Find
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">One click to</div>
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=709+RST+Building+Pattagasalianvilai+Nagercoil+Tamil+Nadu+629002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                      >
                        Get Directions
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

              {/* Location Details */}
              <AnimatedSection animation="slide-right" delay={300}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Office Location Details
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10">
                          <MapPin className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Address</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            709, RST Building, Pattagasalianvilai, Nagercoil - 629002
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <Clock className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Business Hours</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Mon-Sat: 9:30 AM - 6:30 PM<br />
                            2nd & 4th Saturday: Holiday
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-500/10">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Parking Available</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Ample parking space available nearby
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                 <div className="bg-gradient-to-br from-blue-500/5 to-orange-500/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {/* Call for Appointment - Moves to Telephone */}
                <a 
                  href="tel:+918300123435"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-blue-50 dark:hover:bg-gray-700/80 transition-colors group backdrop-blur-sm"
                >
                  <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-500" />
                    Call for Appointment
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-500 group-hover:translate-x-2 transition-transform" />
                </a>
                
                {/* Get Directions - Moves to Map with exact location */}
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=709+RST+Building+Pattagasalianvilai+Nagercoil+Tamil+Nadu+629002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-orange-50 dark:hover:bg-gray-700/80 transition-colors group backdrop-blur-sm"
                >
                  <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    Get Exact Directions
                  </span>
                  <ArrowRight className="h-5 w-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
                </a>
                
                {/* Schedule Meeting - Moves to Email */}
                <a 
                  href="mailto:smarksolutions.ngl@gmail.com?subject=Meeting%20Appointment%20Request&body=Hello%20Smark%20Solutions%20Team,%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20at%20your%20Nagercoil%20office.%0A%0APreferred%20Date%20and%20Time:%0A%0APurpose%20of%20Meeting:%0A%0AThank%20you."
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-green-50 dark:hover:bg-gray-700/80 transition-colors group backdrop-blur-sm"
                >
                  <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <Mail className="h-4 w-4 text-green-500" />
                    Schedule Meeting
                  </span>
                  <ArrowRight className="h-5 w-5 text-green-500 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              
              {/* Additional Help Info */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Need help finding us?</span>
                  </p>
                  <a 
                    href="https://wa.me/918300123435?text=Hello%20Smark%20Solutions!%20I%20need%20help%20finding%20your%20Nagercoil%20office%20location."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 text-xs"
                  >
                    <MessageSquare className="h-3 w-3" />
                    Message us on WhatsApp for live location help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
</section>

      {/* Final CTA Section - Enhanced */}
<section className="relative py-20 bg-gradient-to-br from-blue-500 to-orange-500 overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920')] bg-cover bg-center opacity-10" />
    
    {/* Floating Particles */}
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
    <AnimatedSection animation="fade-up" className="text-center max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
        <Zap className="h-6 w-6 text-white animate-spin-slow" />
        <span className="text-white font-semibold text-lg">Ready to Start?</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
        Let's Build Something Amazing Together
      </h2>
      
      <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
        Whether you need <span className="font-semibold">software solutions</span>, 
        <span className="font-semibold"> professional training</span>, or 
        <span className="font-semibold"> expert guidance</span>, we're here to help you succeed.
      </p>
      
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        {[
          { 
            title: 'Call Us Now', 
            description: 'Immediate assistance', 
            action: 'Call +91 8300 123435', 
            icon: <Phone className="h-8 w-8" />,
            link: 'tel:+918300123435' // Phone link
          },
          { 
            title: 'Email Us', 
            description: 'Detailed queries', 
            action: 'smarksolutions.ngl@gmail.com', 
            icon: <Mail className="h-8 w-8" />,
            link: 'mailto:smarksolutions.ngl@gmail.com' // Email link
          },
          { 
            title: 'Visit Office', 
            description: 'In-person consultation', 
            action: 'Schedule a visit', 
            icon: <MapPin className="h-8 w-8" />,
            link: 'https://maps.google.com/?q=709,+RST+Building,+Pattagasalianvilai,+Nagercoil+-+629002' // Google Maps link
          },
        ].map((option, index) => (
          <a
            key={index}
            href={option.link}
            target={option.title === 'Visit Office' ? '_blank' : '_self'}
            rel={option.title === 'Visit Office' ? 'noopener noreferrer' : ''}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
              <div className="text-white">
                {option.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
            <p className="text-white/80 text-sm mb-3">{option.description}</p>
            <div className="text-white font-semibold">{option.action}</div>
          </a>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {/* Call Now Button */}
        <a 
          href="tel:+918300123435"
          className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center gap-2 backdrop-blur-sm"
        >
          <span>Call Now</span>
          <Phone className="h-5 w-5 group-hover:animate-pulse" />
        </a>
        
        {/* Email Us Button */}
        <a 
          href="mailto:smarksolutions.ngl@gmail.com"
          className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
        >
          <span>Email Us</span>
          <Send className="h-5 w-5" />
        </a>
        
        {/* Get Directions Button */}
        <a 
          href="https://maps.google.com/?q=709,+RST+Building,+Pattagasalianvilai,+Nagercoil+-+629002"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/5 hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span>Get Directions</span>
          <MapPin className="h-5 w-5" />
        </a>
      </div>
      
      {/* Success Message */}
      <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
        <p className="text-xl text-white font-semibold mb-4">
          We Look Forward to Hearing From You!
        </p>
        <p className="text-white/90">
          Our expert team is ready to provide personalized solutions and answer all your questions.
          Contact us today to start your journey towards success.
        </p>
      </div>
    </AnimatedSection>
  </div>
</section>
    </div>
</>  );
}