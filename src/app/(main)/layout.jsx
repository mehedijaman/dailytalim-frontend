import Navbar from "@/components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {children}
    </main>
  );
};

export default MainLayout;
