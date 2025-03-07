'use client';

import useWindowWidth from '@/hooks/useWindowWidth';
import Date from './Date';
import PrayerTimeTable from './PrayerTimeTable';
import { IoMdClose } from 'react-icons/io';
import useFontResize from '@/hooks/useFontResize';
import FontSize from '../todaysHadith/FontSize';

const RightSidebar = ({ isRightSidebarOpen, setIsRightSidebarOpen }) => {
  const width = useWindowWidth();

  return (
    <div
      className={`scrollbar-hide fixed top-16 h-screen space-y-5 overflow-y-auto border-l bg-white px-6 pb-6 pt-3 dark:border-dailyTalim-border-dark md:w-72 md:pt-0 ${isRightSidebarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300 dark:bg-dailyTalim-darkBg ${width <= 442 && 'w-full'}`}
    >
      <div className="flex justify-end md:hidden">
        <button onClick={() => setIsRightSidebarOpen(false)}>
          <IoMdClose size={20} />
        </button>
      </div>
      <Date />
      <FontSize />
      <section>
        <PrayerTimeTable />
      </section>
    </div>
  );
};

export default RightSidebar;
