'use client';
import HadithHeader from '@/components/todaysHadith/HadithHeader';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useFontResize from '@/hooks/useFontResize';
import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import HadithLoader from '../loading';

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
    <div className="space-y-10 px-5">
      {chapter?.hadiths?.length > 0 ? (
        chapter?.hadiths?.map(hadith => (
          <div key={hadith.id}>
            <div id="hadith" className="w-full border-b-2 pb-5">
              {/*Arabic Hadith */}
              <div className="text-right">
                <p
                  className="mt-2 cursor-pointer text-2xl leading-relaxed"
                  style={{ fontSize: `${arabicFontSize}px` }}
                  dangerouslySetInnerHTML={{ __html: hadith?.ar }}
                />
              </div>
              {/* Hadith Bangla Translation*/}
              <div className="mt-5">
                <p
                  className="mt-2 cursor-pointer text-left text-lg leading-relaxed"
                  style={{ fontSize: `${banglaFontSize}px` }}
                  dangerouslySetInnerHTML={{ __html: hadith?.bn }}
                />
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
