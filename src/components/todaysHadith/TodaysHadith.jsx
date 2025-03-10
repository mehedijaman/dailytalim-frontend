'use client';
import HadithHeader from './HadithHeader';
import { IoBookOutline } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import useAllDate from '@/hooks/useAllDate';
import useFontResize from '@/hooks/useFontResize';

const {
  formattedBanglaDate,
  formattedHijriDateInBangla,
  formattedKhristabdaDate,
} = useAllDate();

const TodaysHadith = () => {
  const { arabicFontSize, banglaFontSize } = useFontResize();

  return (
    <main className="">
      <HadithHeader />
      <div className="flex justify-center">
        <div
          id="hadith-wrapper"
          className="overflow-hidden rounded-xl bg-background p-2"
        >
          {/* Hidden heading: This is diplayed on the hadith photo card */}
          <div
            id="hadith-header"
            className="hidden rounded-t-md px-5 pt-4 text-primary-500"
          >
            <div className="flex items-center justify-center gap-4 border-b border-primary-500 px-5 pb-2">
              <h2 className="text-xl font-semibold md:text-2xl">আজকের তালিম</h2>
              <div className="border-l-2 border-primary-500 pl-4">
                <p className="font-semibold">{formattedHijriDateInBangla}</p>
                <p className="flex gap-2">
                  <span>{formattedBanglaDate}</span> |{' '}
                  <span>{formattedKhristabdaDate}</span>
                </p>
              </div>
            </div>
          </div>
          <div id="hadith" className="w-full">
            {/*Arabic Hadith */}
            <div className="text-right">
              <p
                className="mt-2 cursor-pointer text-2xl leading-relaxed"
                style={{ fontSize: `${arabicFontSize}px` }}
              >
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
            {/* Hadith Bangla Translation*/}
            <div className="mt-5">
              <p
                className="mt-2 cursor-pointer text-left text-lg leading-relaxed"
                style={{ fontSize: `${banglaFontSize}px` }}
              >
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
                <span className="text-base font-semibold text-primary-500">
                  (জামে' আত-তিরমিজি : ৬১৬)
                </span>{' '}
              </p>
            </div>

            {/* Hidden footer: This is displayed on hadith photo card*/}
            <footer id="hadith-footer" className="hidden">
              <div className="mt-4 flex items-center gap-3 border-t border-primary-500 px-2 pb-1 pt-2 font-semibold text-primary-500">
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
    </main>
  );
};

export default TodaysHadith;
