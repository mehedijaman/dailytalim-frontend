'use client';

import { BsClipboard2Fill } from 'react-icons/bs';
import { BsClipboard2CheckFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { FiDownload } from 'react-icons/fi';

const CopyButton = () => {
  const [copied, setCopied] = useState(false);
  const [hadithText, setHadithText] = useState('');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const hadithElement = document.getElementById('hadith');
      if (hadithElement) {
        setHadithText(hadithElement.innerText);
      }
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hadithText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div>
      <div className="flex h-full justify-end">
        <Button
          onClick={handleCopy}
          className="size-8 rounded-[6px] md:size-auto"
        >
          <span className="hidden xl:block">কপি</span>{' '}
          {copied ? <BsClipboard2CheckFill /> : <BsClipboard2Fill />}
        </Button>
      </div>
    </div>
  );
};

export default CopyButton;
