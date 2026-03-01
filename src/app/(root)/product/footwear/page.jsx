"use client";
import React from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";

const Footwear_part = () => {
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
                <button className="relative h-[50px] w-44 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Get a Sample Report</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ================= Content Section ================= */}
      <section className="pt-12 md:pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 mb-16 justify-center items-center">
            <div className="lg:w-4/5">
              <h3 className="text-primary text-3xl md:text-5xl font-medium mb-6">
                Footwear We Inspect we Serve
              </h3>
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
                  <button className="w-48 py-3 rounded-full bg-primary border border-primary text-black font-medium hover:bg-transparent hover:text-primary transition">
                    GET A QUOTE
                  </button>

                  {/* Button 2 */}
                  <button className="w-48 py-3 rounded-full bg-transparent border border-primary text-primary font-medium hover:bg-primary hover:text-white transition">
                    SAMPLE REPORT
                  </button>
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
                  src="/footwearone.jpg"
                  alt="Casual Footwear"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Casual Footwear
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footweartwo.jpg"
                  alt="Formal Footwear"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Formal Footwear
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footwearthree.jpg"
                  alt="Women’s Footwear"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Women’s Footwear
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footwearfour.jpg"
                  alt="Sandals & Slippers"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Sandals & Slippers
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footwearfive.jpg"
                  alt="Boots"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Boots
                  </a>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footwearsix.jpg"
                  alt="Safety Footwear"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Safety Footwear
                  </a>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footwearseven.jpg"
                  alt="Sports Footwear"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Sports Footwear
                  </a>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/footweareight.jpg"
                  alt="Kids & Baby Footwear"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Kids & Baby Footwear
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

export default Footwear_part;
