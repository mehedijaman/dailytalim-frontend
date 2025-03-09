'use client';
import useWindowWidth from '@/hooks/useWindowWidth';
import Date from './Date';
import PrayerTimeTable from './PrayerTimeTable';
import { IoMdClose } from 'react-icons/io';
import useSidebarsContext from '@/hooks/useSidebarsContext';

const RightSidebar = () => {
  const width = useWindowWidth();
  const { isRightSidebarOpen, setIsRightSidebarOpen } = useSidebarsContext();

  return (
    <div
      className={`scrollbar-hide border-border-color fixed top-16 h-screen space-y-5 overflow-y-auto border-l bg-background px-6 pb-6 pt-3 md:w-72 md:pt-0 ${isRightSidebarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300 ${width <= 442 && 'w-full'}`}
    >
      <div className="flex justify-end md:hidden">
        <button onClick={() => setIsRightSidebarOpen(false)}>
          <IoMdClose size={20} />
        </button>
      </div>
      <Date />
      <section>
        <PrayerTimeTable />
      </section>
    </div>
  );
};

export default RightSidebar;
