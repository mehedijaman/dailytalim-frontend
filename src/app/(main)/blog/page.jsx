'use client';

import React from 'react';
import useBlogs from '@/hooks/useBlogs';
import BlogCard from '@/components/Blog/BlogCard';

const BlogPage = () => {
  const { data: blogs, isLoading, isError } = useBlogs();

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching data</div>;

  return (
    <div className="container mx-auto ">
  
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
