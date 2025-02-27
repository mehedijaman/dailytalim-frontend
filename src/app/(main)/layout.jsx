import Navbar from '@/components/navbar/Navbar';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import Sidebar from '@/components/sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="flex gap-5">
        <Sidebar />
        <div className="flex-1 pl-80">{children}</div>
        <RightSidebar />
      </section>
    </main>
  );
};

export default MainLayout;
