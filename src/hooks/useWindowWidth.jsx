import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = async () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

export default useWindowWidth;
