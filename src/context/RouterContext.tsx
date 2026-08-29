import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type RoutePath = '/' | '/menu' | '/privacy';
export type MenuTab = 'kitchen' | 'bar';

interface RouterContextType {
  currentRoute: RoutePath;
  currentTab: MenuTab;
  navigate: (path: RoutePath | string, options?: { tab?: MenuTab; scrollTo?: string }) => void;
  setMenuTab: (tab: MenuTab) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function parseCurrentLocation(): { route: RoutePath; tab: MenuTab; scrollTo?: string } {
  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const tabParam = searchParams.get('tab');

  let route: RoutePath = '/';
  let tab: MenuTab = tabParam === 'bar' ? 'bar' : 'kitchen';
  let scrollTo: string | undefined;

  if (pathname === '/menu' || hash === '#/menu' || hash.startsWith('#menu')) {
    route = '/menu';
    if (tabParam === 'bar' || hash.includes('bar')) {
      tab = 'bar';
    } else if (tabParam === 'kitchen' || hash.includes('kitchen')) {
      tab = 'kitchen';
    }
  } else if (pathname === '/privacy' || hash === '#/privacy' || hash.startsWith('#privacy')) {
    route = '/privacy';
  } else {
    route = '/';
    if (hash && hash !== '#' && !hash.startsWith('#/')) {
      scrollTo = hash.replace('#', '');
    }
  }

  return { route, tab, scrollTo };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() => parseCurrentLocation().route);
  const [currentTab, setCurrentTab] = useState<MenuTab>(() => parseCurrentLocation().tab);

  const navigate = useCallback(
    (target: RoutePath | string, options?: { tab?: MenuTab; scrollTo?: string }) => {
      let nextRoute: RoutePath = '/';
      let nextTab: MenuTab = options?.tab || currentTab;

      if (target.startsWith('/menu') || target.startsWith('#/menu')) {
        nextRoute = '/menu';
        if (options?.tab) {
          nextTab = options.tab;
        } else if (target.includes('bar')) {
          nextTab = 'bar';
        } else if (target.includes('kitchen')) {
          nextTab = 'kitchen';
        }
      } else if (target.startsWith('/privacy') || target.startsWith('#/privacy')) {
        nextRoute = '/privacy';
      } else {
        nextRoute = '/';
      }

      setCurrentRoute(nextRoute);
      if (options?.tab) {
        setCurrentTab(options.tab);
      } else if (nextRoute === '/menu') {
        setCurrentTab(nextTab);
      }

      // Update browser URL
      let nextUrl: string = nextRoute;
      if (nextRoute === '/menu') {
        nextUrl = `/menu?tab=${nextTab}`;
      } else if (nextRoute === '/' && options?.scrollTo) {
        nextUrl = `/#${options.scrollTo}`;
      }

      try {
        window.history.pushState({ route: nextRoute, tab: nextTab }, '', nextUrl);
      } catch {
        // Fallback for strict environments
        window.location.hash = nextUrl;
      }

      if (nextRoute === '/') {
        if (options?.scrollTo) {
          setTimeout(() => {
            const el = document.getElementById(options.scrollTo!);
            if (el) {
              const headerOffset = 80;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 50);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    },
    [currentTab]
  );

  useEffect(() => {
    const handlePopState = () => {
      const loc = parseCurrentLocation();
      setCurrentRoute(loc.route);
      setCurrentTab(loc.tab);
      if (loc.scrollTo && loc.route === '/') {
        setTimeout(() => {
          const el = document.getElementById(loc.scrollTo!);
          if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 50);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    // Initial scroll check if loaded with a hash
    const initial = parseCurrentLocation();
    if (initial.scrollTo && initial.route === '/') {
      setTimeout(() => {
        const el = document.getElementById(initial.scrollTo!);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentRoute,
        currentTab,
        navigate,
        setMenuTab: setCurrentTab,
      }}
    >
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
