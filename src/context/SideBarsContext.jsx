'use client';
import useWindowWidth from '@/hooks/useWindowWidth';
import { createContext, useEffect, useState } from 'react';
export const SidebarContext = createContext();
const SideBarsProvider = ({ children }) => {
  const width = useWindowWidth();

  const getLocalStrogeValue = (key, defaultValue) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isSettingBarOpen, setIsSettingBarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(getLocalStrogeValue('isSidebarOpen', false));
  }, [setIsSidebarOpen]);

  useEffect(() => {
    if (isSettingBarOpen) {
      setIsRightSidebarOpen(false);
    } else {
      setIsRightSidebarOpen(width >= 767);
    }
  }, [isSettingBarOpen, width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (width < 1024) {
        localStorage.setItem('isSidebarOpen', 'false');
      } else {
        localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
      }
    }
  }, [isSidebarOpen, width]);

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
