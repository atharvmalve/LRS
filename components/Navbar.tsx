import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-in-out
        border-b border-transparent
        ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tight">
          atharv<span className="text-brand-red">.</span>
        </div>
        
           <a 
            href="https://cal.com/atharvmalve/30min?overlayCalendar=true" 
            target="_blank" 
            rel="noopener noreferrer"
          >
        <Button className="!py-2 !px-5 text-sm">
            Book a Demo
        </Button>
          </a>
      </div>
    </nav>
  );
};