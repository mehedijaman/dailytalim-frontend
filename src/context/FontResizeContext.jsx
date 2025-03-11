'use client';
import React, { createContext, useEffect, useState } from 'react';
export const FontResizeContext = createContext();

const FontResizeProvider = ({ children }) => {
  const getLocalStrogeValue = (key, defaultValue) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? parseInt(storedValue) : defaultValue;
    }
    return defaultValue;
  };

  const [arabicFontSize, setArabicFontSize] = useState(24);
  const [banglaFontSize, setBanglaFontSize] = useState(18);
  const [blogFontSize, setBlogFontSize] = useState(22);
  const [prayerTimeFontSize, setPrayerTimeFontSize] = useState(22);

  useEffect(() => {
    setArabicFontSize(getLocalStrogeValue('arabic-font-size', 24));
    setBanglaFontSize(getLocalStrogeValue('bangla-font-size', 18));
  }, [setArabicFontSize, setBanglaFontSize]);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        'arabic-font-size',
        arabicFontSize ? arabicFontSize.toString() : 24,
      );
      localStorage.setItem(
        'bangla-font-size',
        banglaFontSize ? banglaFontSize.toString() : 18,
      );
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
