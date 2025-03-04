import React from 'react';
import { Button } from '../ui/button';
import { IoMdShareAlt } from 'react-icons/io';
const ShareButton = () => {
  return (
    <div className="mt-8 flex justify-end">
      <Button className="">
        শেয়ার
        <IoMdShareAlt size={20} />
      </Button>
    </div>
  );
};

export default ShareButton;
