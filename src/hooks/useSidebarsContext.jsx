import { SidebarContext } from '@/context/SideBarsContext';
import { useContext } from 'react';

const useSidebarsContext = () => {
  return useContext(SidebarContext);
};

export default useSidebarsContext;
