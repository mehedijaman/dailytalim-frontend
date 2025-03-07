'use client';

import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeControl = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="cursor-pointer rounded-full bg-dailyTalim-primary-100 p-2 dark:bg-dailyTalim-border-dark"
      >
        {theme === 'light' ? <IoMoon /> : <IoMdSunny size={20} />}
      </div>
    </div>
  );
};

export default ThemeControl;
