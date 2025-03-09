'use client';
import React, { createContext, useEffect, useState } from 'react';
export const FontResizeContext = createContext();

const FontResizeProvider = ({ children }) => {
  const getLocalStrogeValue = (key, defaultValue) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? parseInt(storedValue) : defaultValue;
    }
  };

  const [arabicFontSize, setArabicFontSize] = useState(24);
  const [banglaFontSize, setBanglaFontSize] = useState(18);
  const [blogFontSize, setBlogFontSize] = useState(22);
  const [prayerTimeFontSize, setPrayerTimeFontSize] = useState(22);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      setArabicFontSize(getLocalStrogeValue('arabic-font-size'));
      setBanglaFontSize(getLocalStrogeValue('bangla-font-size'));
    }
  }, []);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('arabic-font-size', arabicFontSize.toString());
      localStorage.setItem('bangla-font-size', banglaFontSize.toString());
    }
  }, [arabicFontSize, banglaFontSize]);

  const font = {
    arabicFontSize,
    setArabicFontSize,
    banglaFontSize,
    setBanglaFontSize,
    blogFontSize,
    setBlogFontSize,
    prayerTimeFontSize,
    setPrayerTimeFontSize,
  };

  return (
    <FontResizeContext.Provider value={font}>
      {children}
    </FontResizeContext.Provider>
  );
};

export default FontResizeProvider;
