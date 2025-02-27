import React from 'react';

interface MenuIconProps {
  className?: string;
  isOpen?: boolean;
  style?: React.CSSProperties;
}

const MenuIcon: React.FC<MenuIconProps> = ({ 
  className = "w-6 h-6 transition-transform duration-300", 
  isOpen = false,
  style = {} 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className={className}
      style={style}
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
};

export default MenuIcon;
