import useSidebarsContext from '@/hooks/useSidebarsContext';

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarsContext();
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
        className={`border-border-color bg-sidebar-bg h-screen w-72 overflow-y-auto border-r ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="p-6">
          <div className="bg-secondary-1 cursor-pointer rounded-md px-4 py-2">
            <h5 className="font-semibold">সহিহ বুখারি</h5>
            <p className="text-sm text-muted">
              মোট হাদিস <span>৭৫৪৪</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
