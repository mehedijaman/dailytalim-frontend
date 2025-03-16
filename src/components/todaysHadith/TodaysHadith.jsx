'use client';
import HadithHeader from './HadithHeader';
import { IoBookOutline } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import useAllDate from '@/hooks/useAllDate';
import useFontResize from '@/hooks/useFontResize';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useEffect, useState } from 'react';

const {
  formattedBanglaDate,
  formattedHijriDateInBangla,
  formattedKhristabdaDate,
} = useAllDate();

const TodaysHadith = () => {
  const { arabicFontSize, banglaFontSize } = useFontResize();
  const axiosPublic = useAxiosPublic();

  const { data: todaysHadith = {} } = useQuery({
    queryKey: ['todaysHadith'],
    queryFn: async () => {
      const res = await axiosPublic.get('/');
      return res.data;
    },
  });

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
                dangerouslySetInnerHTML={{
                  __html: todaysHadith?.todaysHadith?.ar,
                }}
              />
            </div>
            {/* Hadith Bangla Translation*/}
            <div className="mt-5">
              <p
                className="mt-2 cursor-pointer text-left text-lg leading-relaxed"
                style={{ fontSize: `${banglaFontSize}px` }}
                dangerouslySetInnerHTML={{
                  __html: todaysHadith?.todaysHadith?.bn,
                }}
              />
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
