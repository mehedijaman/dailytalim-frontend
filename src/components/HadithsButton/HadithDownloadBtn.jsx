import { Button } from '../ui/button';
import { FiDownload } from 'react-icons/fi';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

const HadithDownloadBtn = ({ id }) => {
  const handleDownloadHadithImage = () => {
    const hadithElement = document.getElementById(`hadith-wrapper${id}`);
    const hadith = document.getElementById(`hadith${id}`);
    const footer = document.getElementById(`hadith-footer${id}`);

    footer.classList.remove('hidden');
    hadith.classList.add('px-6');
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
        hadith.classList.remove('px-6');
      })
      .catch(error => {
        console.error('Error generating image:', error);
        footer.classList.add('hidden');
        hadith.classList.remove('px-6');
      });
  };
  return (
    <div onClick={handleDownloadHadithImage} className="flex justify-end">
      <Button className="size-8 rounded-[6px] md:size-auto">
        <span className="hidden xl:block">ডাউনলোড</span> <FiDownload />{' '}
      </Button>
    </div>
  );
};

export default HadithDownloadBtn;
