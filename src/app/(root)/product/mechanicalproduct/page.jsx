"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import Link from "next/link";
import Qutation_form from "@/app/components/Qutation_form";

const Mechanical_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }

  const items = [
    {
      img: "/mechanicalimageone.jpg",
      alt: "Electromechanical device",
      title: "Electromechanical device",
      link: "/product/electronisproduct",
    },
    {
      img: "/mechanicalimagetwo.jpg",
      alt: "Machine parts",
      title: "Machine parts",
      link: "#",
    },
    {
      img: "/mechanicalimagethree.jpg",
      alt: "Auto parts",
      title: "Auto parts",
      link: "#",
    },
    {
      img: "/mechanicalimagefour.jpg",
      alt: "Pump",
      title: "Pump",
      link: "#",
    },
    {
      img: "/mechanicalimagefive.jpg",
      alt: "Mold",
      title: "Mold",
      link: "#",
    },
    {
      img: "/mechanicalimagesix.jpg",
      alt: "Machining parts",
      title: "Machining parts",
      link: "#",
    },
    {
      img: "/mechanicalimageseven.jpg",
      alt: "Die casting",
      title: "Die casting",
      link: "#",
    },
    {
      img: "/mechanicalimageeight.jpg",
      alt: "Stamping parts",
      title: "Stamping parts",
      link: "#",
    },
  ];

  return (
    <div>
      {/* ================= Banner Section ================= */}
      <section className="bg-[url('/mechanicalproductbanner.png')] bg-cover bg-center">
        <div className="bg-gray-900/80">
          <Container>
            <div className="space-y-4 py-32 md:py-56">
              <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight">
                Mechanical Products
              </h2>
              <p className="w-auto md:w-[420px] lg:w-[720px] text-[16px] md:text-[16px] lg:text-[18px] text-white font-normal leading-tight">
                PGI Inspection provides third-party quality control and quality
                assurance services enable you to ensure quality and safety in
                mechanical products with a variety of goods like electromechanical device, machine parts, auto parts, pump, and die casting to support your regulatory compliance in different consumer markets.
              </p>

              <div>
                <Link
                  href="/resourses/samplereport"
                  className="relative h-[50px] w-56 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-60 hover:before:w-60"
                >
                  <span className="relative z-10">
                    Download a Sample Report
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ================= Content Section ================= */}
      <section className="pt-12 md:pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            <div className="lg:w-4/5">
              <h3 className="text-primary text-3xl md:text-5xl font-medium mb-6">
                Mechanical Products we Serve
              </h3>

              <p className="text-white text-base leading-relaxed max-w-[820px]">
                PGI provides professional mechanical product inspection services
                to ensure that mechanical components and finished products meet
                quality standards, technical specifications, and safety
                requirements. Our inspection process includes checking
                dimensions, material quality, workmanship, assembly accuracy,
                and overall product functionality. We inspect a wide range of
                mechanical products such as machinery parts, metal components,
                tools, fasteners, and industrial equipment. Our goal is to
                identify defects early, ensure compliance with international
                standards, and help clients deliver reliable and high-quality
                mechanical products to the market
              </p>
            </div>

            <div className="lg:w-1/5">
              <div className="flex justify-center items-center">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-1.5 h-5 bg-primary"></span>
                    <h2 className="text-xl font-semibold tracking-wide text-primary">
                      CONTACT US
                    </h2>
                  </div>

                  <button
                    onClick={handleQutationOpen}
                    className="w-48 py-3 rounded-full bg-primary border border-primary text-black font-medium hover:bg-transparent hover:text-primary transition"
                  >
                    GET A QUOTE
                  </button>

                  <Qutation_form
                    isOpen={getQuotation}
                    onClose={handleQutationClose}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= Cards (MAPPED ONLY) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="relative h-64">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                    <a className="hover:text-white hover:underline" href={item.link}>
                      {item.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Sample_part />
      </section>
    </div>
  );
};

export default Mechanical_part;