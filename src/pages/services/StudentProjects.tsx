import { useState } from 'react';
import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { FileCode, AlertCircle, Bot, Mic, FileText, Video, BookOpen, Brain, TrendingUp, Zap, Target, CheckCircle, ArrowRight, Sparkles, Cpu, Eye, MessageSquare, Database, Shield, Code, Users, Award, Clock } from 'lucide-react';

export default function StudentProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: 'Credit Card Fraud Detection',
      description: 'Machine learning system to detect fraudulent credit card transactions using advanced algorithms',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'Scikit-learn'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Fake News Detection',
      description: 'NLP-based solution to identify and classify fake news articles using deep learning',
      category: 'AI/ML',
      tech: ['Python', 'NLTK', 'Transformers'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: 'Object Tracking and Alert System',
      description: 'Computer vision system for real-time object tracking and automated alert generation',
      category: 'Computer Vision',
      tech: ['Python', 'OpenCV', 'YOLO'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI chatbot with natural language understanding capabilities',
      category: 'NLP',
      tech: ['Python', 'GPT', 'FastAPI'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: 'AI Voice Assistance',
      description: 'Voice-enabled AI assistant with speech recognition and natural language processing',
      category: 'NLP',
      tech: ['Python', 'SpeechRecognition', 'Whisper'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <FileCode className="h-10 w-10" />,
      title: 'Resume Parser',
      description: 'Automated resume parsing system to extract and structure candidate information',
      category: 'NLP',
      tech: ['Python', 'spaCy', 'BERT'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: 'AI-Based Video to Blog Generator',
      description: 'Transform video content into well-structured blog posts using AI technology',
      category: 'AI/ML',
      tech: ['Python', 'Whisper', 'GPT-4'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: 'AI-Based Video to Quiz Generator',
      description: 'Automatically generate educational quizzes from video content using AI',
      category: 'AI/ML',
      tech: ['Python', 'OpenAI', 'Flask'],
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const domains = [
    { name: 'Artificial Intelligence', icon: <Brain className="h-5 w-5" />, color: 'from-blue-500 to-blue-600' },
    { name: 'Machine Learning', icon: <TrendingUp className="h-5 w-5" />, color: 'from-purple-500 to-purple-600' },
    { name: 'Deep Learning', icon: <Brain className="h-5 w-5" />, color: 'from-orange-500 to-orange-600' },
    { name: 'Natural Language Processing', icon: <MessageSquare className="h-5 w-5" />, color: 'from-green-500 to-green-600' },
    { name: 'Computer Vision', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Web Development', icon: <Code className="h-5 w-5" />, color: 'from-red-500 to-red-600' },
    { name: 'Mobile App Development', icon: <Cpu className="h-5 w-5" />, color: 'from-pink-500 to-pink-600' },
    { name: 'Data Science', icon: <Database className="h-5 w-5" />, color: 'from-cyan-500 to-cyan-600' },
    { name: 'IoT Projects', icon: <Zap className="h-5 w-5" />, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Blockchain', icon: <Shield className="h-5 w-5" />, color: 'from-gray-500 to-gray-600' },
  ];

  const features = [
    {
      icon: <FileCode className="h-8 w-8" />,
      title: 'Project Development',
      description: 'End-to-end development from concept to deployment',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Guidance',
      description: 'Professional mentoring by experienced developers',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Documentation Support',
      description: 'Comprehensive documentation and reports',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Presentation Preparation',
      description: 'Help with project presentations and demos',
      color: 'from-green-500 to-green-600',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const projectCategories = ['All', ...new Set(projects.map(p => p.category))];

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

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Header */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-orange-100/80 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
              <FileCode className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Innovation Showcase
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              Student Projects
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Quality guidance and support for students working on their <span className="text-blue-500 font-semibold">main and mini projects</span> across 
              <span className="text-orange-500 font-semibold"> various disciplines</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
              {[
                { number: '100+', label: 'Projects Completed', icon: <FileCode className="h-8 w-8" /> },
                { number: '15+', label: 'Domains Covered', icon: <Brain className="h-8 w-8" /> },
                { number: '50+', label: 'Students Helped', icon: <Users className="h-8 w-8" /> },
                { number: '100%', label: 'Success Rate', icon: <Award className="h-8 w-8" /> },
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

      {/* Features Section */}
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
        <span className="text-blue-500 font-semibold">Our Support</span>
      </div>
    </AnimatedSection>
    
    <AnimatedSection animation="fade-up" delay={100} className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
        What We Provide
      </h2>
    </AnimatedSection>
    
    <AnimatedSection animation="fade-up" delay={200} className="text-center mb-12">
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Comprehensive support for your academic and research projects
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <AnimatedSection key={index} animation="fade-up" delay={300 + (index * 50)}>
          <div className="group relative h-full">
            <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
            
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col border border-gray-100/50 dark:border-gray-700/50">
              {/* Icon Container with Heading - Reduced text size */}
              <div className="relative mb-4">
                <div className={`relative flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white transform group-hover:scale-105 transition-all duration-500`}>
                  {feature.icon}
                  <h3 className="text-sm md:text-base font-bold text-white whitespace-normal text-center leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-grow text-center">
                {feature.description}
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
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>

      {/* Projects Filter Section */}
      <section className="relative py-12 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Filter by Category
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {projectCategories.map((category, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 50}>
                <button
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-xl'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                  } backdrop-blur-sm border border-gray-100/50 dark:border-gray-700/50`}
                >
                  {category}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 opacity-10">
          {['💻', '🚀', '⚡', '🎯', '🏆', '🌟', '📚', '🔬'].map((icon, i) => (
            <div
              key={`project-icon-${i}`}
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
              <span className="text-orange-500 font-semibold">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Innovative Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of innovative student projects across cutting-edge technologies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-3 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col border border-gray-100/50 dark:border-gray-700/50">
                    {/* Icon & Category */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className={`absolute -ins-4 bg-gradient-to-r ${project.color} rounded-full blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {project.icon}
                        </div>
                      </div>
                      
                      <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-xs font-semibold transform group-hover:scale-105 transition-all duration-300`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-full animate-progress-bar"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        />
                      </div>
                    </div>
                    
                    {/* Hover Line */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
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
              <span className="text-orange-500 font-semibold">Available Domains</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Domains
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We provide project guidance across multiple technology domains
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-gradient-to-br from-blue-50/80 to-orange-50/80 dark:from-blue-900/20 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 dark:border-gray-700/50">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {domains.map((domain, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                      <div className="group relative">
                        <div className={`absolute -inset-3 bg-gradient-to-r ${domain.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                        
                        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50 dark:border-gray-700/50">
                          <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${domain.color} text-white mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                            {domain.icon}
                          </div>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                            {domain.name}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920')] bg-cover bg-center opacity-10" />
          
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
              <FileCode className="h-6 w-6 text-white animate-spin-slow" />
              <span className="text-white font-semibold text-lg">Explore More</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              To Know More Projects
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
              We have completed numerous successful projects across various domains.
              Contact us to learn about more projects and discuss your requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/portfolio" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View Portfolio
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

