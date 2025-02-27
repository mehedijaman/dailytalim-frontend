const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed h-screen w-72 overflow-y-auto border-r bg-[#f5f5f5] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300`}
    >
      <div>Root</div>
      <div>Root</div>
    </div>
  );
};

export default Sidebar;
