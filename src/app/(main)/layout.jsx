'use client';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import NavBarBottom from '@/components/navBarBottom/NavBarBottom';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import useSidebarsContext from '@/hooks/useSidebarsContext';

const MainLayout = ({ children }) => {
  const { isSidebarOpen } = useSidebarsContext();

  return (
    <main>
      <header className="fixed z-40 h-16 w-full border-b border-border-color bg-background lg:z-50 ">
        <Navbar />
      </header>
      <section className="flex">
        <aside className="z-50 lg:z-auto lg:pt-16">
          <Sidebar />
        </aside>
        <div
          className={`flex-1 ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'} transition-padding py-16 duration-300 md:pr-72`}
        >
          <div>
            <div className="mx-auto mt-  min-h-[calc(100vh-60px)] max-w-6xl px-">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <aside className="z-40 md:pt-16">
          <RightSidebar />
        </aside>
      </section>
      <nav className={''}>
        <NavBarBottom />
      </nav>
    </main>
  );
};

export default MainLayout;
