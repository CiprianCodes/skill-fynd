import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { SpinnerIcon } from '@/assets/svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  loading?: boolean;
  onClick?: () => void;
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
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 border border-transparent',
    secondary: 'bg-secondary text-white hover:bg-opacity-80 border border-transparent',
    outline: 'bg-transparent text-white hover:bg-purple-600/20 border border-white',
    text: 'bg-transparent text-white hover:bg-purple-600/10 border border-transparent',
  };
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={onClick}
      >
        {loading ? (
          <SpinnerIcon className="-ml-1 mr-2 h-4 w-4 text-current" />
        ) : null}
        {children}
      </a>
    ) : (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {loading ? (
          <SpinnerIcon className="-ml-1 mr-2 h-4 w-4 text-current" />
        ) : null}
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {loading ? (
        <SpinnerIcon className="-ml-1 mr-2 h-4 w-4 text-current" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
