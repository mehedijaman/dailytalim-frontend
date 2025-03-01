'use client';

import Date from './Date';
import PrayerTimeTable from './PrayerTimeTable';
import { IoMdClose } from 'react-icons/io';

const RightSidebar = ({ isRightSidebarOpen, setIsRightSidebarOpen }) => {
  return (
    <div
      className={`scrollbar-hide fixed top-16 h-screen ${window.innerWidth <= 442 ? 'w-full' : 'w-72'} space-y-5 overflow-y-auto border-l bg-white px-6 pb-6 pt-3 md:w-72 md:pt-0 ${isRightSidebarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300`}
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
