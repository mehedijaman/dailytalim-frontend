import React from 'react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`${!isSidebarOpen && 'pointer-events-none'} fixed flex h-screen`}
    >
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen
            ? 'animate-fade-in pointer-events-auto opacity-100'
            : 'animate-fade-out pointer-events-none opacity-0'
        }`}
        aria-hidden={!isSidebarOpen}
      />
      <div
        className={`bg-dailyTalim-sidebar-light dark:bg-dailyTalim-sidebar-dark dark:border-dailyTalim-border-dark h-screen w-72 overflow-y-auto border-r ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 transition-all duration-300 ease-in-out`}
      >
        <div>Root</div>
        <div>Root</div>
      </div>
    </div>
  );
};

export default Sidebar;
