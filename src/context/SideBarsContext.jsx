'use client';
import useWindowWidth from '@/hooks/useWindowWidth';
import { createContext, useEffect, useState } from 'react';
export const SidebarContext = createContext();
const SideBarsProvider = ({ children }) => {
  const width = useWindowWidth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isSettingBarOpen, setIsSettingBarOpen] = useState(false);

  useEffect(() => {
    if (isSettingBarOpen) {
      setIsRightSidebarOpen(false);
    } else {
      setIsRightSidebarOpen(width >= 767);
    }
  }, [isSettingBarOpen, width]);

  useEffect(() => {
    setIsSidebarOpen(width >= 1024);
  }, [width]);

  const sidebar = {
    isSidebarOpen,
    setIsSidebarOpen,
    isRightSidebarOpen,
    setIsRightSidebarOpen,
    isSettingBarOpen,
    setIsSettingBarOpen,
  };
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SideBarsProvider;
