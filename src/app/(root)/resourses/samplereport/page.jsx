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
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Electronics Products Inspection
                    </p>
                  </div>

                  <a
                    href="/pdf/electronics.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>

                {/* 2 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Soft Goods/Textile
                    </p>
                  </div>

                  <a
                    href="/pdf/softgoods.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>

                {/* 3 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Hard Goods
                    </p>
                  </div>

                  <a
                    href="/pdf/hardgoods.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>

                {/* 4 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Mechanical Products
                    </p>
                  </div>

                  <a
                    href="/pdf/product.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>

                {/* 5 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Craft & Paper Goods
                    </p>
                  </div>

                  <a
                    href="/pdf/craftpaper.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>

                {/* 6 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Footwear
                    </p>
                  </div>

                  <a
                    href="/pdf/footwear.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>

                {/* 7 */}
                <div className="flex items-center justify-between p-4 w-full border border-gray-400 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="border border-red-600 p-2">
                      <ImFilePdf className="text-red-600 text-xl" />
                    </div>
                    <p className="text-third text-[12px] sm:text-[16px]">
                      Food & Fruits
                    </p>
                  </div>

                  <a
                    href="/pdf/food.pdf"
                    download
                    className="border border-primary px-3 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 hover:text-third hover:bg-primary whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Samplereport_part;
