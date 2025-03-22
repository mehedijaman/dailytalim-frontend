'use client';

import React from 'react';
import useBlogs from '@/hooks/useBlogs';
import BlogCard from '@/components/Blog/BlogCard';

const BlogPage = () => {
  const { data: blogs, isLoading, isError } = useBlogs();

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError)
    return <div className="text-center text-red-500">Error fetching data</div>;

  return (
    <div className=" ">
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogs?.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
