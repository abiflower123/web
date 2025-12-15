import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { FileCode, AlertCircle, Bot, Mic, FileText, Video, BookOpen } from 'lucide-react';

export default function StudentProjects() {
  const projects = [
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: 'Credit Card Fraud Detection',
      description: 'Machine learning system to detect fraudulent credit card transactions using advanced algorithms',
      category: 'AI/ML',
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Fake News Detection',
      description: 'NLP-based solution to identify and classify fake news articles using deep learning',
      category: 'AI/ML',
    },
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: 'Object Tracking and Alert System',
      description: 'Computer vision system for real-time object tracking and automated alert generation',
      category: 'Computer Vision',
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI chatbot with natural language understanding capabilities',
      category: 'NLP',
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: 'AI Voice Assistance',
      description: 'Voice-enabled AI assistant with speech recognition and natural language processing',
      category: 'NLP',
    },
    {
      icon: <FileCode className="h-10 w-10" />,
      title: 'Resume Parser',
      description: 'Automated resume parsing system to extract and structure candidate information',
      category: 'NLP',
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: 'AI-Based Video to Blog Generator',
      description: 'Transform video content into well-structured blog posts using AI technology',
      category: 'AI/ML',
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: 'AI-Based Video to Quiz Generator',
      description: 'Automatically generate educational quizzes from video content using AI',
      category: 'AI/ML',
    },
  ];

  const domains = [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'IoT Projects',
    'Blockchain',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Projects</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Quality guidance and support for students working on their main and mini
              projects across various disciplines
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of innovative student projects across cutting-edge
              technologies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6">
                    {project.icon}
                  </div>

                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 flex-grow">{project.description}</p>
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
              Available Domains
            </h2>
            <p className="text-lg text-gray-600">
              We provide project guidance across multiple technology domains
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="scale">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {domains.map((domain, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="text-sm font-semibold text-gray-700">{domain}</span>
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
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Provide
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Complete Project Development',
                  description: 'End-to-end development from concept to deployment',
                },
                {
                  title: 'Expert Guidance',
                  description: 'Professional mentoring by experienced developers',
                },
                {
                  title: 'Documentation Support',
                  description: 'Comprehensive documentation and reports',
                },
                {
                  title: 'Presentation Preparation',
                  description: 'Help with project presentations and demos',
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 100}>
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              To Know More Projects
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We have completed numerous successful projects across various domains.
              Contact us to learn about more projects and discuss your requirements.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
