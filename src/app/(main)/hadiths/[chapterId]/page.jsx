'use client';
import HadithHeader from '@/components/todaysHadith/HadithHeader';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useFontResize from '@/hooks/useFontResize';
import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';

const HadithsPage = ({ params }) => {
  const { chapterId } = use(params);
  const chapterIdInt = parseInt(chapterId);
  const axiosPublic = useAxiosPublic();
  const { arabicFontSize, banglaFontSize } = useFontResize();

  const { data: chapter = [] } = useQuery({
    queryKey: ['chapter', chapterId],
    queryFn: async () => {
      const kitabs = await axiosPublic.get('/hadiths');
      const chapters = kitabs.data.flatMap(kitab => kitab.chapters);
      const chapterRes = chapters.find(chapter => chapter.id === chapterIdInt);
      return chapterRes;
    },
  });

  return (
    <div className="space-y-10 px-5">
      {chapter?.hadiths?.map(hadith => (
        <div key={hadith.id}>
          <div id="hadith" className="w-full border-b-2 pb-5">
            {/*Arabic Hadith */}
            <div className="text-right">
              <p
                className="mt-2 cursor-pointer text-2xl leading-relaxed"
                style={{ fontSize: `${arabicFontSize}px` }}
              >
                {hadith?.ar}
              </p>
            </div>
            {/* Hadith Bangla Translation*/}
            <div className="mt-5">
              <p
                className="mt-2 cursor-pointer text-left text-lg leading-relaxed"
                style={{ fontSize: `${banglaFontSize}px` }}
              >
                {hadith?.bn}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HadithsPage;
