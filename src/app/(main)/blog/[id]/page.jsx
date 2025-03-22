'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IoArrowBackSharp } from 'react-icons/io5';
import Link from 'next/link';

const fetchBlogDetails = async id => {
  const { data } = await axios.get('/blog.json');
  return data.find(blog => blog.id.toString() === id);
};

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['blogDetails', id],
    queryFn: () => fetchBlogDetails(id),
  });

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError || !blog)
    return <div className="text-center text-red-500">Blog not found</div>;

  return (
    <div className="container mx-auto py-8">
      <Link href="/blog">
        <div className="fixed flex items-center">
          <p className="hover:cursor-pointer">
            <IoArrowBackSharp size={30} />
          </p>
        </div>
      </Link>
      <div className="mb-6 flex items-center justify-center">
        <div className="mt-auto flex items-center rounded bg-primary-500 px-4 py-1 text-white">
          <p className="text-sm font-semibold">{blog.category}</p>
        </div>
      </div>
      <h1 className="mb-4 text-center text-4xl font-bold">{blog.title}</h1>
      <p className="text-center text-sm">
        <span className="hover:cursor-pointer">{blog.reference}</span>{' '}
        <span className="pl-2 pr-2">/</span>{' '}
        <span className="hover:cursor-pointer">{blog.date}</span>
      </p>
      <hr className="my-10" />
      <div className="mx-auto text-justify font-noto-serif-banglai md:px-5">
        <p className="text-lg leading-relaxed">{blog.ShortHadith}</p>
        <p className="mt-6 text-lg">{blog.longHadith}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
