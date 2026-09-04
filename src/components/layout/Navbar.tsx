import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useRouter } from '../../context/RouterContext';

export const Navbar: React.FC = () => {
  const { pathname, navigate } = useRouter();
  const isAboutActive = pathname === '/about';

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#work');
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/about');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#contact');
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full border-b border-border/80 bg-background/90 backdrop-blur-md sticky top-0 z-40"
    >
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={handleBrandClick}
            className="text-[15px] font-bold tracking-tight text-primary uppercase hover:opacity-75 transition-opacity"
          >
            Mihir Kalway<span className="text-secondary-muted font-normal text-xs ml-0.5">®</span>
          </a>
        </div>

        {/* Navigation Items + Theme Switcher */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <nav className="flex items-center gap-5 sm:gap-6 md:gap-8">
            <a
              href="/#work"
              onClick={handleWorkClick}
              className="text-[13px] font-medium tracking-wide uppercase text-secondary hover:text-primary transition-colors"
            >
              Work
            </a>
            <a
              href="/about"
              onClick={handleAboutClick}
              className={`text-[13px] tracking-wide uppercase transition-colors flex items-center gap-1.5 ${
                isAboutActive
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary font-medium'
              }`}
            >
              About
              {isAboutActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-subtle" />
              )}
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
              onClick={handleContactClick}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
