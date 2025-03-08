'use client';
import React, { createContext, useState } from 'react';
export const FontResizeContext = createContext();

const FontResizeProvider = ({ children }) => {
  const [arabicFontSize, setArabicFontSize] = useState(24);
  const [banglaFontSize, setBanglaFontSize] = useState(18);
  const [blogFontSize, setBlogFontSize] = useState(22);
  const [prayerTimeFontSize, setPrayerTimeFontSize] = useState(22);

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
