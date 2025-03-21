'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const BlogCard = ({ blog }) => {
  const router = useRouter();

  const truncateText = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <div className="mb-6 flex h-full max-w-lg flex-col rounded-lg p-5 hover:bg-[#0bad4c]/5">
      <div className="flex-grow">
        <p className="text-sm font-semibold text-[#0bad4c]">{blog.category}</p>
        <h2 onClick={() => router.push(`/blog/${blog.id}`)} className="mt-2 text-xl font-bold leading-snug hover:text-[#0bad4c] hover:cursor-pointer">{blog.title}</h2>
        <p className="mt-3 text-sm">
          <span className="font-medium pr-1 ">{blog.reference}</span> /{' '}
          <span className='pl-1'>{blog.date}</span>
        </p>
        <hr className="my-4" />
        <p className="mt-2 text-sm leading-relaxed">{truncateText(blog.ShortHadith, 30)}</p>
      </div>
      
      <div>
        <button
          onClick={() => router.push(`/blog/${blog.id}`)}
          className="mt-auto flex items-center gap-1 rounded bg-[#0bad4c] px-4 py-1 text-white hover:bg-[#0bad4c]/90"
        >
          বিস্তারিত পড়ুন →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
