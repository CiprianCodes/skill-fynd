import React from 'react';

interface MenuIconProps {
  className?: string;
  isOpen?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ 
  className = "w-6 h-6 transition-transform duration-300", 
  isOpen = false,
  style = {},
  onClick
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault(); // Prevent default behavior
        if (onClick) onClick(e);
      }}
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
