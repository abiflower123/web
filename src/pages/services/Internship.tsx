import { useState, FormEvent } from 'react';
import AnimatedSection from '../../components/common/AnimatedSection';
import Button from '../../components/common/Button';
import emailjs from '@emailjs/browser';
import { Award, Users, Code, BookOpen } from 'lucide-react';

export default function Internship() {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
    domain: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const domains = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'C', 'C++'],
    },
    {
      category: 'AI / ML',
      items: ['Machine Learning', 'Deep Learning', 'Generative AI'],
    },
    {
      category: 'Full Stack Web Development (MERN)',
      items: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      category: 'Backend Development',
      items: ['PHP', 'MySQL'],
    },
    {
      category: 'Frontend Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
  ];

  const benefits = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Live Projects',
      description: 'Work on real-world projects with our experienced team',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional Mentoring',
      description: 'Direct guidance from industry professionals',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certificate',
      description: 'Receive internship completion certificate',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Industry Exposure',
      description: 'Gain valuable industry experience and skills',
    },
  ];

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    // Initialize EmailJS with your public key
    emailjs.init('IblyrGZrui7lX-4DY');
    
    const result = await emailjs.send(
      'service_s62yzrs',    // Your Service ID
      'template_msd8aco',   // Your Template ID
      {
        from_name: formData.name,
        college: formData.college,
        from_email: formData.email,
        phone: formData.phone,
        domain: formData.domain,
        message: `Course Enrollment Request\n\nCollege: ${formData.college}\nDomain: ${formData.domain}`,
        subject: 'Course Enrollment - ' + formData.domain,
        to_name: 'Smark Solutions',
      }
    );

    console.log('Enrollment sent successfully:', result);
    setStatus('success');
    setFormData({ name: '', college: '', email: '', phone: '', domain: '' });

    setTimeout(() => setStatus('idle'), 5000);
  } catch (error) {
    console.error('Enrollment failed:', error);
    setStatus('error');
    setTimeout(() => setStatus('idle'), 5000);
  }
};

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Internship Programs</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Industry-focused internship programs providing hands-on experience with real
              projects and professional mentoring
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Internship?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gain practical experience and industry-ready skills that employers value
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl inline-block mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              Choose from a wide range of technology domains
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-8">
            {domains.map((domain, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{domain.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {domain.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Apply for Internship
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to start your internship journey with us
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                      College Name
                    </label>
                    <input
                      type="text"
                      id="college"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your College Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email ID
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Domain
                    </label>
                    <select
                      id="domain"
                      required
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a domain</option>
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="C/C++">C/C++</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Deep Learning">Deep Learning</option>
                      <option value="Generative AI">Generative AI</option>
                      <option value="Full Stack MERN">Full Stack Web Development (MERN)</option>
                      <option value="Backend Development">Backend Development (PHP/MySQL)</option>
                      <option value="Frontend Development">Frontend Development</option>
                    </select>
                  </div>

                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Application submitted successfully! We'll contact you soon.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Failed to submit application. Please try again or contact us directly.
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    {status === 'loading' ? 'Submitting...' : 'Apply Now'}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
