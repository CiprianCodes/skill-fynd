import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation,
  duration = 500,
  delay = 0,
  className = '',
  threshold = 0.1,
  once = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    }, { threshold });

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, once]);

  const shouldBeVisible = isVisible || (once && hasAnimated);

  const getAnimationClass = () => {
    if (!shouldBeVisible) {
      return {
        opacity: '0',
        transform: 
          animation === 'fade-up' ? 'translateY(20px)' :
          animation === 'fade-down' ? 'translateY(-20px)' :
          animation === 'fade-left' ? 'translateX(20px)' :
          animation === 'fade-right' ? 'translateX(-20px)' :
          animation === 'zoom-in' ? 'scale(0.9)' :
          animation === 'zoom-out' ? 'scale(1.1)' : 'none'
      };
    }
    return {
      opacity: '1',
      transform: 'none'
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getAnimationClass(),
        transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
