import React from 'react';

interface LogoIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoIcon: React.FC<LogoIconProps> = ({ 
  className = 'mr-2', 
  width = 30, 
  height = 30 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 2C9.16 2 2 9.16 2 18C2 26.84 9.16 34 18 34C26.84 34 34 26.84 34 18C34 9.16 26.84 2 18 2Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14Z"
        fill="white"
      />
      <path
        d="M23 14C24.1046 14 25 13.1046 25 12C25 10.8954 24.1046 10 23 10C21.8954 10 21 10.8954 21 12C21 13.1046 21.8954 14 23 14Z"
        fill="white"
      />
      <path
        d="M18 28C22.4183 28 26 24.4183 26 20H10C10 24.4183 13.5817 28 18 28Z"
        fill="white"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="2" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
