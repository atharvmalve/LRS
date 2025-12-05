import React from 'react'; 
import { Button } from './Button';
import { Reveal } from './Reveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center max-w-3xl mx-auto pb-20">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
          Ready to See How This Works for Your Business?
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://cal.com/atharvmalve/30min?overlayCalendar=true" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-10 py-5 w-full md:w-auto min-w-[200px]">
              Book a Demo
            </Button>
          </a>
          <p className="text-white/40 text-sm mt-4 font-medium">
            No credit card required. Free consultation.
          </p>
        </div>
      </Reveal>
    </section>
  );
};
