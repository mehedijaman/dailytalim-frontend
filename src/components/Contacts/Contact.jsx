"use client";

import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Link } from 'lucide-react';

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset
  } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
    reset();
  };
  return (
    <div className="rounded-2xl border-b-4 border-t-4 border-dailyTalim-primary-500 pb-8">
      <div className="ml-2 mr-2 mt-8 lg:ml-4 lg:mr-4">
        <div className="ml-4 flex w-full flex-col gap-6 lg:ml-0">
          <div>
            <h1 className="mb-2 text-center text-3xl font-bold">
              যোগাযোগ করুন
            </h1>
            <p className="text-center">
              আপনার মতামত ও পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ ।
            </p>
          </div>
        </div>

        <div className="mt-8 w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-2 md:col-span-1">
              <Label>পুরো নাম</Label>
              <Input
                {...register('name')}
                type="text"
                required
                name="name"
                className="placeholder:text-gray-400"
                placeholder="আপনার পুরো নাম লিখুন"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label>ইমেইল ঠিকানা</Label>
              <Input
                {...register('email')}
                type="email"
                required
                name="email"
                className="placeholder:text-gray-400"
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label>ফোন</Label>
              <Input
                {...register('phone')}
                type="text"
                required
                name="phone"
                className="placeholder:text-gray-400"
                placeholder="আপনার ফোন নম্বর লিখুন"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label>প্রকার</Label>
              <Select required onValueChange={(value) => setValue("type", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="একটি নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent className="bg-slate-50 text-black">
                  <SelectItem value="question">জিজ্ঞাসা</SelectItem>
                  <SelectItem value="feedback">মতামত</SelectItem>
                  <SelectItem value="suggestion">পরামর্শ</SelectItem>
                  <SelectItem value="complaint">অভিযোগ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Label>বিষয়</Label>
              <Input
                {...register('subject')}
                type="text"
                className="placeholder:text-gray-400"
                required
                name="subject"
                placeholder="বিষয় লিখুন"
              />
            </div>
            <div className="col-span-2">
              <Label>বার্তা</Label>
              <Textarea
                {...register('message')}
                required
                name="message"
                placeholder="আপনার বার্তা লিখুন..."
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="col-span-2 bg-[#16db65] hover:bg-green-600"
            >
              জমা দিন
            </Button>
          </form>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-[#0866ff] transition hover:text-green-600"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="transition hover:text-green-600"
          >
            <BsTwitterX className="text-3xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-[#e1306c] transition hover:text-green-600"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="transition hover:text-green-600"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.example"
            target="_blank"
            className="text-[#4285F4] transition hover:text-green-600"
          >
            <img
              src="https://i.postimg.cc/X7dZYZHh/google-play.png"
              className="h-7 w-7"
              alt="Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
