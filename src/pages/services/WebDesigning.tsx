import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { Code, Palette, Zap, Search, Smartphone, Shield, Brain, TrendingUp, Target, CheckCircle, ArrowRight, Sparkles, Cpu, Eye, MessageSquare, Database, Users, Award, Clock } from 'lucide-react';

export default function WebDesigning() {
  const technologies = [
    { name: 'HTML5', color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600' },
    { name: 'React', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Node.js', color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', color: 'from-emerald-500 to-emerald-600' },
    { name: 'Tailwind CSS', color: 'from-teal-500 to-teal-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
    { name: 'Next.js', color: 'from-gray-800 to-gray-900' },
    { name: 'Express.js', color: 'from-green-600 to-green-700' }
  ];

  const process = [
    { 
      title: 'Requirement Analysis', 
      description: 'Understanding your business needs and objectives',
      icon: <Search className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Design & Planning', 
      description: 'Creating wireframes and design mockups',
      icon: <Palette className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Development', 
      description: 'Building your website with latest technologies',
      icon: <Code className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    { 
      title: 'Testing & QA', 
      description: 'Rigorous testing to ensure quality',
      icon: <CheckCircle className="h-6 w-6" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      title: 'Deployment', 
      description: 'Launching your website to production',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      title: 'Support & Maintenance', 
      description: 'Ongoing support and updates',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-red-500 to-red-600'
    },
  ];

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Modern Design',
      description: 'Beautiful, intuitive designs that captivate your audience',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Responsive Layout',
      description: 'Perfect viewing experience across all devices',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast Performance',
      description: 'Optimized for speed and exceptional user experience',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO Optimized',
      description: 'Built with SEO best practices for better visibility',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Industry-standard security measures implemented',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable codebase',
      color: 'from-red-500 to-red-600',
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Increased Conversions',
      description: 'Optimized designs that drive more business'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Better User Engagement',
      description: 'Intuitive interfaces that keep users coming back'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Brand Consistency',
      description: 'Cohesive design across all digital touchpoints'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Mobile-First Approach',
      description: 'Priority on mobile user experience'
    }
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-8">
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

        {/* Code Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(20)].map((_, i) => (
            <div
              key={`code-hero-${i}`}
              className="absolute font-mono text-blue-500 dark:text-cyan-400 text-sm md:text-base"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatTech ${20 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.3,
              }}
            >
              {`<${Math.random() > 0.5 ? 'div' : 'span'}>`}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-6xl mx-auto">
            {/* Header */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-orange-100/80 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
              <Code className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Digital Experience
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight animate-text-gradient drop-shadow-lg">
              Web Designing
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-800 dark:text-gray-200 font-medium px-4 animate-slide-up delay-200 mb-12 backdrop-blur-sm bg-white/40 dark:bg-gray-900/50 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
              Creating stunning, <span className="text-blue-500 font-semibold">responsive websites</span> that drive results and deliver 
              <span className="text-orange-500 font-semibold"> exceptional user experiences</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-400">
              {[
                { number: '99%', label: 'Client Satisfaction', icon: <CheckCircle className="h-8 w-8" /> },
                { number: '50+', label: 'Projects Delivered', icon: <Code className="h-8 w-8" /> },
                { number: '100%', label: 'Mobile Responsive', icon: <Smartphone className="h-8 w-8" /> },
                { number: '24/7', label: 'Support', icon: <Shield className="h-8 w-8" /> },
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
    <AnimatedSection animation="fade-up" delay={0} className="text-center mb-12">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
        <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
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
        Comprehensive web development services tailored to your business needs
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <AnimatedSection key={index} animation="fade-up" delay={300 + (index * 50)}>
          <div className="group relative h-full">
            <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-95 group-hover:scale-100`} />
            
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col border border-gray-100/50 dark:border-gray-700/50">
              <div className="relative mb-4">
                <div className={`relative flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white transform group-hover:scale-105 transition-all duration-500`}>
                  {feature.icon}
                  <h3 className="text-lg font-bold text-white whitespace-nowrap">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
              
              <div className="mt-6">
                <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-full animate-progress-bar"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </div>
              </div>
              
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
      {/* Technologies Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-flow" />
        </div>

        {/* Floating Code Icons */}
        <div className="absolute inset-0 z-0 opacity-10">
          {['</>', '{}', '[]', '()', '=>', 'div', 'span', 'class'].map((icon, i) => (
            <div
              key={`code-icon-${i}`}
              className="absolute font-mono text-2xl animate-float-slow"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 15}%`,
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
              <Code className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold">Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest technologies to build powerful web solutions
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 dark:border-gray-700/50">
                <div className="flex flex-wrap gap-4 justify-center">
                  {technologies.map((tech, index) => (
                    <AnimatedSection key={index} animation="scale" delay={index * 50}>
                      <span
                        className={`bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
                      >
                        {tech.name}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="text-orange-500 font-semibold">Business Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Key Benefits
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
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

      {/* Process Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 animate-gradient-move" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/30 backdrop-blur-sm">
              <Target className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures quality and timely delivery
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-6">
            {process.map((step, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="group relative">
                  <div className={`absolute -inset-3 bg-gradient-to-r ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                  
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100/50 dark:border-gray-700/50">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-br ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-500 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Connection Line */}
                    {index < process.length - 1 && (
                      <div className="absolute -bottom-6 left-6 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920')] bg-cover bg-center opacity-10" />
          
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
              <Palette className="h-6 w-6 text-white animate-spin-slow" />
              <span className="text-white font-semibold text-lg">Transform Your Online Presence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              Why Choose SMARK Solutions?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
              We deliver attractive, effective, responsive, and cost-efficient websites that
              help your business grow online. Our experienced team ensures quality,
              performance, and reliability in every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                to="/portfolio" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View Our Work
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