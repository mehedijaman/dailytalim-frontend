'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { IoMdShareAlt, IoMdClose } from 'react-icons/io';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  EmailShareButton,
  TelegramShareButton,
} from 'react-share';
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaFacebookMessenger,
  FaTelegram,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ShareButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const modalRef = useRef(null);

  // Dynamic share content
  const hadithTitle = 'আজকের হাদিস';
  const hadithContent =
    'রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) বলেছেনঃ তোমাদের পাঁচ ওয়াক্ত নামায আদায় কর...';
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${hadithTitle} - ${hadithContent}\n\nআরো জানতে ভিজিট করুন: ${shareUrl}`;

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div>
      <div className="flex justify-end">
        <Button
          onClick={() => setShowOptions(true)}
          className="flex size-8 items-center gap-2 md:size-auto"
        >
          <span className="hidden xl:block">শেয়ার</span>{' '}
          <IoMdShareAlt size={20} />
        </Button>
      </div>

      {showOptions && (
        <div className="fixed p-4 md:p-0  inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 ">
          <div
            ref={modalRef}
            className="relative w-auto rounded-lg bg-white p-6 shadow-lg"
          >
            <button
              onClick={() => setShowOptions(false)}
              className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
            >
              <IoMdClose size={24} />
            </button>

            <p className="mb-4 text-center text-lg font-semibold text-black">
              শেয়ার করুন:
            </p>

            {/* Social media share buttons */}
            <div className="flex justify-center gap-6 flex-wrap">
              <FacebookShareButton
                url={shareUrl}
                quote={shareText}
                hashtag="#Hadith"
              >
                <FaFacebook
                  size={32}
                  className="cursor-pointer text-blue-600 transition-transform hover:scale-110"
                />
              </FacebookShareButton>

              <FacebookMessengerShareButton
                url={shareUrl}
                appId="YOUR_FACEBOOK_APP_ID"
              >
                <FaFacebookMessenger
                  size={32}
                  className="cursor-pointer text-blue-500 transition-transform hover:scale-110"
                />
              </FacebookMessengerShareButton>

              <TwitterShareButton url={shareUrl} title={shareText}>
                <FaXTwitter
                  size={32}
                  className="cursor-pointer text-black transition-transform hover:scale-110"
                />
              </TwitterShareButton>

              <LinkedinShareButton
                url={shareUrl}
                title={hadithTitle}
                summary={hadithContent}
                source={shareUrl}
              >
                <FaLinkedin
                  size={32}
                  className="cursor-pointer text-blue-700 transition-transform hover:scale-110"
                />
              </LinkedinShareButton>

              <WhatsappShareButton url={shareUrl} title={shareText} separator=" - ">
                <FaWhatsapp
                  size={32}
                  className="cursor-pointer text-green-500 transition-transform hover:scale-110"
                />
              </WhatsappShareButton>

              <TelegramShareButton url={shareUrl} title={shareText}>
                <FaTelegram
                  size={32}
                  className="cursor-pointer text-blue-500 transition-transform hover:scale-110"
                />
              </TelegramShareButton>
              
              <EmailShareButton url={shareUrl} subject={hadithTitle} body={shareText}>
                <FaEnvelope
                  size={32}
                  className="cursor-pointer text-blue-500 transition-transform hover:scale-110"
                />
              </EmailShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
