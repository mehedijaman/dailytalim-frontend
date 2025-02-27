import Navbar from '@/components/navbar/Navbar';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <main>
      <header className="fixed z-50 h-16 w-full bg-white">
        <Navbar />
      </header>
      <section className="flex gap-5 pt-16">
        <Sidebar />
        <div className="flex-1 pl-72">{children}</div>
        <RightSidebar />
      </section>
    </main>
  );
};

export default MainLayout;
