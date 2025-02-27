import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import ThemeControl from './ThemeControl';

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b px-2 py-3 md:px-5">
      <div className="flex items-center gap-2">
        <Image
          src={'/logo_dark.png'}
          alt="logo"
          width={40}
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
