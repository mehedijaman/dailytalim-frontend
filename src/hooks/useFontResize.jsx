import { FontResizeContext } from '@/context/FontResizeContext';
import { useContext } from 'react';

const useFontResize = () => {
  const fontResize = useContext(FontResizeContext);
  return fontResize;
};

export default useFontResize;
