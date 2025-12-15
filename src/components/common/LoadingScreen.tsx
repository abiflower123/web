import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl animate-float">
            <img 
              src="/logo.png" 
              alt="Loading" 
              className="h-24 w-24 object-contain animate-spin-slow"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Code2 className="hidden h-24 w-24 text-blue-600 dark:text-blue-400 animate-spin-slow" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4 animate-pulse">
          Smark Solutions
        </h2>
        
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full transition-all duration-300 animate-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-white/80 mt-4 text-sm font-medium">{progress}%</p>
      </div>
    </div>
  );
}