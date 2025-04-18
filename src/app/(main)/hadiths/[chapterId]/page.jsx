'use client';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useFontResize from '@/hooks/useFontResize';
import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import HadithLoader from '../loading';
import HadithDownloadBtn from '@/components/HadithsButton/HadithDownloadBtn';
import { IoBookOutline } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import HadithCopyBtn from '@/components/HadithsButton/HadithCopyBtn';

const HadithsPage = ({ params }) => {
  const { chapterId } = use(params);
  const chapterIdInt = parseInt(chapterId);
  const axiosPublic = useAxiosPublic();
  const { arabicFontSize, banglaFontSize } = useFontResize();

  const { data: chapter = [], isPending } = useQuery({
    queryKey: ['chapter', chapterId],
    queryFn: async () => {
      const kitabs = await axiosPublic.get('/hadiths');
      const chapters = kitabs.data.flatMap(kitab => kitab.chapters);
      const chapterRes = chapters.find(chapter => chapter.id === chapterIdInt);
      return chapterRes;
    },
  });
  if (isPending) {
    return <HadithLoader />;
  }

  return (
    <div className="space-y-10 px-4 py-6">
      {chapter?.hadiths?.length > 0 ? (
        chapter?.hadiths?.map(hadith => (
          <div key={hadith.id}>
            <div className="mt-8 flex items-center justify-end gap-2 border-b-2 border-primary-500 px-2 pb-2">
              <HadithDownloadBtn id={hadith.id} />
              <HadithCopyBtn id={hadith.id} />
            </div>
            <div
              id={`hadith-wrapper${hadith.id}`}
              className="overflow-hidden rounded-xl bg-background p-2"
            >
              <div id={`hadith${hadith.id}`} className="w-full pb-5">
                {/*Arabic Hadith */}
                <div className="">
                  <p
                    dir="rtl"
                    className="mt-2 cursor-pointer text-justify font-scheherazade-new text-2xl leading-relaxed"
                    style={{ fontSize: `${arabicFontSize}px` }}
                    dangerouslySetInnerHTML={{ __html: hadith?.ar }}
                  />
                </div>
                {/* Hadith Bangla Translation*/}
                <div className="mt-5">
                  <p
                    className="mt-2 cursor-pointer text-justify font-noto-serif-banglai text-lg leading-relaxed"
                    style={{ fontSize: `${banglaFontSize}px` }}
                    dangerouslySetInnerHTML={{ __html: hadith?.bn }}
                  />
                </div>
                {/* Hidden footer: This is displayed on hadith photo card*/}
                <footer id={`hadith-footer${hadith.id}`} className="hidden">
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
        ))
      ) : (
        <div className="flex h-[calc(100vh-220px)] flex-col items-center justify-center">
          <h4 className="text-xl font-bold"> দুঃখিত!</h4>
          <p className="text-muted">এই বিষয়ে বর্তমানে কোনো হাদিস নেই।</p>
          <p className="text-muted">
            ইনশাআল্লাহ, খুব শীঘ্রই নতুন হাদিস যোগ করা হবে।
          </p>
        </div>
      )}
    </div>
  );
};

export default HadithsPage;
