import AnimatedSection from '../components/common/AnimatedSection';
import ContactForm from '../components/home/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Visit Us',
      details: ['709, RST Building, Pattagasalianvilai', 'Nagercoil - 629002'],
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Call Us',
      details: ['+91 8300 123435', '04652 469848'],
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Us',
      details: ['smarksolutions.ngl@gmail.com'],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Working Hours',
      details: ['Monday - Saturday', '(2nd & 4th Saturday - Holiday)', '9:30 AM - 6:30 PM'],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Let's discuss how we can help you achieve your goals. Get in touch with our
              team today
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 md:p-12">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our office location
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={200}>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.4849649!2d77.4333!3d8.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTAnNTkuOSJOIDc3wrAyNicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smark Solutions Location"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need software solutions or professional training, we're here to
                help. Contact us today to discuss your requirements and discover how we can
                support your success.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  We Look Forward to Hearing From You!
                </p>
                <p className="text-gray-600">
                  Our team is available during working hours to answer your questions and
                  provide the information you need.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
