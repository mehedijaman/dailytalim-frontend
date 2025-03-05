import { Button } from '../ui/button';
import { FiDownload } from 'react-icons/fi';

const DownloadButton = ({ handleDownloadHadithImage }) => {
  return (
    <div onClick={handleDownloadHadithImage} className="flex justify-end">
      <Button className="rounded-[6px]">
        ডাউনলোড <FiDownload />{' '}
      </Button>
    </div>
  );
};

export default DownloadButton;
