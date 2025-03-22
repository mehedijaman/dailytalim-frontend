'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const BlogCard = ({ blog }) => {
  const router = useRouter();

  const truncateText = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  return (
    <div className="mb-6 flex h-full flex-col rounded-lg bg-secondary-1 p-5">
      <div className="flex-grow">
        <p className="text-sm font-semibold text-primary-500">
          {blog.category}
        </p>
        <h2
          onClick={() => router.push(`/blog/${blog.id}`)}
          className="mt-2 text-xl font-bold leading-snug hover:cursor-pointer"
        >
          {blog.title}
        </h2>
        <p className="mt-3 text-sm">
          <span className="pr-1 font-medium">{blog.reference}</span> /{' '}
          <span className="pl-1">{blog.date}</span>
        </p>
        <hr className="my-4 border-muted" />
        <p className="mt-2 text-sm leading-relaxed">
          {truncateText(blog.ShortHadith, 30)}
        </p>
      </div>

      <div>
        <Button onClick={() => router.push(`/blog/${blog.id}`)}>
          বিস্তারিত পড়ুন →
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
