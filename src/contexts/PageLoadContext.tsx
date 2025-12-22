import React, { createContext, useState, useContext, useEffect } from 'react';

interface PageLoadContextType {
  isPageLoaded: boolean;
  markAsLoaded: () => void;
}

const PageLoadContext = createContext<PageLoadContextType | undefined>(undefined);

export const PageLoadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Check if this is a fresh page load (not SPA navigation)
  useEffect(() => {
    // This runs only on actual page load
    console.log('PageLoadProvider: Component mounted - fresh page load detected');
    
    // Store that we're loading in sessionStorage (cleared when tab closes)
    sessionStorage.setItem('isPageLoading', 'true');
    
    const handleBeforeUnload = () => {
      // When user refreshes or closes tab, remove the loaded flag
      sessionStorage.removeItem('pageHasLoaded');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const markAsLoaded = () => {
    console.log('PageLoadProvider: Marking page as loaded');
    setIsPageLoaded(true);
    sessionStorage.setItem('pageHasLoaded', 'true');
    sessionStorage.removeItem('isPageLoading');
  };

  return (
    <PageLoadContext.Provider value={{ isPageLoaded, markAsLoaded }}>
      {children}
    </PageLoadContext.Provider>
  );
};

export const usePageLoad = () => {
  const context = useContext(PageLoadContext);
  if (context === undefined) {
    throw new Error('usePageLoad must be used within a PageLoadProvider');
  }
  return context;
};