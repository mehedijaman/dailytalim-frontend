import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const storedWidth = localStorage.getItem('width');
  const [width, setWidth] = useState(storedWidth);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevents SSR errors

    const handleResize = async () => {
      localStorage.setItem('width', window.innerWidth);
    };
    localStorage.setItem('width', window.innerWidth);

    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

export default useWindowWidth;
