import React from 'react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center max-w-4xl mx-auto mt-20">
      <Reveal>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
          Turn More Leads Into<br className="hidden md:block" /> Booked Jobs, <span className="text-brand-red">Effortlessly.</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-medium opacity-90">
          Our Lead Response System plugs into your existing ads, website, and lead sources to turn more leads into booked jobs, without hiring staff, chasing prospects, or learning new software.
        </p>
      </Reveal>

      <Reveal delay={400}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
          <ChecklistItem text="No CRM learning." />
          <ChecklistItem text="No tech headaches." />
        </div>
        <div className="mt-4 md:mt-6">
           <ChecklistItem text="Just consistent follow-up, faster response times, and more jobs booked." />
        </div>
      </Reveal>
    </section>
  );
};

const ChecklistItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <svg 
      className="w-5 h-5 text-brand-red shrink-0" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd" 
      />
    </svg>
    <span className="text-white font-medium text-base md:text-lg tracking-wide">{text}</span>
  </div>
);