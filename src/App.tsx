import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { CustomCursor } from './components/common/CustomCursor';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-primary font-sans selection:bg-primary selection:text-background flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
