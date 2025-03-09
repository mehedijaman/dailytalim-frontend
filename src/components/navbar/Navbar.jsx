'use client';
import Image from 'next/image';
import ThemeControl from './ThemeControl';
import Link from 'next/link';

//Icons import
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { SiDatefns } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isRightSidebarOpen,
  setIsRightSidebarOpen,
}) => {
  const navLinks = [
    { title: 'হোম', path: '/' },
    { title: 'ব্লগ', path: '/blog' },
    { title: 'আমাদের সম্পর্কে', path: '/about' },
    { title: 'যোগাযোগ', path: '/contact' },
  ];
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-2 py-3 md:px-5">
      <div className="flex items-center gap-2">
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer rounded-[5px] bg-dailyTalim-primary-100 p-2 text-dailyTalim-mutedGray transition-colors duration-200 hover:bg-dailyTalim-primary-200 dark:bg-dailyTalim-border-dark dark:text-white"
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
          className="hidden rounded-[5px] object-cover md:block"
        />
        <h1 className="text-xl font-bold md:text-2xl"> ডেইলি তালিম </h1>
      </div>
      <div className="hidden gap-4 md:flex">
        {navLinks.map((navLink, i) => (
          <Link
            key={i}
            href={navLink.path}
            className={`px-1 ${pathname === navLink.path && 'border-b border-dailyTalim-primary-500 font-semibold text-dailyTalim-primary-500'}`}
          >
            {navLink.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 text-dailyTalim-mutedGray dark:text-white">
        <ThemeControl />
        <Link
          href="https://github.com/mehedijaman/dailytalim-frontend"
          target="_blank"
          className="rounded-full bg-dailyTalim-primary-100 p-2 dark:bg-dailyTalim-border-dark"
        >
          <FaGithub size={20} />
        </Link>
        <div
          onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          className="cursor-pointer rounded-full bg-dailyTalim-primary-100 p-2 hover:bg-dailyTalim-primary-100 dark:bg-dailyTalim-border-dark md:hidden"
        >
          <SiDatefns size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
