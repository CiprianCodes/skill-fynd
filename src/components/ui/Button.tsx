import React, { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';
import { SpinnerIcon } from '@/assets/svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  loading?: boolean;
  onClick?: (e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  loading = false,
  onClick,
  ...rest
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  
  // Button sizes
  const sizes = {
    sm: 'py-1.5 px-3 text-xs',
    md: 'py-2 px-4 text-sm sm:text-base',
    lg: 'py-2.5 px-6 text-base sm:text-lg'
  };

  // Button variants
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg',
    secondary: 'bg-card text-white hover:bg-card-hover',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
    text: 'bg-transparent text-white hover:text-purple-400'
  };

  const buttonClasses = `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;
  
  const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };
  
  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={handleClick}
      >
        {loading ? (
          <SpinnerIcon className="-ml-1 mr-2 h-4 w-4 text-current" />
        ) : null}
        {children}
      </a>
    ) : (
      <a href={href} className={buttonClasses} onClick={handleClick}>
        {loading ? (
          <SpinnerIcon className="-ml-1 mr-2 h-4 w-4 text-current" />
        ) : null}
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={handleClick} {...rest}>
      {loading ? (
        <SpinnerIcon className="-ml-1 mr-2 h-4 w-4 text-current" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
