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

const ThemeControl = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-0 focus-visible:outline-none">
        <div className="rounded-full bg-dailyTalim-primary-50 p-2">
          <IoMdSunny size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl bg-white p-3">
        <DropdownMenuItem className="rounded-xl bg-dailyTalim-primary-50">
          {' '}
          <IoMdSunny /> লাইট
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoMoon /> ডার্ক
        </DropdownMenuItem>
        <DropdownMenuItem>
          <WiMoonAltWaxingCrescent5 /> সিস্টেম
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeControl;
