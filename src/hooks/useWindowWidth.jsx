import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevents SSR errors

    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

export default useWindowWidth;
