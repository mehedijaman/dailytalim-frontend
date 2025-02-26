"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";

const ThemeControl = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="bg-dailyTalim-primary-50 p-2 rounded-full">
            <IoMdSunny size={20} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white rounded-xl p-3">
          <DropdownMenuItem className="bg-dailyTalim-primary-50 rounded-xl">
            {" "}
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
    </div>
  );
};

export default ThemeControl;
