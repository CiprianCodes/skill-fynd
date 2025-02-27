import React from 'react';

interface FooterGridPatternProps {
  className?: string;
}

const FooterGridPattern: React.FC<FooterGridPatternProps> = ({ className = "opacity-5" }) => {
  return (
    <div className={className}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>
    </div>
  );
};

export default FooterGridPattern;
