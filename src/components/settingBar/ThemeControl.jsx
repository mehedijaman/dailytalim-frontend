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
    { title: 'System', name: 'system', icon: <WiMoonAltThirdQuarter /> },
    { title: 'Light', name: 'light', icon: <IoMdSunny /> },
    { title: 'Dark', name: 'dark', icon: <IoMoon /> },
    { title: 'Warm', name: 'warm', icon: <WiMoonAltThirdQuarter /> },
  ];

  return (
    <div className="py-4">
      <div className="bg-secondary-1 flex cursor-pointer justify-between rounded-full px-2 py-1">
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
