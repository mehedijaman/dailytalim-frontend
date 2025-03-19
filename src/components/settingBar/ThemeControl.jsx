'use client';

import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeControl = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { name: 'system', title: 'সিস্টেম', icon: <WiMoonAltThirdQuarter /> },
    { name: 'light', title: 'লাইট', icon: <IoMdSunny /> },
    { name: 'dark', title: 'ডার্ক', icon: <IoMoon /> },
    { name: 'warm', title: 'ওয়ার্ম', icon: <WiMoonAltThirdQuarter /> },
  ];

  return (
    <div className="">
      <div className="flex cursor-pointer justify-between rounded-full bg-secondary-1 px-2 py-1">
        {themes.map((t, i) => (
          <p
            onClick={() => {
              setTheme(t.name);
            }}
            key={i}
            className={`${theme === t.name && 'bg-secondary-3 text-white'} rounded-full px-2 py-1 text-sm`}
          >
            {t.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ThemeControl;
