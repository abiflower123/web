import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { Brain, TrendingUp, Eye, MessageSquare, Database, Cpu, Sparkles, Zap, Target, CheckCircle, ArrowRight, Code, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function AIMLSolutions() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to predict future trends and make data-driven decisions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Natural Language Processing',
      description: 'Build chatbots, sentiment analysis, and text processing solutions',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual data analysis',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Analytics',
      description: 'Extract insights from complex datasets using advanced algorithms',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Deep Learning',
      description: 'Neural networks and advanced AI models for complex problems',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed for your specific business needs',
      color: 'from-red-500 to-red-600',
    },
  ];

  const useCases = [
    'Fraud Detection Systems',
    'Recommendation Engines',
    'Customer Sentiment Analysis',
    'Automated Data Processing',
    'Intelligent Document Processing',
    'Predictive Maintenance',
    'Healthcare Diagnostics',
    'Financial Forecasting',
  ];

  const technologies = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras',
    'OpenCV', 'NLTK', 'Pandas', 'NumPy', 'Jupyter'
  ];

  const workflow = [
    { title: 'Problem Definition', description: 'Understanding your business challenge and objectives' },
    { title: 'Data Collection & Preparation', description: 'Gathering and preprocessing relevant data' },
    { title: 'Model Development', description: 'Building and training AI/ML models' },
    { title: 'Testing & Validation', description: 'Evaluating model performance and accuracy' },
    { title: 'Deployment', description: 'Integrating the solution into your workflow' },
    { title: 'Monitoring & Optimization', description: 'Continuous improvement and performance tuning' },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Better Decisions',
      description: 'Make data-driven decisions with predictive insights'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Enhanced Security',
      description: 'AI-powered security and fraud detection'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Improved Accuracy',
      description: 'Reduce human errors with machine precision'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section with Enhanced Theme */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-8">
        {/* Transparent Technology Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Main Transparent Tech Background Image */}
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
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-orange-50/60 dark:from-gray-900/70 dark:via-gray-800/80 dark:to-gray-900/70" />
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
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
              {`${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}${Math.random() > 0.5 ? '1' : '0'}`}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Header with Enhanced Design */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-orange-100/80 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
              <Brain className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Intelligent Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              AI / ML Solutions
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Transform your business with <span className="text-blue-500 font-semibold">cutting-edge artificial intelligence</span> and 
              <span className="text-orange-500 font-semibold"> machine learning solutions</span> that drive innovation and efficiency
            </p>
            
            {/* AI Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
              {[
                { number: '95%', label: 'Model Accuracy', icon: <CheckCircle className="h-8 w-8" /> },
                { number: '24/7', label: 'AI Processing', icon: <Cpu className="h-8 w-8" /> },
                { number: '50+', label: 'AI Models', icon: <Brain className="h-8 w-8" /> },
                { number: '100%', label: 'Custom Solutions', icon: <Code className="h-8 w-8" /> },
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

     {/* Services Section - Enhanced */}
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
        <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
        <span className="text-blue-500 font-semibold">Our Expertise</span>
      </div>
    </AnimatedSection>
    
    <AnimatedSection animation="fade-up" delay={100} className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
        Our AI/ML Services
      </h2>
    </AnimatedSection>
    
    <AnimatedSection animation="fade-up" delay={200} className="text-center mb-12">
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Comprehensive AI and machine learning solutions tailored to your needs
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <AnimatedSection key={index} animation="fade-up" delay={300 + (index * 50)}>
          <div className="group relative h-full">
            <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
            
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col border border-gray-100/50 dark:border-gray-700/50">
              {/* Icon Container with Heading */}
              <div className="relative mb-4">
                <div className={`relative flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white transform group-hover:scale-105 transition-all duration-500`}>
                  {service.icon}
                  <h3 className="text-lg font-bold text-white whitespace-nowrap">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
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
              
              {/* Hover Effect Line */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>

      {/* Use Cases Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
        </div>

        {/* Floating AI Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          {['🤖', '🧠', '⚡', '📊', '🔍', '📈'].map((icon, i) => (
            <div
              key={`ai-icon-${i}`}
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
              <span className="text-orange-500 font-semibold">Real-World Applications</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world applications of AI/ML across industries
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 dark:border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                      <div className="group flex items-center space-x-3 bg-gradient-to-r from-blue-50/80 to-orange-50/80 dark:from-blue-900/20 dark:to-orange-900/20 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 dark:hover:from-blue-800/30 dark:hover:to-orange-800/30 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-3 h-3 rounded-full animate-pulse flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {useCase}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced */}
      <section className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
              <Code className="h-5 w-5 text-blue-500 animate-pulse" />
              <span className="text-blue-500 font-semibold">Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Leveraging industry-leading AI/ML frameworks and tools
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-gradient-to-br from-blue-50/80 to-orange-50/80 dark:from-blue-900/20 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 dark:border-gray-700/50">
                <div className="flex flex-wrap gap-4 justify-center">
                  {technologies.map((tech, index) => (
                    <AnimatedSection key={index} animation="scale" delay={index * 50}>
                      <span
                        className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                      >
                        {tech}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-move" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits of AI/ML
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation and insights
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-orange-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-100/50 dark:border-gray-700/50">
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

      {/* Workflow Section - Enhanced */}
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
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
              <ArrowRight className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Our Workflow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A systematic approach to delivering successful AI/ML solutions
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {workflow.map((step, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="group relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-blue-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-500 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Connection Line (except last item) */}
                    {index < workflow.length - 1 && (
                      <div className="absolute -bottom-6 left-6 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-orange-600 overflow-hidden">
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
              <Brain className="h-6 w-6 text-white animate-spin-slow" />
              <span className="text-white font-semibold text-lg">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              Why Choose SMARK Solutions?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
              Our team of AI/ML experts brings years of experience in developing innovative
              solutions that solve real-world problems. We combine technical expertise with
              business understanding to deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Discuss Your AI Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/portfolio" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View AI Projects
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