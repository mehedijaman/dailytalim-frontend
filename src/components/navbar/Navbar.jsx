'use client';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import ThemeControl from './ThemeControl';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className="flex justify-between px-2 py-3 md:px-5">
      <div className="flex items-center gap-2">
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer rounded-[5px] bg-dailyTalim-primary-100 p-2 text-dailyTalim-mutedGray transition-colors duration-200 hover:bg-dailyTalim-primary-200"
          title="Toggle Sidebar"
        >
          <div>
            {isSidebarOpen ? (
              <GoSidebarExpand size={20} />
            ) : (
              <GoSidebarCollapse size={20} />
            )}
          </div>
        </div>{' '}
        <Image
          src={'/logo_dark.png'}
          alt="logo"
          width={35}
          height={10}
          className="rounded-[5px] object-cover"
        />
        <h1 className="text-2xl font-bold"> ডেইলি তালিম </h1>
      </div>
      <div className="flex items-center gap-2 text-dailyTalim-mutedGray">
        <ThemeControl />
        <div className="rounded-full bg-dailyTalim-primary-50 p-2">
          <CiSearch size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
