"use client";

import Container from "@/app/components/common/Container";
import Contact_Part from "@/app/components/Contact_Part";
import Qutation_form from "@/app/components/Qutation_form";
import Sample_part from "@/app/components/Sample_part";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const FactoryAudit = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }

  return (
    <div>
      {/* banner */}
      <section className="bg-[url('/factoryauditbanner.png')] bg-cover bg-center">
        <div className="bg-gray-900/80">
          <Container>
            <div className="space-y-4 py-32 md:py-56">
              <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight ">
                PGI FACTORY AUDIT
              </h2>
              <p className="w-auto md:w-[420px] lg:w-[560px] text-[16px] md:text-[16px] lg:text-[18px] text-white font-normal leading-tight">
                Ensuring quality, safety, and compliance for stationery,
                packaging, handmade crafts, gift items, and paper products.
              </p>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <div className="py-20 px-6 grid lg:grid-cols-2 gap-12 items-center border-t-2 border-gray-300">
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/vr-audit.jpg"
                alt="VR Factory Audit"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-[36px] font-bold text-white mb-4">
                Factory Audit
              </h1>

              <p className="text-primary text-[14px] md:text-[16px] lg:text-[18px] mb-4 leading-relaxed">
                Visualize the inspection scene and make the entire audit process
                digitalized, transparent, and immersive.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-primary text-sm mb-8">
                <ul className="space-y-3">
                  <h3 className="text-[14px] md:text-[16px] lg:text-[18px]">
                    PGI
                  </h3>
                  <li className="flex items-center gap-1">
                    <FaCheck /> 400+ Full-time Inspectors
                  </li>
                  <li className="flex items-center gap-1">
                    <FaCheck /> 30+ Countries Coverage
                  </li>
                  <li className="flex items-center gap-1">
                    <FaCheck /> Panorama Camera Technology
                  </li>
                  <li className="flex items-center gap-1">
                    <FaCheck /> 3D Online Report Processing
                  </li>
                </ul>

                <ul className="space-y-3">
                  <h3 className="text-[14px] md:text-[16px] lg:text-[18px]">
                    Client
                  </h3>
                  <li className="flex items-center gap-1">
                    <FaCheck /> Order Scheduled Within 24h
                  </li>
                  <li className="flex items-center gap-1">
                    <FaCheck /> 3D Real Scene Report
                  </li>
                  <li className="flex items-center gap-1">
                    <FaCheck /> 99% Procurement Risk Avoidance
                  </li>
                </ul>
              </div>

              <div className="flex justify-center md:justify-end">
                <button
                  onClick={handleQutationOpen}
                  className="group text-base font-semibold relative rounded-full min-h-[50px] w-40 overflow-hidden border-2 border-primary bg-white text-gray-700 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-primary hover:before:h-full hover:after:h-full cursor-pointer"
                >
                  <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-gray-700 group-hover:before:h-full group-hover:after:h-full"></span>
                  <span className="absolute text-base bottom-0 left-0 right-0 top-0 z-10 flex h-full  w-full items-center justify-center group-hover:text-white gap-2">
                    Get Quotation
                    <FaArrowRightLong />
                  </span>
                </button>
                <Qutation_form
                  isOpen={getQuotation}
                  onClose={handleQutationClose}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= WHY VR AUDIT ================= */}
      <section className="py-20">
        <Container>
          <div className=" px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl text-white font-bold mb-8">
                Why Need <span className="text-primary">Audit?</span>
              </h2>

              <ul className="space-y-6 text-white">
                <li className="flex items-center gap-2">
                  <VscDebugBreakpointLog />
                  <p className="font-normal text-[16px]">
                    <span className="text-primary font-bold text-[18px]">
                      Visualized Experience:
                    </span>{" "}
                    Real-time immersive factory environment.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <VscDebugBreakpointLog />
                  <p className="font-normal text-[16px]">
                    <span className="text-primary font-bold text-[18px]">
                      Risk Mitigation:
                    </span>{" "}
                    Reduce supply chain and procurement risks efficiently.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <VscDebugBreakpointLog />
                  <p className="font-normal text-[16px]">
                    <span className="text-primary font-bold text-[18px]">
                      Cost Saving:
                    </span>{" "}
                    No travel required, saving time and operational costs.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <VscDebugBreakpointLog />
                  <p className="font-normal text-[16px]">
                    <span className="text-primary font-bold text-[18px]">
                      Anti-Bribery:
                    </span>{" "}
                    Transparent online reporting and supervision.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <VscDebugBreakpointLog />
                  <p className="font-normal text-[16px]">
                    <span className="text-primary font-bold text-[18px]">
                      Professional Team:
                    </span>{" "}
                    Experienced technical audit specialists.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <VscDebugBreakpointLog />
                  <p className="font-normal text-[16px]">
                    <span className="text-primary font-bold text-[18px]">
                      Fast Delivery:
                    </span>{" "}
                    Reports generated within 48h.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/factory-interior.jpg" // replace image
                alt="Factory Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SERVICE COVERAGE ================= */}
      <section className="py-20">
        <Container>
          <div>
            <h2 className="text-[30px] text-white font-bold mb-4">
              Our Service <span className="ml-2 text-primary">Coverage</span>
            </h2>

            <p className="text-primary mb-12">
              Our inspectors and auditors cover more than 30 countries
              worldwide.
            </p>
            <div className="flex">
              <div className="w-[25%}">
                <div className="grid md:grid-cols-2 gap-2 text-primary text-sm mb-8">
                  <ul className="space-y-2">
                    <h3 className="text-[14px] md:text-[16px] lg:text-[18px]">
                      Asia
                    </h3>
                    <li className="flex items-center gap-1">
                      <FaCheck />
                      Bangladesh
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck />
                      China
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck />
                      Myanmar
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Cambodia India
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Indonesia
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Japan
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Malaysia
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Pakistan
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Philippines
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> South Korea
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Thailand
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Turkey
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Vietnam
                    </li>
                  </ul>

                  <ul className="space-y-2">
                    <h3 className="text-[14px] md:text-[16px] lg:text-[18px]">
                      Europe
                    </h3>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Poland
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Czechoslovak
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Hungary
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> United
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Kingdom
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Germany
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Spain
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Ireland
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Belgium
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Sweden
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> France
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Ukraine
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck /> Russia
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[75%]">
                <div className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/worldmap.png"
                    alt="Service Coverage Map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Sample_part />
        <Contact_Part />
      </section>
    </div>
  );
};

export default FactoryAudit;
