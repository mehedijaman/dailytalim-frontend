import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import ThemeControl from "./ThemeControl";

const Navbar = () => {
  return (
    <nav className="px-2 md:px-5 py-3 border-b flex justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo_dark.png"}
          alt="logo"
          width={40}
          height={10}
          className="rounded-[5px] object-cover"
        />
        <h1 className="font-bold text-2xl"> ডেইলি তালিম </h1>
      </div>
      <div className="flex items-center gap-2 text-dailyTalim-mutedGray">
        <ThemeControl />
        <button className="bg-dailyTalim-primary-50 p-2 rounded-full">
          <CiSearch size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
