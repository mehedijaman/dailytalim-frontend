import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('width') || window.innerWidth;
    }
  });

  useEffect(() => {
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
