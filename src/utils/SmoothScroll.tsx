import React from 'react';
import { useRouter } from 'next/router';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const linkElement = target.closest('a[href^="#"], button[href^="#"]');
    
    if (linkElement) {
      const href = linkElement.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        
        window.location.hash = href.substring(1);
        
        router.push(router.pathname + href, undefined, { shallow: true });
      }
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default SmoothScroll;
