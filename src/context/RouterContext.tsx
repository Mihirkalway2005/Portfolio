import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  pathname: string;
  hash: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const normalizePath = (path: string): string => {
  const clean = path.split('?')[0].split('#')[0];
  if (!clean || clean === '/') return '/';
  return clean.replace(/\/+$/, '') || '/';
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    return normalizePath(window.location.pathname);
  });

  const [hash, setHash] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return window.location.hash;
  });

  const scrollToElement = useCallback((targetId: string, smooth: boolean = true) => {
    const id = targetId.replace(/^#/, '');
    if (!id) return;
    
    // Give DOM a frame to mount if route changed
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });
        }
      }, 50);
    });
  }, []);

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') return;

    // Handle mailto or absolute external links
    if (to.startsWith('mailto:') || to.startsWith('http://') || to.startsWith('https://')) {
      window.location.href = to;
      return;
    }

    // Parse path and hash
    const [pathPart, hashPart] = to.split('#');
    const targetHash = hashPart ? `#${hashPart}` : '';
    const targetPath = pathPart ? normalizePath(pathPart) : pathname;

    const isDifferentPath = targetPath !== pathname;

    // Update history
    const fullUrl = targetPath === '/' ? (targetHash ? `/${targetHash}` : '/') : `${targetPath}${targetHash}`;
    window.history.pushState({}, '', fullUrl);

    setPathname(targetPath);
    setHash(targetHash);

    if (isDifferentPath) {
      if (targetHash) {
        scrollToElement(targetHash, true);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      if (targetHash) {
        scrollToElement(targetHash, true);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [pathname, scrollToElement]);

  useEffect(() => {
    const handlePopState = () => {
      const currentNorm = normalizePath(window.location.pathname);
      const currentHash = window.location.hash;
      setPathname(currentNorm);
      setHash(currentHash);

      if (currentHash) {
        scrollToElement(currentHash, false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToElement]);

  // Handle initial hash scroll if opened directly with hash (e.g. /#work or /#contact)
  useEffect(() => {
    if (window.location.hash) {
      scrollToElement(window.location.hash, true);
    }
  }, [scrollToElement]);

  return (
    <RouterContext.Provider value={{ pathname, hash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
