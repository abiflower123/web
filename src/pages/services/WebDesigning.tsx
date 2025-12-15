import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { Code, Palette, Zap, Search, Smartphone, Shield } from 'lucide-react';

export default function WebDesigning() {
  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB',
    'Tailwind CSS', 'TypeScript', 'Next.js', 'Express.js'
  ];

  const process = [
    { title: 'Requirement Analysis', description: 'Understanding your business needs and objectives' },
    { title: 'Design & Planning', description: 'Creating wireframes and design mockups' },
    { title: 'Development', description: 'Building your website with latest technologies' },
    { title: 'Testing & QA', description: 'Rigorous testing to ensure quality' },
    { title: 'Deployment', description: 'Launching your website to production' },
    { title: 'Support & Maintenance', description: 'Ongoing support and updates' },
  ];

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Modern Design',
      description: 'Beautiful, intuitive designs that captivate your audience',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Responsive Layout',
      description: 'Perfect viewing experience across all devices',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast Performance',
      description: 'Optimized for speed and exceptional user experience',
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO Optimized',
      description: 'Built with SEO best practices for better visibility',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Industry-standard security measures implemented',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable codebase',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Designing</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Creating stunning, responsive websites that drive results and deliver exceptional
              user experiences
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600">
              Leveraging the latest technologies to build powerful web solutions
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex flex-wrap gap-4 justify-center">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Development Process
            </h2>
            <p className="text-lg text-gray-600">
              Our structured approach ensures quality and timely delivery
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Smark Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We deliver attractive, effective, responsive, and cost-efficient websites that
              help your business grow online. Our experienced team ensures quality,
              performance, and reliability in every project.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Get Started Today
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
