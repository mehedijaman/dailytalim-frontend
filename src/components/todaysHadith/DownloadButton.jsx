import { Button } from '../ui/button';
import { FiDownload } from 'react-icons/fi';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

const DownloadButton = () => {
  const handleDownloadHadithImage = () => {
    const hadithElement = document.getElementById('hadith-wrapper');
    const hadith = document.getElementById('hadith');
    const footer = document.getElementById('hadith-footer');
    const hadithHeader = document.getElementById('hadith-header');

    footer.classList.remove('hidden');
    hadithHeader.classList.remove('hidden');
    hadith.classList.add('p-6');
    htmlToImage
      .toPng(hadithElement, {
        style: {
          borderRadius: '12px',
          overflow: 'hidden',
        },
      })
      .then(imgUrl => {
        download(imgUrl, 'hadith.png');
        footer.classList.add('hidden');
        hadithHeader.classList.add('hidden');
        hadith.classList.remove('p-6');
      })
      .catch(error => {
        console.error('Error generating image:', error);
        footer.classList.add('hidden');
        hadithHeader.classList.add('hidden');
        hadith.classList.remove('p-6');
      });
  };
  return (
    <div onClick={handleDownloadHadithImage} className="flex justify-end">
      <Button className="rounded-[6px]">
        <span className="hidden md:block">ডাউনলোড</span> <FiDownload />{' '}
      </Button>
    </div>
  );
};

export default DownloadButton;
