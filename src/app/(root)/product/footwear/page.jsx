"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import Link from "next/link";
import Qutation_form from "@/app/components/Qutation_form";

const Footwear_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }

  // ✅ ONLY ADDED DATA ARRAY
  const footwearData = [
    { title: "Casual Footwear", image: "/footwearone.jpg" },
    { title: "Formal Footwear", image: "/footweartwo.jpg" },
    { title: "Women’s Footwear", image: "/footwearthree.jpg" },
    { title: "Sandals & Slippers", image: "/footwearfour.jpg" },
    { title: "Boots", image: "/footwearfive.jpg" },
    { title: "Safety Footwear", image: "/footwearsix.jpg" },
    { title: "Sports Footwear", image: "/footwearseven.jpg" },
    { title: "Kids & Baby Footwear", image: "/footweareight.jpg" },
  ];

  return (
    <div>
      {/* ================= Banner Section ================= */}
      <section className="bg-[url('/footwearbanner.png')] bg-cover bg-center">
        <div className="bg-gray-900/80">
          <Container>
            <div className="space-y-4 py-32 md:py-56">
              <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight ">
                Footwear We Inspect
              </h2>

              <p className="w-auto md:w-[420px] lg:w-[560px] text-[16px] md:text-[16px] lg:text-[18px] text-white font-normal leading-tight">
                We provide comprehensive quality inspection services for a wide
                range of footwear products to ensure durability, comfort,
                safety, and compliance with international standards
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
                Footwear We Inspect we Serve
              </h3>

              <p className="text-white text-base leading-relaxed max-w-[820px]">
                We provide comprehensive inspection services for all types of
                footwear to ensure quality, durability, and compliance with
                buyer specifications. From raw materials to finished products,
                we verify workmanship, sizing, labeling, packaging, and
                performance standards before shipment to protect your brand and
                customer satisfaction.
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
                    className="w-48 py-3 rounded-full text-[18px] bg-primary border border-primary text-black font-medium hover:bg-transparent hover:text-primary transition"
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

          {/* ================= Cards (ONLY CHANGED PART) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {footwearData.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                    <a className="hover:text-white hover:underline" href="#">
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

export default Footwear_part;