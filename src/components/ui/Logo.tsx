import React from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/assets/svg';

interface LogoProps {
  className?: string;
  textColor?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  textColor = 'text-primary-light',
  withText = true 
}) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <LogoIcon />
        
        {withText && (
          <div className={`font-bold text-sm sm:text-xl ${textColor}`}>
            Skill <span className="font-extrabold">Fynd</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
