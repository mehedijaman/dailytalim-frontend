import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { toast } from 'sonner';

const ChangeLanguage = () => {
  return (
    <div className="">
      <div className="">
        <label className="mb-2 block text-sm font-medium text-text-color">
          ভাষা পরিবর্তন
        </label>
        <Select onValueChange={() => toast.warning('ইনশাআল্লাহ, শীঘ্রই আসছে')}>
          <SelectTrigger className="">
            <SelectValue placeholder="ভাষা পরিবর্তন করুন" />
          </SelectTrigger>
          <SelectContent className="bg-secondary-1">
            <SelectGroup>
              <SelectItem value="bn">বাংলা</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ChangeLanguage;
