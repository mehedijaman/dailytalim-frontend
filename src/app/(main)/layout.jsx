'use client';
import Navbar from '@/components/navbar/Navbar';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import { useState } from 'react';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <main>
      <header className="fixed z-50 h-16 w-full border-b bg-white">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </header>
      <section className="flex gap-5 pt-16">
        <aside>
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </aside>
        <div
          className={`flex-1 ${isSidebarOpen ? 'pl-72' : 'pl-0'} transition-padding duration-300`}
        >
          {children}
        </div>
        <RightSidebar />
      </section>
    </main>
  );
};

export default MainLayout;
