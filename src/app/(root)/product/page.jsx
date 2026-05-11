"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import Qutation_form from "@/app/components/Qutation_form";

const Product_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }

  const products = [
    {
      img: "/product1.jpg",
      alt: "Product Inspection",
      title: "Electronics Products Inspection",
      link: "/product/electronisproduct",
    },
    {
      img: "/product2.jpg",
      alt: "Industrial Product Inspection",
      title: "Soft Goods",
      link: "#",
    },
    {
      img: "/product3.jpg",
      alt: "Full Inspection",
      title: "Hard Goods",
      link: "#",
    },
    {
      img: "/product4.jpg",
      alt: "Full Inspection",
      title: "Mechanical Products",
      link: "#",
    },
    {
      img: "/product5.jpg",
      alt: "Full Inspection",
      title: "Chemical Products",
      link: "#",
    },
    {
      img: "/product6.jpg",
      alt: "Full Inspection",
      title: "Food",
      link: "#",
    },
    {
      img: "/product7.jpg",
      alt: "Full Inspection",
      title: "Agriculture Products",
      link: "#",
    },
  ];

  return (
    <div>
      {/* ================= Banner Section ================= */}
      <section className="bg-[url('/productbanner.jpg')] bg-cover bg-center">
        <Container>
          <div className="py-32 md:py-56 space-y-4">
            <h2 className="text-[24px] md:text-[30px] md:text-[36px] text-primary font-semibold leading-[36px]">
              Product & Industries
            </h2>

            <p className="text-white text-base leading-relaxed max-w-[720px]">
              We provide inspection, audit, and quality control services across
              a wide range of products and industries — ensuring compliance,
              safety, and performance at every stage.
            </p>

            <div>
              <button
                onClick={handleQutationOpen}
                className="relative h-[50px] w-44 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 hover:before:h-56 hover:before:w-56"
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
      </section>

      {/* ================= Content Section ================= */}
      <section className="pt-12 md:pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            <div className="lg:w-4/5">
              <h3 className="text-primary text-3xl md:text-5xl font-medium mb-6">
                Industries we Serve
              </h3>

              <p className="text-white text-base leading-relaxed max-w-[720px]">
                PGI provides quality control inspection, supplier management and
                development, project quality management, Acceptance of
                government procurement, and lab testing for all kinds of
                products.
              </p>
            </div>
          </div>

          {/* ================= Cards (MAP VERSION) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {products.map((item, index) => (
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

export default Product_part;