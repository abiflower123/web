import { Code, Brain, GraduationCap, FolderKanban, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import StatsCounter from '../components/home/StatsCounter';
import ContactForm from '../components/home/ContactForm';

export default function Home() {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Designing',
      description: 'Crafting beautiful, responsive, and user-friendly websites tailored to your business needs.',
      link: '/services/web-designing',
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI/ML Solutions',
      description: 'Innovative artificial intelligence and machine learning solutions to transform your business.',
      link: '/services/ai-ml',
    },
    {
      icon: <FolderKanban className="h-12 w-12" />,
      title: 'Student Projects',
      description: 'Comprehensive project development and guidance for students across various domains.',
      link: '/services/student-projects',
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'Internship Courses',
      description: 'Industry-focused internship programs and professional training courses for skill development.',
      link: '/services/internship',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
              Welcome to Smark Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              A leading IT solutions and skill-training company delivering innovative
              software services and empowering students with industry-ready skills.
            </p>
            <Button to="/contact" size="lg" className="shadow-2xl">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Smark Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                In 2017, we started Shiva Technology Solutions where we provide technical
                solutions like building websites and software applications. In 2025, we
                launched Smark Solutions to assist students and research scholars in their
                various works including PhD guidance, projects, internships, and professional
                training. We are committed to delivering excellence through our expertise
                and dedication.
              </p>
              <Button to="/about" variant="outline" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions and training programs designed to elevate your
              business and career
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button to={service.link} variant="outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for our excellence
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={200}>
            <StatsCounter />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h2>
              <p className="text-lg text-gray-600">
                Have a project in mind? Let's discuss how we can help you succeed.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
