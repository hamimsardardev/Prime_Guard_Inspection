import React from "react";
import Container from "./common/Container";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
const Service = () => {
  return (
    <div>
      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="border-t-2 border-gray-300">
            {/* Header */}
            <div className="text-center py-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                <span className="text-primary">OUR SERVICE</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Services Grid - explicit cards, no map */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 - Product Quality Control Inspection */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative  overflow-hidden ">
                  <div className="relative h-48 md:h-56 w-full overflow-hidden ">
                    <Image
                      src="/serviceimageone.jpg"
                      alt="Product image four"
                      fill
                      className=" object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-[24px] md:text-2xl font-bold text-primary mb-4 cursor-pointer hover:text-white transition-colors">
                    <Link
                      className="hover:underline"
                      href="/service/productinspection"
                    >
                      Product Quality Inspection
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-primary text-sm md:text-base cursor-pointer">
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Pre-production Inspection
                    </li>
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      During Production Inspection
                    </li>
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Pre-Shipment Inspection
                    </li>

                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Sample pick inspection
                    </li>
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Packaging Inspection
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card 2 - Government Procurement */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src="/serviceimagethree.jpg"
                    alt="serviceimagethree.jpg"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow  cursor-pointer">
                  <h3 className="text-[24px] md:text-2xl font-bold text-primary mb-4 hover:text-white transition-colors">
                    <Link className="hover:underline" href="/service/auditservey">
                      Audit & Survey
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-primarytext-sm md:text-base flex-grow cursor-pointer">
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Factory Audit
                    </li>
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Supplier Audit
                    </li>
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Loading Supervision
                    </li>
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Survey & Verification
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3 - Supplier Management */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src="/serviceimagetwo.jpg"
                    alt="serviceimagetwo.jpg"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow cursor-pointer">
                  <h3 className="text-[24px] md:text-2xl font-bold text-primary mb-4 hover:text-white transition-colors">
                    <Link
                      className="hover:underline"
                      href="/service/supliermanagement"
                    >
                      Supplier Management & Development
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-primary text-sm md:text-base flex-grow cursor-pointer">
                    <li className="group flex items-center gap-2 text-primary hover:text-white">
                      <span className="text-primary text-lg flex items-center group-hover:text-white">
                        <GoDotFill />
                      </span>
                      Management Consulting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <button className="relative h-[50px] w-40 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-700 before:duration-500 before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56 cursor-pointer">
                <span className="relative z-10">Get a Quote</span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Service;
