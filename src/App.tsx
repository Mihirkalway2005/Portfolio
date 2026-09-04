import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { IntroSection } from './components/intro/IntroSection';
import { SelectedWorkSection } from './components/work/SelectedWorkSection';
import { TechStackSection } from './components/tech/TechStackSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ContactSection } from './components/contact/ContactSection';
import { AboutPage } from './components/about/AboutPage';
import { CustomCursor } from './components/common/CustomCursor';

const AppContent: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="relative min-h-screen bg-background text-primary font-sans selection:bg-primary selection:text-background flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 flex flex-col">
        {pathname === '/about' ? (
          <AboutPage />
        ) : (
          <>
            <HeroSection />
            <IntroSection />
            <SelectedWorkSection />
            <TechStackSection />
            <ExperienceSection />
            <ContactSection />
          </>
        )}
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
