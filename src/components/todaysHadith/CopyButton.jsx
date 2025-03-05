'use client';

import { LuCopy } from 'react-icons/lu';
import { useState, useEffect } from 'react';

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
    <button onClick={handleCopy} className="relative flex items-center gap-2 p-2 text-gray-700 hover:text-green-600">
      <LuCopy size={20} />
      {copied && (
        <span className="absolute -top-6 w-16 left-1/2 -translate-x-1/2 text-xs  text-white bg-black  p-1 rounded shadow">
          কপি হয়েছে!
        </span>
      )}
    </button>
  );
};

export default CopyButton;
