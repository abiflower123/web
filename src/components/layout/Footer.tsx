import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-300 overflow-hidden transition-all duration-500">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Logo and Description Section - PROPERLY ALIGNED */}
          <div className={`space-y-4 ${logoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-100`}>
            {/* Logo as heading - same height as other headings */}
            <div className="h-9 flex items-center mb-4">
              <Link
                to="/"
                className="group inline-block h-full"
              >
                <div className="relative h-full flex items-center">
                  {/* Logo container */}
                  <div className="relative bg-transparent p-1 rounded-lg transition-all duration-300 h-full flex items-center">
                    <img 
                      src="/l.png"
                      alt="SMARK Solutions Logo" 
                      className="h-8 w-auto object-contain md:h-9"
                    />
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Description - starts at same position as list items */}
            <p className="text-sm leading-relaxed text-gray-400">
              A leading IT solutions and skill-training company delivering innovative
              software services and empowering students with industry-ready skills.
            </p>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 ${logoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-white font-semibold text-lg mb-4 h-9 flex items-center">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.path} className={`transition-all duration-500 delay-${index * 100} ${logoVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-all duration-300 inline-block hover:translate-x-1 transform group"
                  >
                    {link.name}
                    <span className="block h-px w-0 bg-gradient-to-r from-primary-400 to-transparent group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-300 ${logoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-white font-semibold text-lg mb-4 h-9 flex items-center">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm transition-all duration-500 delay-100 hover:translate-x-1">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">709, RST Building, Pattagasalianvilai, Nagercoil - 629002</span>
              </li>
              <li className="flex items-start space-x-3 text-sm transition-all duration-500 delay-200 hover:translate-x-1">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+918300123435" className="text-gray-400 hover:text-primary-400 transition-colors">
                    +91 8300 123435
                  </a>
                  <a href="tel:04652469848" className="text-gray-400 hover:text-primary-400 transition-colors pl-3">
                    04652 469848
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm transition-all duration-500 delay-300 hover:translate-x-1">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:smarksolutions.ngl@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  smarksolutions.ngl@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className={`transition-all duration-700 delay-400 ${logoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-white font-semibold text-lg mb-4 h-9 flex items-center">Working Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm transition-all duration-500 delay-500 hover:translate-x-1">
                <Clock className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday - Saturday</p>
                  <p className="text-xs text-gray-400">
                    (2nd & 4th Saturday - Holiday)
                  </p>
                  <p className="mt-1 text-gray-400">9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className={`border-t border-gray-700 mt-8 pt-8 text-center transition-all duration-1000 delay-500 ${logoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-sm text-gray-400">
            © 2025 SMARK Solutions. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Developed with excellence by SMARK Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}