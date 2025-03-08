import { SidebarContext } from '@/context/SideBarsContext';
import { useContext } from 'react';

const useSidebarsContext = () => {
  const sidebar = useContext(SidebarContext);
  return sidebar;
};

export default useSidebarsContext;
