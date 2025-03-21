'use client';

import React from 'react';
import useBlogs from '@/hooks/useBlogs';
import BlogCard from '@/components/Blog/BlogCard';

const BlogPage = () => {
  const { data: blogs, isLoading, isError } = useBlogs();

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching data</div>;

  return (
    <div className=" ">
      {/* <div className="mb-10 text-center px-full py-28 bg-[#0bad4c]">
        <h1 className="text-3xl font-bold">ডেইলি তালিম</h1>
        <p className="">বিশ্বজোড়া পাঠশালা মোর, সবার আমি ছাত্র, নানানভাবে নতুন জিনিষ শিখছি দিবারাত্র।</p>
      </div> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
