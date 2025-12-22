import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingProgress: number;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Initialize loading state
    document.body.classList.add('page-loading');
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small delay before removing loading state
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              document.body.classList.remove('page-loading');
            }, 100);
          }, 200);
          return 100;
        }
        return prev + 3;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, loadingProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};