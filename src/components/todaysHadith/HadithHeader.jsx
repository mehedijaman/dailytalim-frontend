import CopyButton from './CopyButton';
import { LuCopy } from 'react-icons/lu';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Button } from '../ui/button';
import { SiKnexdotjs } from 'react-icons/si';
import DownloadButton from './DownloadButton';

const HadithHeader = ({ handleDownloadHadithImage }) => {
  return (
    <main className="mt-8 flex items-center justify-between">
      <div className="flex items-center gap-2 text-xl text-green-600 md:text-2xl">
        <CiStar size={30} />
        <h2 className="font-bold">আজকের তালিম</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <DownloadButton handleDownloadHadithImage={handleDownloadHadithImage} />
        <CopyButton />
      </div>
    </main>
  );
};

export default HadithHeader;
