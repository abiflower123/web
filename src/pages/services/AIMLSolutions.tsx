import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { Brain, TrendingUp, Eye, MessageSquare, Database, Cpu } from 'lucide-react';

export default function AIMLSolutions() {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to predict future trends and make data-driven decisions',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Natural Language Processing',
      description: 'Build chatbots, sentiment analysis, and text processing solutions',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual data analysis',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Analytics',
      description: 'Extract insights from complex datasets using advanced algorithms',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Deep Learning',
      description: 'Neural networks and advanced AI models for complex problems',
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed for your specific business needs',
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

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI / ML Solutions</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Transform your business with cutting-edge artificial intelligence and machine
              learning solutions that drive innovation and efficiency
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI/ML Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and machine learning solutions tailored to your needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
              Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Real-world applications of AI/ML across industries
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-2 h-2 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{useCase}</span>
                    </div>
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
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600">
              Leveraging industry-leading AI/ML frameworks and tools
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Workflow
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to delivering successful AI/ML solutions
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {workflow.map((step, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
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
              Our team of AI/ML experts brings years of experience in developing innovative
              solutions that solve real-world problems. We combine technical expertise with
              business understanding to deliver measurable results.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Discuss Your AI Project
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
