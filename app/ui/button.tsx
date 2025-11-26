import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'blue' | 'yellow';
  size?: 'sm' | 'md';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'blue', size = 'md', className = '', ...props }) => {
  const variants = {
    blue: 'bg-blue-500 text-white',
    yellow: 'bg-yellow-400 text-gray-900',
  };
  
  const sizes = {
    sm: 'px-4 py-1 text-xs',
    md: 'px-6 py-2 text-sm'
  };
  
  return (
    <button 
      className={`rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;