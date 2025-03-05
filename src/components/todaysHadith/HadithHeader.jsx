import { LuCopy } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
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
        <div className="cursor-pointer">
          <span>
            <LuCopy size={20} />
          </span>
        </div>
      </div>
    </main>
  );
};

export default HadithHeader;
