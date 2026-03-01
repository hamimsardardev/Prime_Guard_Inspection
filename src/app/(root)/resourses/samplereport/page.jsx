"use client";

import Container from "@/app/components/common/Container";
import React from "react";
import { ImFilePdf } from "react-icons/im";

const Samplereport_part = () => {
  return (
    <>
    
      <section className="bg-[url('/samplebannerimage.png')] bg-cover bg-center">
        <Container>
          <div className="space-y-6 py-[200px] ">
            <div className="bg-white mx-auto w-auto lg:w-[1150px] py-2 lg:py-12 px-2 lg:px-12 rounded-[20px]">
              <h3 className="text-center text-[36px] font-bold mb-12">
                Sample Report
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Electronics Products Inspection
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>

                {/* 2 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Soft Goods/Textile
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>

                {/* 3 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Hard Goods
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>

                {/* 4 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Mechanical Products
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>

                {/* 5 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Craft & Paper Goods
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>

                {/* 6 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Footwear
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>

                {/* 7 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third font-normal text-[12px] sm:text-[16px]">
                      Food & Fruits
                    </p>
                  </div>
                  <button className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap">
                    Get Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* sample form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <Container>
          <div>
            {/* Header / Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-[38px] font-bold tracking-tight text-primary sm:text-[24px]">
                Can't find the inspection report you need? Please leave a
                message to let us know your requirements.
              </h1>
            </div>

            {/* Form Card */}
            <div className="shadow-xl mx-auto max-w-4xl rounded-2xl overflow-hidden border border-gray-100">
              <div className="px-8 py-10 sm:px-12">
                <form className="space-y-6">
                  {/* Grid for form fields */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-primary"
                      >
                        Company Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="mt-1 block w-full text-white bg-gray-800 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary"
                      >
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="mt-1 block w-full text-white bg-gray-800 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full text-white bg-gray-800 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primary"
                      >
                        Phone<span className="text-red-500">*</span>
                      </label>
                      <div className="flex mt-1">
                        <select
                          id="country-code"
                          defaultValue="+1"
                          className="rounded-l-lg border-r-0 text-white bg-gray-800 border-gray-300 bg-gray-50 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2.5"
                        >
                          <option>+1</option>
                          <option>+880</option>
                          <option>+44</option>
                          <option>+91</option>
                          {/* Add more as needed */}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="block w-full rounded-r-lg text-white bg-gray-800 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Select */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-primary"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      className="mt-1 block w-full text-white bg-gray-800 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                    >
                      <option>Please select a service</option>
                      <option>Third Party Inspection</option>
                      <option>Plant Evaluation</option>
                      <option>Project Quality Management</option>
                      <option>Product Testing & Inspection</option>
                      <option>Quality Engineering Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary"
                    >
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="mt-1 block w-full text-white bg-gray-800 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                      placeholder="Tell us more about your request..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3 bg-transparent border border-primary  text-primary font-medium rounded-lg shadow-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      Get a Sample Report
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-8 text-center text-sm text-white">
              We will get back to you shortly with a sample report.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Samplereport_part;
