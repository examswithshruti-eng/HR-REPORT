import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(selectors, options = {}) {
  const [activeId, setActiveId] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector)).filter(Boolean);
    
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { 
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0.1,
      ...options 
    });

    elements.forEach((el) => observer.current.observe(el));

    return () => observer.current.disconnect();
  }, [selectors, options]);

  return activeId;
}
