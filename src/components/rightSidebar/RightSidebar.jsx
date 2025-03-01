'use client';

import Date from './Date';
import PrayerTimeTable from './PrayerTimeTable';

const RightSidebar = () => {
  return (
    <div className="scrollbar-hide fixed right-0 top-16 h-screen w-72 space-y-5 overflow-y-auto border-l bg-white p-6">
      <Date />
      <section>
        <PrayerTimeTable />
      </section>
    </div>
  );
};

export default RightSidebar;
