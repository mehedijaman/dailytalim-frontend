'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';
import { WiMoonAltWaxingCrescent5 } from 'react-icons/wi';
import { useTheme } from 'next-themes';

const ThemeControl = () => {
  const { theme, setTheme } = useTheme();

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
