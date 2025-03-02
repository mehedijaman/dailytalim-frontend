'use client';
import Navbar from '@/components/navbar/Navbar';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import useWindowWidth from '@/hooks/useWindowWidth';
import { useEffect, useState } from 'react';

const MainLayout = ({ children }) => {
  const width = useWindowWidth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    setIsRightSidebarOpen(width >= 767);
    setIsSidebarOpen(width >= 767);
  }, [width]);

  return (
    <main>
      <header className="fixed z-40 h-16 w-full border-b bg-white lg:z-50">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isRightSidebarOpen={isRightSidebarOpen}
          setIsRightSidebarOpen={setIsRightSidebarOpen}
        />
      </header>
      <section className="flex gap-4">
        <aside className="z-50 lg:z-auto lg:pt-16">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsRightSidebarOpen}
          />
        </aside>
        <div
          className={`flex-1 ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'} transition-padding pt-16 duration-300 md:pr-72`}
        >
          <div className="mx-auto max-w-4xl">{children}</div>
        </div>
        <aside className="md:pt-16">
          <RightSidebar
            isRightSidebarOpen={isRightSidebarOpen}
            setIsRightSidebarOpen={setIsRightSidebarOpen}
          />
        </aside>
      </section>
    </main>
  );
};

export default MainLayout;
