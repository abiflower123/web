import { useState } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
  // Websites
  {
    id: 1,
    title: 'Gnana Vidya Mandir',
    category: 'Websites',
    description: 'Educational institution website with student portal and information management',
    image: 'https://shivatech.solutions/assets/images/website-image/gvm.png',
  },
  {
    id: 2,
    title: 'Sree Vaikundar Polytechnic College',
    category: 'Websites',
    description: 'College website with course information, admissions, and campus updates',
    image: 'logo.png',
  },
  {
    id: 3,
    title: 'Travel Agency Website',
    category: 'Websites',
    description: 'Travel booking platform with tour packages and itinerary planning',
    image: '/portfolio-images/travel-agency.png',
  },
  {
    id: 4,
    title: 'E-Commerce Website',
    category: 'Websites',
    description: 'Online shopping platform with product catalog and secure payment integration',
    image: '/portfolio-images/ecommerce.png',
  },
  {
    id: 5,
    title: 'AEC Co-Operative Stores',
    category: 'Websites',
    description: 'Cooperative store management and online shopping platform',
    image: '/portfolio-images/aec.png',
  },
  {
    id: 6,
    title: 'Radiance IAS Academy',
    category: 'Websites',
    description: 'Educational coaching website with course materials and student portal',
    image: '/portfolio-images/radiance-ias.png',
  },
  {
    id: 7,
    title: 'Swaasthya Ayurveda',
    category: 'Websites',
    description: 'Ayurvedic healthcare website with treatment information and appointment booking',
    image: '/portfolio-images/swaasthya.png',
  },
  {
    id: 8,
    title: 'Nanjil Jobs',
    category: 'Websites',
    description: 'Job portal with listings, applications, and employer dashboard',
    image: '/portfolio-images/nanjil-jobs.png',
  },
  {
    id: 9,
    title: 'Online Survey Platform',
    category: 'Websites',
    description: 'Survey creation and data collection platform with analytics dashboard',
    image: '/portfolio-images/survey.png',
  },

  // Web Apps
  {
    id: 10,
    title: 'Hospital Management System',
    category: 'Web Apps',
    description: 'Comprehensive hospital management with patient records, billing, and appointment scheduling',
    image: '/portfolio-images/hospital.png',
  },
  {
    id: 11,
    title: 'Inventory and Accounts Management',
    category: 'Web Apps',
    description: 'Integrated inventory tracking with accounting and financial reporting',
    image: '/portfolio-images/inventory.png',
  },
  {
    id: 12,
    title: 'College Management System',
    category: 'Web Apps',
    description: 'Complete college administration with student, faculty, and course management',
    image: '/portfolio-images/college-mgmt.png',
  },
  {
    id: 13,
    title: 'School/College/University Management',
    category: 'Web Apps',
    description: 'Educational institution ERP with attendance, grading, and academic planning',
    image: '/portfolio-images/school-mgmt.png',
  },
  {
    id: 14,
    title: 'Job Application Portal',
    category: 'Web Apps',
    description: 'Advanced job portal with resume parsing, matching algorithms, and interview scheduling',
    image: '/portfolio-images/job-portal.png',
  },

  // Android Mobile Apps
  {
    id: 15,
    title: 'Locate n Ride',
    category: 'Android Mobile Apps',
    description: 'Ride-hailing and vehicle tracking application with real-time location services',
    image: '/portfolio-images/locate-n-ride.png',
  },
  {
    id: 16,
    title: 'Doctor Locator',
    category: 'Android Mobile Apps',
    description: 'Healthcare app to find nearby doctors, book appointments, and access medical records',
    image: '/portfolio-images/doctor-locator.png',
  },
  {
    id: 17,
    title: 'Mobile Tracking',
    category: 'Android Mobile Apps',
    description: 'Device tracking and security application with remote monitoring features',
    image: '/portfolio-images/mobile-tracking.png',
  },
];

  const categories = ['All', 'Websites', 'Web Apps', 'Android Mobile Apps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Showcasing our successful projects and innovative solutions delivered to
              satisfied clients
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {/* Image placeholder */}
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="text-gray-400 mb-2">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Project Image Placeholder</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span>View Details</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
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
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's work together to bring your ideas to life. Our experienced team is ready
              to help you build innovative solutions.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Start Your Project
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}