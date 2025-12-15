import { Code, Brain, GraduationCap, FolderKanban, Users, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';

export default function Services() {
  const services = [
    {
      icon: <Code className="h-16 w-16" />,
      title: 'Web Designing',
      description: 'Professional website development with modern design, responsive layouts, and seamless user experience. We create websites that drive results.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
      link: '/services/web-designing',
    },
    {
      icon: <Brain className="h-16 w-16" />,
      title: 'AI / ML Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions to automate processes and gain valuable insights from your data.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      link: '/services/ai-ml',
    },
    {
      icon: <FolderKanban className="h-16 w-16" />,
      title: 'Student Projects',
      description: 'Comprehensive project development and guidance for students across various disciplines with quality support and mentoring.',
      features: ['Main Projects', 'Mini Projects', 'Research Projects', 'Technical Guidance'],
      link: '/services/student-projects',
    },
    {
      icon: <Users className="h-16 w-16" />,
      title: 'Internship Programs',
      description: 'Industry-focused internship programs providing hands-on experience with real projects and direct mentoring by professionals.',
      features: ['Live Projects', 'Professional Mentoring', 'Certificate', 'Industry Exposure'],
      link: '/services/internship',
    },
    {
      icon: <BookOpen className="h-16 w-16" />,
      title: 'Training Courses',
      description: 'Professional training courses delivered by experienced real-time working professionals covering latest technologies.',
      features: ['Expert Trainers', 'Practical Learning', 'Updated Curriculum', 'Certification'],
      link: '/services/courses',
    },
    {
      icon: <GraduationCap className="h-16 w-16" />,
      title: 'PhD Guidance',
      description: 'Complete assistance for research scholars from admission to thesis submission including topic selection and paper publication.',
      features: ['Topic Selection', 'Research Support', 'Paper Writing', 'Thesis Preparation'],
      link: '/contact',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive IT solutions and training programs designed to elevate your
              business and empower your career
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
              From innovative software development to industry-ready skill training, we provide
              top-notch quality services tailored to your needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-5 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button to={service.link} variant="primary" size="md" className="w-full mt-auto">
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Smark Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We combine technical expertise with practical experience to deliver exceptional
                results that exceed expectations
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Expert Team', description: 'Highly qualified and experienced professionals' },
                  { title: 'Quality Service', description: 'Top-notch quality in every project we deliver' },
                  { title: 'Affordable Pricing', description: 'Cost-effective solutions without compromising quality' },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="scale" delay={index * 100}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}