import React from 'react';

interface WavePatternProps {
  className?: string;
  fill?: string;
  fillOpacity?: string;
}

const WavePattern: React.FC<WavePatternProps> = ({ 
  className = "w-full h-auto",
  fill = "#0a0a18", 
  fillOpacity = "1"
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={className}>
      <path 
        fill={fill} 
        fillOpacity={fillOpacity} 
        d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,224C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
};

export default WavePattern;
