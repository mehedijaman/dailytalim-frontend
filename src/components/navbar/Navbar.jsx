'use client';
import Image from 'next/image';
import Link from 'next/link';

//Icons import
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { SiDatefns } from 'react-icons/si';
import { usePathname } from 'next/navigation';
import { IoSettingsSharp } from 'react-icons/io5';
import useSidebarsContext from '@/hooks/useSidebarsContext';

const Navbar = () => {
  const navLinks = [
    { title: 'হোম', path: '/' },
    { title: 'ব্লগ', path: '/blog' },
    { title: 'আমাদের সম্পর্কে', path: '/about' },
    { title: 'যোগাযোগ', path: '/contact' },
  ];
  const pathname = usePathname();

  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isRightSidebarOpen,
    setIsRightSidebarOpen,
    isSettingBarOpen,
    setIsSettingBarOpen,
  } = useSidebarsContext();

  return (
    <nav className="flex items-center justify-between px-2 py-3 md:px-5">
      <div className="flex items-center gap-2">
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer rounded-[5px] bg-secondary-1 p-2 text-muted transition-colors duration-200 hover:bg-secondary-2 dark:text-white"
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
        <Link href="/">
          <Image
            src={'/logo_dark.png'}
            alt="logo"
            width={35}
            height={10}
            className="hidden rounded-[5px] object-cover md:block"
          />
        </Link>
        <Link href="/">
          <h1 className="text-xl font-bold md:text-2xl"> ডেইলি তালিম </h1>
        </Link>
      </div>
      <div className="hidden gap-4 md:flex">
        {navLinks.map((navLink, i) => (
          <Link
            key={i}
            href={navLink.path}
            className={`px-1 ${pathname === navLink.path && 'border-b border-primary-500 font-semibold text-primary-500'}`}
          >
            {navLink.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 text-muted dark:text-white">
        <div
          onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          className="cursor-pointer rounded-full bg-secondary-1 p-2 hover:bg-secondary-2 md:hidden"
        >
          <SiDatefns size={20} />
        </div>
        <div
          onClick={() => setIsSettingBarOpen(!isSettingBarOpen)}
          className="cursor-pointer rounded-full bg-secondary-1 p-2 hover:bg-secondary-2"
        >
          <IoSettingsSharp size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
