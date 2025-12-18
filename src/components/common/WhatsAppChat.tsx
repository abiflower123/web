import { useState } from 'react';
import { X } from 'lucide-react';

// WhatsApp logo SVG
const WhatsAppIcon = ({ className = "h-7 w-7" }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.49C18.18 1.14 15.09 0 12 0S5.82 1.14 3.48 3.49C1.14 5.82 0 8.91 0 12c0 2.12.67 4.12 1.82 5.77L0 24l6.23-1.82A11.94 11.94 0 0 0 12 24c3.09 0 6.18-1.14 8.52-3.49C22.86 18.18 24 15.09 24 12c0-3.09-1.14-6.18-3.48-8.51zM12 21.6c-2.02 0-3.93-.56-5.58-1.54l-.4-.24-3.77 1.1 1.1-3.77-.24-.4A9.6 9.6 0 0 1 2.4 12c0-5.3 4.3-9.6 9.6-9.6 5.3 0 9.6 4.3 9.6 9.6 0 5.3-4.3 9.6-9.6 9.6zm5.5-7.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.67.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.37.45-.55.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.6-.49-.52-.67-.52-.18 0-.37-.01-.57-.01-.2 0-.52.08-.8.4-.28.3-1.07 1.05-1.07 2.56 0 1.51 1.1 2.97 1.25 3.17.15.2 2.15 3.28 5.22 4.6 3.07 1.32 3.07.87 3.62.82.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.3-.2-.6-.35z" />
  </svg>
);

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '918300123435';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-2 animate-float-up w-80 max-w-[calc(100vw-3rem)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 text-white p-2 rounded-full">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp Chat</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Hi there! 👋 How can we help you today?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Open WhatsApp
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 animate-bounce-slow group"
        aria-label="WhatsApp Chat"
      >
        <WhatsAppIcon className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          1
        </span>
      </button>
    </div>
  );
}