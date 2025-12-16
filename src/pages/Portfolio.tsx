import { useState, useEffect } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { ExternalLink, Sparkles, Zap, Code, Globe, Smartphone, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Portfolio() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { name: 'All', icon: <Sparkles className="h-4 w-4" />, count: 17 },
    { name: 'Websites', icon: <Globe className="h-4 w-4" />, count: 9 },
    { name: 'Web Apps', icon: <Code className="h-4 w-4" />, count: 5 },
    { name: 'Android Mobile Apps', icon: <Smartphone className="h-4 w-4" />, count: 3 },
  ];

  const projects = [
    // Websites
    {
      id: 1,
      title: 'Gnana Vidya Mandir',
      category: 'Websites',
      description: 'Educational institution website with student portal and information management',
      image: 'https://shivatech.solutions/assets/images/website-image/gvm.png',
      color: 'from-blue-500 to-blue-600',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://gvm.edu',
    },
    {
      id: 2,
      title: 'Sree Vaikundar Polytechnic College',
      category: 'Websites',
      description: 'College website with course information, admissions, and campus updates',
      image: '/logo.png',
      color: 'from-purple-500 to-purple-600',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 3,
      title: 'Travel Agency Website',
      category: 'Websites',
      description: 'Travel booking platform with tour packages and itinerary planning',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-orange-600',
      tech: ['Vue.js', 'Express', 'MySQL'],
      link: '#',
    },
    {
      id: 4,
      title: 'E-Commerce Website',
      category: 'Websites',
      description: 'Online shopping platform with product catalog and secure payment integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      color: 'from-green-500 to-green-600',
      tech: ['React', 'Stripe', 'MongoDB'],
      link: '#',
    },
    {
      id: 5,
      title: 'AEC Co-Operative Stores',
      category: 'Websites',
      description: 'Cooperative store management and online shopping platform',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      color: 'from-red-500 to-red-600',
      tech: ['Angular', 'Node.js', 'Firebase'],
      link: '#',
    },
    {
      id: 6,
      title: 'Radiance IAS Academy',
      category: 'Websites',
      description: 'Educational coaching website with course materials and student portal',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      color: 'from-indigo-500 to-indigo-600',
      tech: ['React', 'GraphQL', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 7,
      title: 'Swaasthya Ayurveda',
      category: 'Websites',
      description: 'Ayurvedic healthcare website with treatment information and appointment booking',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
      color: 'from-teal-500 to-teal-600',
      tech: ['Next.js', 'TypeScript', 'MongoDB'],
      link: '#',
    },
    {
      id: 8,
      title: 'Nanjil Jobs',
      category: 'Websites',
      description: 'Job portal with listings, applications, and employer dashboard',
      image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=600&fit=crop',
      color: 'from-cyan-500 to-cyan-600',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 9,
      title: 'Online Survey Platform',
      category: 'Websites',
      description: 'Survey creation and data collection platform with analytics dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      color: 'from-pink-500 to-pink-600',
      tech: ['React', 'Express', 'MongoDB'],
      link: '#',
    },

    // Web Apps
    {
      id: 10,
      title: 'Hospital Management System',
      category: 'Web Apps',
      description: 'Comprehensive hospital management with patient records, billing, and appointment scheduling',
      image: 'https://images.unsplash.com/photo-1516549655669-df6654e44780?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-blue-600',
      tech: ['React', 'Node.js', 'MySQL'],
      link: '#',
    },
    {
      id: 11,
      title: 'Inventory and Accounts Management',
      category: 'Web Apps',
      description: 'Integrated inventory tracking with accounting and financial reporting',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-purple-600',
      tech: ['Angular', '.NET', 'SQL Server'],
      link: '#',
    },
    {
      id: 12,
      title: 'College Management System',
      category: 'Web Apps',
      description: 'Complete college administration with student, faculty, and course management',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-orange-600',
      tech: ['Vue.js', 'Django', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 13,
      title: 'School/College/University Management',
      category: 'Web Apps',
      description: 'Educational institution ERP with attendance, grading, and academic planning',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      color: 'from-green-500 to-green-600',
      tech: ['React', 'Spring Boot', 'MySQL'],
      link: '#',
    },
    {
      id: 14,
      title: 'Job Application Portal',
      category: 'Web Apps',
      description: 'Advanced job portal with resume parsing, matching algorithms, and interview scheduling',
      image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=600&fit=crop',
      color: 'from-red-500 to-red-600',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      link: '#',
    },

    // Android Mobile Apps
    {
      id: 15,
      title: 'Locate n Ride',
      category: 'Android Mobile Apps',
      description: 'Ride-hailing and vehicle tracking application with real-time location services',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      color: 'from-indigo-500 to-indigo-600',
      tech: ['Kotlin', 'Firebase', 'Google Maps'],
      link: '#',
    },
    {
      id: 16,
      title: 'Doctor Locator',
      category: 'Android Mobile Apps',
      description: 'Healthcare app to find nearby doctors, book appointments, and access medical records',
      image: 'https://images.unsplash.com/photo-1516549655669-df6654e44780?w=800&h=600&fit=crop',
      color: 'from-teal-500 to-teal-600',
      tech: ['Java', 'Android SDK', 'SQLite'],
      link: '#',
    },
    {
      id: 17,
      title: 'Mobile Tracking',
      category: 'Android Mobile Apps',
      description: 'Device tracking and security application with remote monitoring features',
      image: 'https://images.unsplash.com/photo-1516549655669-df6654e44780?w=800&h=600&fit=crop',
      color: 'from-cyan-500 to-cyan-600',
      tech: ['Java', 'GPS API', 'Push Notifications'],
      link: '#',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const portfolioStats = [
    { number: '17+', label: 'Total Projects', icon: <Award className="h-6 w-6" /> },
    { number: '9', label: 'Websites', icon: <Globe className="h-6 w-6" /> },
    { number: '5', label: 'Web Applications', icon: <Code className="h-6 w-6" /> },
    { number: '3', label: 'Mobile Apps', icon: <Smartphone className="h-6 w-6" /> },
  ];

  useEffect(() => {
    // Initialize animations
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Banner Section - Enhanced */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={`hero-particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20 dark:from-blue-500/15 dark:to-orange-500/15"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animation: `floatParticle ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          {['</>', '{ }', '()', '[]', '=>', ';', 'const', 'class', 'function'].map((code, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-3xl font-mono text-blue-500 animate-float-slow"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 5) * 15}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${20 + i * 2}s`,
              }}
            >
              {code}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Header with Enhanced Design */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Showcasing Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient">
              Our Portfolio
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-700 dark:text-gray-300 font-medium px-4 animate-slide-up delay-200 mb-12">
              Showcasing <span className="text-blue-500 font-semibold">innovative solutions</span> and 
              <span className="text-orange-500 font-semibold"> successful projects</span> delivered to satisfied clients worldwide
            </p>
            
            {/* Portfolio Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 animate-slide-up delay-400">
              {portfolioStats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-blue-500 dark:text-blue-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Filter Section - Enhanced */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, #3b82f6 1px, transparent 1px),
              linear-gradient(-45deg, #f97316 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`filter-particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-orange-400/10"
              style={{
                left: `${15 + (i * 7)}%`,
                top: `${25 + (i % 4) * 15}%`,
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
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30">
              <Zap className="h-5 w-5 text-blue-500 animate-pulse" />
              <span className="text-blue-500 font-semibold">Browse Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Filter through our diverse portfolio of successful projects across different categories
            </p>

            {/* Enhanced Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-xl'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Hover Effect */}
                  {selectedCategory === category.name && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-50 animate-pulse-slow" />
                  )}
                  
                  <span className="relative">
                    <span className="flex items-center gap-2">
                      {category.icon}
                      {category.name}
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        selectedCategory === category.name
                          ? 'bg-white/20'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      }`}>
                        {category.count}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <AnimatedSection animation="scale" delay={index * 100}>
                  <div className="group relative h-full">
                    {/* Card Hover Effect */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
                    
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col border border-gray-100 dark:border-gray-700 overflow-hidden">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}/20 z-10`} />
                        
                        {/* Project Image */}
                        <div className="relative h-full flex items-center justify-center">
                          {project.image && !project.image.includes('unsplash') ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                              <div className="mb-2 text-gray-400 dark:text-gray-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                </svg>
                              </div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {project.title}
                              </span>
                            </div>
                          ) : (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                          )}
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 z-20">
                          <Button
                            to={project.link}
                            variant="secondary"
                            size="sm"
                            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                          >
                            <span className="flex items-center gap-2">
                              View Details
                              <ExternalLink className="h-4 w-4" />
                            </span>
                          </Button>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            theme === 'light'
                              ? 'bg-white/90 text-blue-700'
                              : 'bg-black/70 text-blue-300'
                          }`}>
                            <Globe className="h-3 w-3" />
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow">
                        {/* Title */}
                        <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${
                          theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                          {project.title}
                        </h3>
                        
                        {/* Description */}
                        <p className={`text-sm leading-relaxed mb-4 ${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                        }`}>
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 text-blue-700 dark:text-blue-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 pb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Click for details
                          </span>
                          <ArrowRight className="h-4 w-4 text-blue-500 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div 
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
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
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Sparkles className="h-6 w-6 text-white animate-spin-slow" />
              <span className="text-white font-semibold text-lg">Ready to Start?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              Have a Project in Mind?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Let's work together to bring your ideas to life. Our experienced team is ready
              to help you build <span className="font-semibold">innovative solutions</span> that drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/services" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View Our Services
                  <CheckCircle className="h-5 w-5" />
                </span>
              </Button>
            </div>
            
            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {[
                { number: '100%', label: 'Client Satisfaction' },
                { number: '17+', label: 'Projects Completed' },
                { number: '50+', label: 'Technologies Used' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}