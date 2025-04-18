import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="-mb-0 w-full bg-primary-300 py-10 text-black md:-mb-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-600 pb-6 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">ডেইলি তালিম</h2>
            <p className="mt-3">
              ইসলামিক জ্ঞান ও হাদিসের একটি বিশ্বস্ত উৎস। প্রতিদিন নতুন তালীম
              নিয়ে আসছি।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-3 text-xl font-semibold">গুরুত্বপূর্ণ লিংক</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sitemap" className="">
                  📍 <span className='hover:underline'>সাইটম্যাপ</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="">
                  🔐 <span className='hover:underline'>গোপনীয়তার নীতি</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="">
                  📜 <span className='hover:underline'>শর্তাবলি</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="mb-3 text-xl font-semibold">যোগাযোগ</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.facebook.com/DailyTalimBD"
                target="_blank"
                className="text-[#0866ff]"
              >
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="">
                <BsTwitterX size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-pink-600"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://github.com/dailytalim"
                target="_blank"
                className="text-gray-800"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                className="hover:text-green-400"
              >
                <img
                  src="https://i.postimg.cc/X7dZYZHh/google-play.png"
                  className="h-6 w-6"
                  alt="Google Play"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center">
          <p>© {new Date().getFullYear()} Daily Talim | সর্বস্বত্ব সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
