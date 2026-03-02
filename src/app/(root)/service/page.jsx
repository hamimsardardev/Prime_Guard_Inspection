"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sample_part from "@/app/components/Sample_part";
import Container from "@/app/components/common/Container";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Qutation_form from "@/app/components/Qutation_form";

const Service_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }
  return (
    <div>
      <section className="bg-[url('/servicebanner.png')] bg-cover bg-center">
        <div className="bg-black/60">
          <Container>
            <div className="py-32 md:py-56 space-y-4">
              <h2 className="text-[24px] md:text-[30px] md:text-[36px] text-primary font-semibold leading-[36px]">
                SERVICE
              </h2>
              <p className="text-white text-[18px] leading-relaxed max-w-[720px]">
                We provide independent third-party inspection services to ensure
                your products meet quality standards, specifications, and buyer
                requirements before shipment. Our experienced inspectors verify
                materials, production processes, and finished goods to minimize
                risk and prevent costly defects.
                <span className="mt-4 block text-white text-[18px] leading-relaxed max-w-[720px]">
                  With accurate reporting, detailed photo documentation, and
                  fast turnaround time, we help you maintain product quality,
                  protect your brand reputation, and build trust with your
                  customers worldwide.
                </span>
              </p>

              <div>
                <button
                  onClick={handleQutationOpen}
                  className="relative h-[50px] w-44 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 cursor-pointer"
                >
                  <span className="relative z-10">Get Quotation</span>
                </button>
                <Qutation_form
                  isOpen={getQuotation}
                  onClose={handleQutationClose}
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <div className="bg-third">
            <div className="">
              <ul className="flex flex-col sm:flex-row flex-wrap sm:justify-between items-start sm:items-center text-[16px] md:text-[18px] font-semibold text-primary">
                <li className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:text-third hover:bg-primary transition-all duration-300">
                  <a href="#">Product Quality Inspection</a>
                </li>
                <li className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:text-third hover:bg-primary transition-all duration-300">
                  <a href="#">Audit & Survey</a>
                </li>
                <li className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:text-third hover:bg-primary transition-all duration-300">
                  <a href="#">Supplier Management & Development</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16 md:space-y-20">
            {/* Section 1 - Product Quality Control Inspection */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/serviceproductimage.png"
                  alt="Engineer inspecting product in factory"
                  fill
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-white leading-[24px] md:leading-[36px] lg:leading-[48px]">
                    <Link
                      className="hover:underline"
                      href="/service/productinspection"
                    >
                      Product Quality Inspection
                    </Link>
                  </h2>
                </div>
                <ul className="space-y-1 text-primary text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Pre-production Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    During Production Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Pre-Shipment Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Sample pick inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Packaging Inspection
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 - Audit and servey */}
            <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/auditsurvey.jpg"
                  alt="Factory evaluation team"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-white leading-[24px] md:leading-[36px] lg:leading-[48px]">
                  <Link className="hover:underline" href="/service/auditservey">
                    Audit & Survey
                  </Link>
                </h2>
                <ul className="space-y-1 text-primary text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Factory Audit
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Supplier Audit
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Optimization For Management System
                  </li>

                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Loading Supervision
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Survey & Verification
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 - Supplier Management & Development */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/suppliermanagement2.jpg"
                  alt="Supplier Management & Development"
                  fill
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-white leading-[24px] md:leading-[36px] lg:leading-[48px]">
                  <Link
                    className="hover:underline"
                    href="/service/supliermanagement"
                  >
                    Supplier Management & Development
                  </Link>
                </h2>
                <ul className="space-y-1 text-primary text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Management Consulting
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </Container>
        <Sample_part />
      </section>
    </div>
  );
};

export default Service_part;
