import { LuCopy } from 'react-icons/lu';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Button } from '../ui/button';
import { SiKnexdotjs } from 'react-icons/si';

const NavContent = () => {
  return (
    <main className="mt-8 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl text-green-600">
        <span className="text-2xl md:text-3xl">
          <SiKnexdotjs />
        </span>
        <h2 className="font-bold">সহিহ মুসলিম: ৪৯</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div>
          <Button className="rounded-[6px] bg-green-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-green-700">
            সহিহ হাদিস
          </Button>
        </div>
        <div className="flex items-center gap-3 md:gap-6 text-xl md:text-2xl">
          <span className="hover:text-green-600">
            <LuCopy />
          </span>
          <span className="hover:text-green-600">
            <HiDotsHorizontal />
          </span>
        </div>
      </div>
    </main>
  );
};

export default NavContent;
