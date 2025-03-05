import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';

const HadithHeader = ({ handleDownloadHadithImage }) => {
  return (
    <main className="mt-8 flex items-center justify-between">
      <div className="text-xl text-green-600 md:gap-4 md:text-2xl">
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
