import React from 'react';
import { Button } from '../ui/button';

const Content = () => {
  return (
    <main className="p-4">
      <div className="mx-auto w-full rounded-xl border border-gray-300 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl md:p-8 ">
        <h1 className="mb-4 text-center text-4xl font-bold text-green-700">
          Daily Talim
        </h1>

        <div className="rtl mt-5 text-right">
          <p className="mt-2 cursor-pointer text-2xl leading-relaxed text-gray-700">
            قال رسول الله ﷺ: <br />
            مَنْ رَأَىٰ مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ
            يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ،
            وَذَٰلِكَ أَضْعَفُ الْإِيمَانِ.
            <span className="mt-1 block font-semibold text-base text-green-600">
              (সহিহ মুসলিম: ৪৯)
            </span>
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-semibold text-gray-800">বাংলা:</h2>
          <p className="mt-2 cursor-pointer text-lg leading-relaxed text-gray-700">
            <i>
              রাসুলুল্লাহ ﷺ বলেছেন: <br />
              "তোমাদের মধ্যে কেউ কোনো অন্যায় কাজ দেখলে সে যেন তা হাত দ্বারা
              পরিবর্তন করে। যদি সে এতটুকু না পারে, তাহলে সে যেন তা মুখ দ্বারা
              পরিবর্তন করে। আর যদি এতটুকু করতেও সে সক্ষম না হয়, তবে সে যেন
              অন্তর দ্বারা তা ঘৃণা করে, আর এটি হল ঈমানের সবচেয়ে দুর্বল স্তর।"
            </i> <br />
            <span className=" text-base font-semibold text-green-600">
              (সহিহ মুসলিম: ৪৯)
            </span>
          </p>
        </div>

  

        {/* Read More Button */}
        <div className="mt-8 flex justify-end">
          <Button className="rounded-[6px] bg-green-600 px-6 py-2  text-white shadow-md transition-all duration-300 hover:bg-green-700 ">
            Read more
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Content;
