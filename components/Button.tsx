import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        bg-brand-red text-white font-semibold 
        px-6 py-3 md:px-8 md:py-4
        rounded-[4px] 
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-[#ff4d4d]
        active:scale-95
        text-sm md:text-base tracking-wide
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};