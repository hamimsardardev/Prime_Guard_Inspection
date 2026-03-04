"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import Link from "next/link";
import Qutation_form from "@/app/components/Qutation_form";

const Foodfruits_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }
  return (
    <div>
      {/* ================= Banner Section ================= */}
      <section className="bg-[url('/foodfruitsbanner.png')] bg-cover bg-center">
        <div className="bg-gray-900/80">
          <Container>
            <div className="space-y-4 py-32 md:py-56">
              <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight ">
                Food & Fruits We Inspect
              </h2>
              <p className="w-auto md:w-[420px] lg:w-[560px] text-[16px] md:text-[16px] lg:text-[18px] text-white font-normal leading-tight">
                We provide comprehensive inspection services for fresh produce
                and food products to ensure quality, safety, hygiene, and
                compliance with international import standards.
              </p>

              <div>
                <Link
                  href="/resourses/samplereport"
                  className="relative h-[50px] w-56 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-58 hover:before:w-58"
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
                Food & Fruits we Serve
              </h3>

              <p className="text-white text-base leading-relaxed max-w-[820px]">
                We provide specialized inspection services for fresh produce and
                food products to ensure quality, safety, and compliance with
                international standards. From fruits and vegetables to processed
                food items, we verify freshness, grading, packaging, labeling,
                and storage conditions to protect your brand and customer trust.
              </p>
            </div>
            <div className="lg:w-1/5">
              <div className="flex justify-center items-center">
                <div className="text-center space-y-6">
                  {/* Title */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-1.5 h-5 bg-primary"></span>
                    <h2 className="text-xl font-semibold tracking-wide text-primary">
                      CONTACT US
                    </h2>
                  </div>

                  {/* Button 1 */}
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

          {/* ================= Cards ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {/* Card 1 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/foodfruitsone.jpg"
                  alt="Fresh Fruits"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Fresh Fruits
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/foodfruitstwo.jpg"
                  alt="Fresh Vegetables"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Fresh Vegetables
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/foodfruitsthree.jpg"
                  alt="Processed & Packed Food"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Processed & Packed Food
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/foodfruitsfour.jpg"
                  alt="Dairy & Beverage Products"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Dairy & Beverage Products
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/foodfruitsfive.jpg"
                  alt="Grains & Agricultural Products"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Grains & Agricultural Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Sample_part />
      </section>
    </div>
  );
};

export default Foodfruits_part;
