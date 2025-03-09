import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoHomeFill } from 'react-icons/go';
import { MdGroups } from 'react-icons/md';
import { GrBlog } from 'react-icons/gr';
import { IoMdContact } from 'react-icons/io';

const NavBarBottom = () => {
  const navLinks = [
    { title: 'Home', path: '/', icon: <GoHomeFill size={25} /> },
    { title: 'About', path: '/about', icon: <MdGroups size={25} /> },
    { title: 'Blog', path: '/blog', icon: <GrBlog size={25} /> },
    { title: 'Contact', path: '/contact', icon: <IoMdContact size={25} /> },
  ];
  const pathname = usePathname();
  return (
    <div className="border-border-color fixed -bottom-1 h-16 w-full border-t bg-background md:hidden">
      <div className="flex h-full items-center justify-around">
        {navLinks.map((navLink, i) => (
          <Link
            key={i}
            href={navLink.path}
            className={`px-1 ${pathname === navLink.path && 'text-primary-500 font-semibold'}`}
          >
            {navLink.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBarBottom;
