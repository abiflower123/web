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
    // Your logo file is l.png in public folder
    const img = new Image();
    img.src = '/l.png'; // Your logo file in public folder
    img.onload = () => {
      setTimeout(() => setLogoLoaded(true), 100);
    };
    img.onerror = () => {
      console.log('Logo l.png not found');
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
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-200/30 dark:border-gray-700/30' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg py-4'
      }`}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(249, 115, 22, 0.15) 0%, transparent 40%)
          `,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center group relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div 
              className={`relative transition-all duration-700 ${
                logoLoaded ? 'scale-100 opacity-100 rotate-0' : 'scale-95 opacity-0 -rotate-12'
              }`}
            >
              {/* Logo container */}
              <div className="relative">
                {/* Logo container with gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-150 to-blue-150 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Your l.png logo */}
                <div className="relative bg-transparent p-1 rounded-lg transition-all duration-300">
                  <img 
                    src="/l.png" // Your logo file in public folder
                    alt="SMARK Solutions Logo" 
                    className="h-16 w-auto md:h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{ maxHeight: '80px' }} // Medium size
                    onError={(e) => {
                      console.error('Failed to load logo: l.png');
                      // You can add a fallback text here if needed
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation and Actions */}
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
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                      location.pathname === link.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {/* Background effect on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg" />
                    
                    {link.name}
                    
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 transform origin-center transition-transform duration-300 ${
                        location.pathname === link.path
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                    
                    {/* Active indicator */}
                    {location.pathname === link.path && (
                      <>
                        <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-blue-500/50 blur-sm animate-pulse" />
                        <span className="absolute -top-1 right-1 h-2 w-2 bg-blue-500 rounded-full animate-ping opacity-75" />
                      </>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className={`relative transition-all duration-500 delay-700 ${
              logoLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative group ${
                logoLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              aria-label="Toggle menu"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:translate-x-3 relative group overflow-hidden ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-blue-500/15 to-orange-500/15 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {/* Hover effect background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
                
                <div className="relative flex items-center justify-between">
                  <span>{link.name}</span>
                  {location.pathname === link.path && (
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                  )}
                </div>
                
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-6 w-1 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full" />
                )}
              </Link>
            ))}
            
            
          </nav>
        </div>
      </div>
    </header>
  );
}