import useSidebarsContext from '@/hooks/useSidebarsContext';
import Search from '@/components/Search/Search';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarsContext();
  const axiosPublic = useAxiosPublic();
  const convertToBanglaDigits = num => {
    const banglaDigit = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, digit => banglaDigit[digit]);
  };

  const { data: chapters = [] } = useQuery({
    queryKey: ['hadiths'],
    queryFn: async () => {
      const hadithRes = await axiosPublic.get('/hadiths');
      return hadithRes.data.flatMap(hadith => hadith.chapters);
    },
  });
  console.log(chapters);
  return (
    <div
      className={`${!isSidebarOpen && 'pointer-events-none'} fixed flex h-screen`}
    >
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen
            ? 'animate-fade-in pointer-events-auto opacity-100'
            : 'animate-fade-out pointer-events-none opacity-0'
        }`}
        aria-hidden={!isSidebarOpen}
      />
      <div
        className={`h-screen w-72 overflow-y-auto border-r border-border-color bg-sidebar-bg ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="p-6 pb-24">
          <Search />
          {chapters.map((chapter, i) => (
            <div
              key={i}
              className="mt-5 cursor-pointer rounded-md bg-secondary-1 px-4 py-2"
            >
              <h5 className="font-semibold">{chapter.name}</h5>
              <p className="text-sm text-muted">
                মোট হাদিস{' '}
                <span>{convertToBanglaDigits(chapter?.hadiths?.length)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
