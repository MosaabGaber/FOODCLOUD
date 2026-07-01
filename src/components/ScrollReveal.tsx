import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number;
  className?: string;
  direction?: 'up' | 'down' | 'none';
  stagger?: boolean;
  key?: any;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 650,
  threshold = 0.12,
  className = '',
  direction = 'up',
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Once revealed, we can unobserve if we want a one-way entrance animation
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // slightly offset trigger to feel natural
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransformClass = () => {
    if (!isRevealed) {
      if (direction === 'up') return 'translate-y-5 opacity-0';
      if (direction === 'down') return '-translate-y-5 opacity-0';
      if (direction === 'none') return 'opacity-0';
    }
    return 'translate-y-0 opacity-100';
  };

  return (
    <div
      id={`reveal-${Math.random().toString(36).substr(2, 9)}`}
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
