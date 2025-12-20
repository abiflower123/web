import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShow(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollUp}
      className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}