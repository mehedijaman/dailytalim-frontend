'use client';
import Navbar from '@/components/navbar/Navbar';
import NavBarBottom from '@/components/navBarBottom/NavBarBottom';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import FontResizeProvider from '@/context/FontResizeContext';
import useWindowWidth from '@/hooks/useWindowWidth';
import { useEffect, useState } from 'react';

const MainLayout = ({ children }) => {
  const width = useWindowWidth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    setIsRightSidebarOpen(width >= 767);
    setIsSidebarOpen(width >= 1024);
  }, [width]);

  return (
    <FontResizeProvider>
      <main>
        <header className="fixed z-40 h-16 w-full border-b bg-white dark:border-dailyTalim-border-dark dark:bg-dailyTalim-darkBg lg:z-50">
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
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </aside>
          <div
            className={`flex-1 ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'} transition-padding py-16 duration-300 md:pr-72`}
          >
            <div className="mx-auto my-8 max-w-4xl">{children}</div>
          </div>
          <aside className="z-40 md:pt-16">
            <RightSidebar
              isRightSidebarOpen={isRightSidebarOpen}
              setIsRightSidebarOpen={setIsRightSidebarOpen}
            />
          </aside>
        </section>
        <nav className={''}>
          <NavBarBottom />
        </nav>
      </main>
    </FontResizeProvider>
  );
};

export default MainLayout;
