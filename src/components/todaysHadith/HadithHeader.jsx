import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';
import { FaStar } from 'react-icons/fa';
import ShareButton from './ShareButton';
const HadithHeader = () => {
  return (
    <main className="border-primary-500 mt-2 flex items-center justify-between border-b-2 px-2 pb-2">
      <div className="text-primary-500 flex items-center gap-2 text-xl md:text-2xl">
        <FaStar className="size-5 md:size-8" />
        <h2 className="font-bold">আজকের তালিম</h2>
      </div>

      <div className="flex items-center gap-2">
        <ShareButton />
        <DownloadButton />
        <CopyButton />
      </div>
    </main>
  );
};

export default HadithHeader;
