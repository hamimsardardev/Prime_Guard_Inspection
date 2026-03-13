"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

const Hardgoods_form = ({ isOpen, onClose }) => {
  // 🔥 Scroll Lock Logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {/* Modal Box */}
      <div className="flex flex-col h-[600px] w-[620px] bg-white rounded-[20px]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b dark:border-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-primary dark:text-white">
              Hard Goods
            </h2>
            <p className="md:w-auto lg:w-[520px] text-[14px] md:text-[16px] lg:text-[18px] text-third leading:[18px] dark:text-gray-400 mt-1">
              After submission, the system will automatically send the sample
              report to your mailbox.Each email address is limited to receiving
              a single report.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Form content - scrollable */}
        <form className="flex-1 px-6 py-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="John"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              placeholder="Your Company Ltd"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Company country <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
            >
              <option value="">Select country</option>
              <option value="BD">Bangladesh</option>
              <option value="CN">China</option>
              <option value="IN">India</option>
              <option value="PK">Pakistan</option>
              <option value="VN">Vietnam</option>
            </select>
          </div>

          <div className="grid grid-cols-[100px,1fr] gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Code
              </label>
              <select
                defaultValue="+880"
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary outline-none transition"
              >
                <option>+880</option>
                <option>+86</option>
                <option>+91</option>
                <option>+65</option>
                <option>+66</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="1234567890"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              placeholder="example@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Service location
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition">
              <option value="">Select location</option>
              <option>China</option>
              <option>Southeast Asia</option>
              <option>Europe</option>
              <option>Bangladesh</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
              placeholder="Tell us about your inspection / quotation needs..."
            />
          </div>

          <button
            type="submit"
            className="px-10 py-4 border-2 border-third text-white bg-third hover:bg-gray-600 font-semibold rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2 text-lg cursor-pointer"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hardgoods_form;
