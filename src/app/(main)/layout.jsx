import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="flex gap-5">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </section>
    </main>
  );
};

export default MainLayout;
