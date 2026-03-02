"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import BookNow_form from "@/app/components/BookNow_form";

const Productinspection_part = () => {
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
      <section className="bg-[url('/productinspectionbanner.png')] bg-cover bg-center">
        <Container>
          <div className="py-32 md:py-56 space-y-4">
            <h2 className="text-[24px] md:text-[30px] md:text-[36px] text-primary font-semibold leading-[36px]">
              Product Quality Control Inspection
            </h2>
            <p className="text-white text-[18px] leading-relaxed max-w-[720px]">
              A Product Quality Control Inspection is the assessment for production capability and
              performance of a factory against proven quality principles. Every
              production site needs reliable manufacturing and quality control
              systems to ensure customers are satisfied with their products. As
              such, the key criteria assessed are policies, procedures and
              records that would indicate the factory’s ability to deliver
              consistent quality management over time, rather than at one given
              time or only for certain products.
            </p>
            <div>
              <button 
              onClick={handleQutationOpen}
              className="relative h-[50px] w-44 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 cursor-pointer">
                <span className="relative z-10">Book Now</span>
              </button>
                <BookNow_form
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
                Product Quality Control Inspection
              </h3>

              <p className="text-white text-base leading-relaxed max-w-[720px]">
                PGI conducts comprehensive product inspection, industrial
                product inspection, full inspection and loading supervision. PGI
                product quality inspection services ensure product quality
                throughout your entire consumer goods and industrial products
                supply chain with our unrivaled experience in managing all types
                of inspection program. Independent inspections of your products,
                at various stages of the product’s life cycle, will ensure that
                the quality of your mass production will match that of samples
                tested and will help you to identify critical defects before
                products hit the market.
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
                  src="/preproductionInspection.png"
                  alt="Product Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Pre-production Inspection
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/preproductionimage.png"
                  alt="Product Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    During Production Inspection
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/preshipmentimage.png"
                  alt="Industrial Product Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Pre-Shipment Inspection
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Full Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Sample pick inspection
                  </a>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Full Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Packaging Inspection
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

export default Productinspection_part;
