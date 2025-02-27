'use client';
import Navbar from '@/components/navbar/Navbar';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/sidebar';
import { useState } from 'react';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <main>
      <header className="fixed z-40 h-16 w-full border-b bg-white lg:z-50">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </header>
      <section className="flex gap-5">
        <aside className="z-50 lg:z-auto lg:pt-16">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </aside>
        <div
          className={`flex-1 ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'} transition-padding pt-16 duration-300`}
        >
          {children}
        </div>
        <aside className="pt-16">
          <RightSidebar />
        </aside>
      </section>
    </main>
  );
};

export default MainLayout;
