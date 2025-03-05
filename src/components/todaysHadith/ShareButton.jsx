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
} from 'react-share';
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaFacebookMessenger,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ShareButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Check out this amazing content!';

  const modalRef = useRef(null);

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
      <div className="mt-2 flex justify-end">
        <Button
          onClick={() => setShowOptions(true)}
          className="flex items-center gap-2"
        >
          শেয়ার <IoMdShareAlt size={20} />
        </Button>
      </div>

      {showOptions && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
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

            <div className="flex justify-center gap-6">
              <FacebookShareButton
                url={shareUrl}
                quote={shareText}
                hashtag="#Share"
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
                title={shareText}
                summary={shareText}
                source={shareUrl}
              >
                <FaLinkedin
                  size={32}
                  className="cursor-pointer text-blue-700 transition-transform hover:scale-110"
                />
              </LinkedinShareButton>

              <WhatsappShareButton
                url={shareUrl}
                title={shareText}
                separator=" - "
              >
                <FaWhatsapp
                  size={32}
                  className="cursor-pointer text-green-500 transition-transform hover:scale-110"
                />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
