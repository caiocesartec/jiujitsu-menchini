import { useEffect, useState } from 'react';

function debounce(func: () => void, delay: number): () => void {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

export default function useIsMobile(
  breakpoint: number = 768,
  debounceDelay: number = 200,
): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
      console.log(mediaQuery);
    };

    const debouncedResize = debounce(handleResize, debounceDelay);

    handleResize();

    mediaQuery.addEventListener('change', debouncedResize);

    return () => {
      mediaQuery.removeEventListener('change', debouncedResize);
    };
  }, [breakpoint, debounceDelay]);

  return isMobile;
}
