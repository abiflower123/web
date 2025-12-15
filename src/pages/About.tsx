import AnimatedSection from '../components/common/AnimatedSection';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project and training program we deliver.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Working together with our clients to achieve their goals and vision.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to provide innovative solutions.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'Delivering top-notch quality in all our services and training programs.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Empowering businesses and students with innovative IT solutions and
              industry-ready skills since 2017
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p className="text-lg">
                  Smark Solutions is a dynamic and evolving organization that specializes in
                  providing comprehensive IT solutions and professional skill training. We are
                  committed to helping businesses thrive in the digital age while empowering
                  students and professionals with the knowledge and skills they need to succeed.
                </p>
                <p className="text-lg">
                  Our journey began in 2017 with Shiva Technology Solutions, where we focused
                  on delivering technical solutions including website development, software
                  applications, and enterprise resource planning systems. Building on years of
                  experience and success, we launched Smark Solutions in 2025 to expand our
                  services specifically for students and research scholars.
                </p>
                <p className="text-lg">
                  Today, we stand as a trusted partner for both businesses seeking innovative
                  IT solutions and students aspiring to excel in their academic and professional
                  journeys. Our team of experienced professionals brings together industry
                  expertise and educational insight to deliver exceptional results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of services designed to meet the diverse needs
              of our clients
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-12">
            <AnimatedSection animation="slide-right">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  IT Software Solutions
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We develop and deploy attractive, effective, and responsive websites,
                  e-commerce platforms, ERP systems, mobile applications, and custom
                  software solutions. Our team leverages the latest technologies to create
                  robust, scalable solutions that drive business growth and efficiency.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Skill Training & Development
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We offer comprehensive training programs in programming languages,
                  full-stack web development, AI/ML, and other cutting-edge technologies.
                  Our courses are designed and delivered by experienced professionals who
                  work on real-time projects, ensuring students gain practical, industry-ready
                  skills.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Student Projects & Internships
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide quality guidance and support for students working on their main
                  and mini projects across various disciplines. Our internship programs offer
                  students the opportunity to learn by working alongside our experienced team,
                  gaining hands-on experience with live projects and professional mentoring.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  PhD Guidance & Research Support
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We assist research scholars throughout their PhD journey, from admission
                  process guidance to topic selection, base paper research, problem
                  implementation, research paper writing, journal publications, and thesis
                  preparation. Our expertise helps make the research journey seamless and
                  successful.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl">
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                  Our team comprises highly qualified and experienced professionals who bring
                  together years of industry expertise and technical knowledge. Each team member
                  is passionate about delivering excellence and committed to helping our clients
                  and students achieve their goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Well-qualified and experienced team',
                    'Perfect environment to work and learn',
                    'Good experience in technical industry',
                    'Easily accessible location',
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-2 rounded-lg flex-shrink-0">
                        <Award className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </div>
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
