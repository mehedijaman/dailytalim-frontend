'use client';
import useWindowWidth from '@/hooks/useWindowWidth';
import { createContext, useEffect, useState } from 'react';
export const SidebarContext = createContext();
const SideBarsProvider = ({ children }) => {
  const width = useWindowWidth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    setIsRightSidebarOpen(width >= 767);
    setIsSidebarOpen(width >= 1024);
  }, [width]);

  const sidebar = {
    isSidebarOpen,
    setIsSidebarOpen,
    isRightSidebarOpen,
    setIsRightSidebarOpen,
  };
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SideBarsProvider;
