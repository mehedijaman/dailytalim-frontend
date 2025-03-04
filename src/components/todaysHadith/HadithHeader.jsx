import { LuCopy } from 'react-icons/lu';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Button } from '../ui/button';
import { SiKnexdotjs } from 'react-icons/si';

const HadithHeader = () => {
  return (
    <main className="mt-8 flex items-center justify-between">
      <div className="text-xl text-green-600 md:gap-4 md:text-2xl">
        <h2 className="font-bold">আজকের তালিম</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div>
          <Button className="rounded-[6px] bg-green-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-green-700">
            সহিহ হাদিস
          </Button>
        </div>
        <div className="flex cursor-pointer items-center gap-3 text-xl md:gap-6 md:text-2xl">
          <span>
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

export default HadithHeader;
