import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="rounded-2xl border-b-4 border-t-4 border-dailyTalim-primary-500 pb-8">
      <div className="ml-0 mr-0 mt-8 lg:ml-4 lg:mr-4">
        <div className="ml-4 flex w-full flex-col gap-6 lg:ml-0">
          <div className="">
            <h1 className="mb-2 text-center text-3xl font-bold">
              যোগাযোগ করুন
            </h1>
            <p className="mb- text-center">
              আপনার মতামত ও পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ ।
            </p>
          </div>
        </div>

        <div className="mt-8 w-full">
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="col-span-2 block md:col-span-1">
              <span className="">পুরো নাম</span>
              <input
                type="text"
                required
                name="name"
                placeholder="আপনার পুরো নাম লিখুন"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              />
            </label>
            <label className="col-span-2 block md:col-span-1">
              <span className="">ইমেইল ঠিকানা</span>
              <input
                type="email"
                required
                name="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              />
            </label>
            <label className="col-span-2 block md:col-span-1">
              <span className="">ফোন</span>
              <input
                type="text"
                required
                name="phone"
                placeholder="আপনার ফোন নম্বর লিখুন"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              />
            </label>

            <label className="col-span-2 block md:col-span-1">
              <span className="">প্রকার</span>
              <select
                name="type"
                required
                className="mt-1 h-11 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              >
                <option value="question">জিজ্ঞাসা</option>
                <option value="feedback">মতামত</option>
                <option value="suggestion">পরামর্শ</option>
                <option value="complaint">অভিযোগ</option>
              </select>
            </label>
            <label className="col-span-2 block">
              <span className="">বিষয়</span>
              <input
                type="text"
                required
                name="subject"
                placeholder="বিষয় লিখুন"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              />
            </label>
            <label className="col-span-2 block">
              <span className="">বার্তা</span>
              <textarea
                required
                name="message"
                placeholder="আপনার বার্তা লিখুন..."
                rows="4"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#16db65]"
              ></textarea>
            </label>
            <input
              type="submit"
              className="col-span-2 rounded-lg bg-[#16db65] py-2 font-semibold text-white transition hover:bg-green-600"
              value="জমা দিন"
            />
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
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
