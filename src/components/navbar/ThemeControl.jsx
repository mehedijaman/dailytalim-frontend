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
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-0 focus-visible:outline-none">
        <div className="dark:bg-dailyTalim-border-dark rounded-full bg-dailyTalim-primary-100 p-2">
          <IoMdSunny size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-dailyTalim-darkBg dark:border-dailyTalim-border-dark rounded-xl bg-white p-3">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`cursor-pointer rounded-xl ${theme === 'light' && 'bg-dailyTalim-primary-50 text-black'} `}
        >
          {' '}
          <IoMdSunny /> লাইট
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`cursor-pointer rounded-xl ${theme === 'dark' && 'bg-dailyTalim-primary-50 text-black'} `}
        >
          <IoMoon /> ডার্ক
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`cursor-pointer rounded-xl ${theme === 'system' && 'bg-dailyTalim-primary-50 text-black'} `}
        >
          <WiMoonAltWaxingCrescent5 /> সিস্টেম
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeControl;
