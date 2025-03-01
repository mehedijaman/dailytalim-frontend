'use client';

import Date from './Date';
import PrayerTimeTable from './PrayerTimeTable';

const RightSidebar = ({ isRightSidebarOpen }) => {
  return (
    <div
      className={`scrollbar-hide fixed top-16 h-screen ${window.innerWidth <= 442 ? 'w-full' : 'w-72'} space-y-5 overflow-y-auto border-l bg-white p-6 md:w-72 ${isRightSidebarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300`}
    >
      <Date />
      <section>
        <PrayerTimeTable />
      </section>
    </div>
  );
};

export default RightSidebar;
