'use client';
import HadithHeader from './HadithHeader';
import ShareButton from './ShareButton';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import moment from 'moment-hijri';

const TodaysHadith = () => {
  const handleDownloadHadithImage = () => {
    const hadithElement = document.getElementById('hadith');
    const footer = document.getElementById('hadith-footer');
    const hadithHeader = document.getElementById('hadith-header');

    footer.classList.remove('hidden');
    hadithHeader.classList.remove('hidden');
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
      })
      .catch(error => {
        console.error('Error generating image:', error);
        footer.classList.add('hidden');
        hadithHeader.classList.add('hidden');
      });
  };

  return (
    <main className="">
      <HadithHeader handleDownloadHadithImage={handleDownloadHadithImage} />
      <div className="flex justify-center">
        <div id="hadith" className="overflow-hidden rounded-xl">
          <h2
            id="hadith-header"
            className="hidden rounded-t-md bg-dailyTalim-primary-500 py-2 text-center text-2xl"
          >
            <span className="font-semibold">আজকের তালিম</span> -{' '}
            {moment().locale('en').format('D MMM, YYYY')}
          </h2>
          <div className="w-full bg-white p-6 dark:bg-dailyTalim-darkBg">
            <div className="text-right">
              <p className="mt-2 cursor-pointer text-2xl leading-relaxed">
                حَدَّثَنَا مُوسَى بْنُ عَبْدِ الرَّحْمَنِ الْكِنْدِيُّ
                الْكُوفِيُّ، حَدَّثَنَا زَيْدُ بْنُ الْحُبَابِ، أَخْبَرَنَا
                مُعَاوِيَةُ بْنُ صَالِحٍ، حَدَّثَنِي سُلَيْمُ بْنُ عَامِرٍ،
                قَالَ سَمِعْتُ أَبَا أُمَامَةَ، يَقُولُ سَمِعْتُ رَسُولَ اللَّهِ
                صلى الله عليه وسلم يَخْطُبُ فِي حَجَّةِ الْوَدَاعِ فَقَالَ"
                اتَّقُوا اللَّهَ رَبَّكُمْ وَصَلُّوا خَمْسَكُمْ وَصُومُوا
                شَهْرَكُمْ وَأَدُّوا زَكَاةَ أَمْوَالِكُمْ وَأَطِيعُوا ذَا
                أَمْرِكُمْ تَدْخُلُوا جَنَّةَ رَبِّكُمْ ". قَالَ فَقُلْتُ لأَبِي
                أُمَامَةَ مُنْذُ كَمْ سَمِعْتَ مِنْ رَسُولِ اللَّهِ صلى الله
                عليه وسلم هَذَا الْحَدِيثَ قَالَ سَمِعْتُهُ وَأَنَا ابْنُ
                ثَلاَثِينَ سَنَةً . قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ
                صَحِيحٌ .
              </p>
            </div>

            <div className="mt-5">
              <p className="mt-2 cursor-pointer text-left text-lg leading-relaxed">
                আবূ উমামা (রাঃ) হতে বর্ণিত: <br />
                আমি রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)কে বিদায়
                হাজ্জের ভাষণে বলতে শুনেছি, তিনি বলেছেনঃ তোমাদের প্রতিপালক আল্লাহ
                তা’আলাকে ভয় কর, তোমাদের পাঁচ ওয়াক্ত নামায আদায় কর। তোমাদের
                রামাযান মাসের রোজারাখ, তোমাদের ধন-দৌলতের যাকাত আদায় কর এবং
                তোমাদের আমীরের অনুসরণ কর, তবেই তোমাদের রবের জান্নাতে প্রবেশ করতে
                পারবে। আমি (সুলাইম) আবূ উমামা (রাঃ) -কে প্রশ্ন করলাম, আপনি কতদিন
                পূর্বে রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-এর নিকট এ
                হাদীস শুনেছেন? তিনি বলেনঃ আমি তিরিশ বছর বয়সে তাঁর নিকট এ হাদীস
                শুনেছি।
                <br />
                <span className="text-base font-semibold text-green-600">
                  (জামে' আত-তিরমিজি : ৬১৬)
                </span>{' '}
              </p>
            </div>
            <footer id="hadith-footer" className="mt-4 hidden p-3">
              <div className="mt-4 flex items-center gap-3 border-t pt-2 font-semibold">
                <p className="flex items-center gap-2">
                  <IoBookOutline size={20} />
                  DailyTalim
                </p>
                |
                <p className="flex items-center gap-2">
                  <TbWorldWww size={20} />
                  dailytalim.com{' '}
                </p>
                |
                <p className="flex items-center gap-2">
                  <FaFacebookF />
                  /DailyTalimBD{' '}
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <ShareButton />
    </main>
  );
};

export default TodaysHadith;
