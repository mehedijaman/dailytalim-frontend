'use client';

import React, { useState } from 'react';
import useBlogs from '@/hooks/useBlogs';
import BlogCard from '@/components/Blog/BlogCard';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Input } from '@/components/ui/input';

const BlogPage = () => {
  const { data: blogs, isLoading, isError } = useBlogs();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [showPopup, setShowPopup] = useState(false);

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError)
    return <div className="text-center text-red-500">Error fetching data</div>;

  // Get unique categories
  const categories = ['সব', ...new Set(blogs?.map(blog => blog.category))];

  // Filtered blogs based on category and search term
  const filteredBlogs = blogs?.filter(blog =>
    (selectedCategory === 'সব' || blog.category === selectedCategory) &&
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header Section */}
      <div className="mb-2 bg-[#0bad4c]/40 py-20 text-center">
        <h1 className="text-3xl font-bold">ডেইলি তালিম</h1>
        <p className="mt-0 p-5 text-base md:mt-2 md:p-0">
          বিশ্বজোড়া পাঠশালা মোর, সবার আমি ছাত্র, নানানভাবে নতুন জিনিষ শিখছি দিবারাত্র।
        </p>
      </div>

      {/* Blog Categories & Search Navbar */}
      <div className="mb-10 flex items-center justify-between px-4 md:justify-center gap-4">
        {/* Toggle Button for Categories (Left) */}
        <button
          className="md:hidden flex items-center text-xl p-2 rounded-md bg-[#0bad4c] text-white"
          onClick={() => setShowPopup(true)}
        >
          <FaBars />
        </button>

        {/* Categories List (Desktop) */}
        <div className="hidden md:flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 text-sm font-semibold rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-[#0bad4c] text-white shadow-md'
                  : 'hover:bg-[#0bad4c]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Button (Right) */}
        <button
          className="md:hidden flex items-center text-xl p-2 rounded-md bg-[#0bad4c] text-white"
          onClick={() => setShowPopup(true)}
        >
          <FaSearch />
        </button>
      </div>

      {/* Popup Modal for Categories & Search (Mobile) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-green-100 w-4/5 md:w-1/3 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
              onClick={() => setShowPopup(false)}
            >
              <FaTimes />
            </button>

            {/* Search Bar */}
            <div className="mb-4">
              <div className="flex items-center rounded-lg border border-muted px-3">
                <FaSearch size={20} />
                <Input
                  placeholder="অনুসন্ধান করুন..."
                  className="w-full border-none bg-transparent placeholder-muted outline-none ml-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Categories List */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowPopup(false);
                  }}
                  className={`px-4 py-1 text-sm font-semibold rounded-lg transition-all text-black ${
                    selectedCategory === category
                      ? 'bg-[#0bad4c] text-black  shadow-md'
                      : 'hover:bg-[#0bad4c]/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="px-4">
        {filteredBlogs.length > 0 ? (
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg font-semibold text-gray-500">
            কোন ব্লগ পাওয়া যায়নি
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
