"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import Qutation_form from "@/app/components/Qutation_form";
import Link from "next/link";

const Softgoods_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }

  // ONLY ADDED
  const items = [
    {
      img: "/softgoodsimageone.png",
      alt: "Garments and Apparel Inspection",
      title: "Garments and Apparel Inspection",
    },
    {
      img: "/softgoodsimagetwo.png",
      alt: "Footwear Inspection",
      title: "Footwear Inspection",
    },
    {
      img: "/softgoodsimagethree.png",
      alt: "Luggage and Bags Inspection",
      title: "Luggage and Bags Inspection",
    },
    {
      img: "/softgoodsimagefour.png",
      alt: "Fashion Accessories Inspection",
      title: "Fashion Accessories Inspection",
    },
    {
      img: "/softgoodsimagefive.png",
      alt: "Home Textile Inspection",
      title: "Home Textile Inspection",
    },
    {
      img: "/softgoodsimagesix.png",
      alt: "Outdoor Textile Inspection",
      title: "Outdoor Textile Inspection",
    },
    {
      img: "/softgoodsimageseven.png",
      alt: "Fabric Inspection",
      title: "Fabric Inspection",
    },
  ];

  return (
    <div>
      {/* ================= Banner Section ================= */}
      <div>
        <section className="bg-[url('/softgoodsbanner.png')] bg-cover bg-center">
          <div className="bg-gray-900/80">
            <Container>
              <div className="space-y-4 py-32 md:py-56">
                <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight">
                  Soft Goods/Textile
                </h2>
                <p className="w-auto md:w-[420px] lg:w-[720px] text-[16px] md:text-[16px] lg:text-[18px] text-white font-normal leading-tight">
                  Soft goods inspection is a quality control process that ensures apparel and textile products meet required standards before shipment. It includes fabric checking, stitching inspection, measurement verification, defect detection, and packaging review. By following AQL standards and conducting inspections during production and final stages, manufacturers can reduce defects, ensure compliance, protect brand reputation, and deliver consistent, high-quality products to customers.
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
      </div>

      {/* ================= Content Section ================= */}
      <section className="pt-12 md:pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 mb-16 justify-center items-center">
            <div className="lg:w-4/5">
              <h3 className="text-primary text-3xl md:text-5xl font-medium mb-6">
                Soft Goods/Textile item we Serve
              </h3>
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

export default Softgoods_part;