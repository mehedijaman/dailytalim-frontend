import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-scre flex flex-col items-center justify-center ">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl border-t-4 border-green-600">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          যোগাযোগ করুন
        </h1>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3 text-black">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <span className="text-lg">+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
          </div>
          <div className="flex items-center gap-3 text-black">
            <FaEnvelope className="text-green-600 text-xl" />
            <span className="text-lg">dailytalim@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-black">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <span className="text-lg">১২৩ ইসলামিক স্ট্রিট, ঢাকা, বাংলাদেশ</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="আপনার নাম লিখুন"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="আপনার ইমেইল লিখুন"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
          <textarea
            placeholder="আপনার বার্তা লিখুন"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
          >
            বার্তা পাঠান
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
