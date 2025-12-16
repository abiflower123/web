import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const img = new Image();
    img.src = '/logo.png';
    img.onload = () => {
      setTimeout(() => setLogoLoaded(true), 100);
    };
    img.onerror = () => {
      setTimeout(() => setLogoLoaded(true), 100);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div 
              className={`transition-all duration-700 ${logoLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{ animation: logoLoaded ? 'scaleIn 0.6s ease-out' : 'none' }}
            >
              <img 
                src="/logo.png"
                alt="Smark Solutions Logo" 
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 p-2.5 rounded-lg h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-150 ${logoLoaded ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Smark Solutions
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div
                  key={link.path}
                  className={`transition-all duration-500 delay-${index * 100} ${
                    logoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                      location.pathname === link.path
                        ? 'text-accent dark:text-accent-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-accent transform origin-center transition-transform duration-300 ${
                        location.pathname === link.path
                          ? 'scale-x-100 bg-gradient-to-r from-accent to-accent'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                    {/* Active item glowing effect */}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-accent blur-sm animate-pulse" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            <div className={`transition-all duration-500 delay-700 ${logoLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
                logoLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-accent dark:text-accent-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}