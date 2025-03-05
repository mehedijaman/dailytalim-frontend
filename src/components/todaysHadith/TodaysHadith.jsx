'use client';
import HadithHeader from './HadithHeader';
import ShareButton from './ShareButton';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';

const TodaysHadith = () => {
  const handleDownloadHadithImage = () => {
    const hadithElement = document.getElementById('hadith');
    const footer = document.getElementById('hadith-footer');

    footer.classList.remove('hidden');
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
      })
      .catch(error => {
        console.error('Error generating image:', error);
        footer.classList.add('hidden');
      });
  };

  return (
    <main className="">
      <HadithHeader handleDownloadHadithImage={handleDownloadHadithImage} />
      <div className="flex justify-center">
        <div id="hadith" className="overflow-hidden rounded-xl">
          <div className="w-full rounded-xl bg-white p-8 dark:bg-dailyTalim-darkBg">
            <div className="rtl mt-5 text-right">
              <p className="mt-2 cursor-pointer text-2xl leading-relaxed"
              >
                قال رسول الله ﷺ: <br />
                مَنْ رَأَىٰ مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ
                لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ
                فَبِقَلْبِهِ، وَذَٰلِكَ أَضْعَفُ الْإِيمَانِ.
                <span className="mt-1 block text-base font-semibold text-green-600">
                  (সহিহ মুসলিম: ৪৯)
                </span>
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-2xl font-semibold">বাংলা:</h2>
              <p className="mt-2 cursor-pointer text-lg leading-relaxed">
                <i>
                  রাসুলুল্লাহ ﷺ বলেছেন: <br />
                  "তোমাদের মধ্যে কেউ কোনো অন্যায় কাজ দেখলে সে যেন তা হাত দ্বারা
                  পরিবর্তন করে। যদি সে এতটুকু না পারে, তাহলে সে যেন তা মুখ
                  দ্বারা পরিবর্তন করে। আর যদি এতটুকু করতেও সে সক্ষম না হয়, তবে
                  সে যেন অন্তর দ্বারা তা ঘৃণা করে, আর এটি হল ঈমানের সবচেয়ে
                  দুর্বল স্তর।"
                </i>{' '}
                <br />
                <span className="text-base font-semibold text-green-600">
                  (সহিহ মুসলিম: ৪৯)
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
