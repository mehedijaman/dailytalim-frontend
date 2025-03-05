import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';
import { CiStar } from 'react-icons/ci';

const HadithHeader = () => {
  return (
    <main className="mt-8 flex items-center justify-between px-6">
      <div className="flex items-center gap-2 text-xl text-green-600 md:text-2xl">
        <CiStar size={30} />
        <h2 className="font-bold">আজকের তালিম</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <DownloadButton />
        <CopyButton />
      </div>
    </main>
  );
};

export default HadithHeader;
