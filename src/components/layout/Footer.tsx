import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Code2 } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <img 
                src="/logo.png" 
                alt="Smark Solutions Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  // Fallback to icon if image not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback Icon */}
              <div className="hidden bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-lg shadow-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              
              <span className="text-xl font-bold text-white">
                Smark Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A leading IT solutions and skill-training company delivering innovative
              software services and empowering students with industry-ready skills.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>709, RST Building, Pattagasalianvilai, Nagercoil - 629002</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918300123435" className="hover:text-blue-400 transition-colors">
                    +91 8300 123435
                  </a>
                  <a href="tel:04652469848" className="hover:text-blue-400 transition-colors">
                    04652 469848
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:smarksolutions.ngl@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  smarksolutions.ngl@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Working Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday - Saturday</p>
                  <p className="text-xs text-gray-400">
                    (2nd & 4th Saturday - Holiday)
                  </p>
                  <p className="mt-1">9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2025 Smark Solutions. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Developed with excellence by Smark Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}