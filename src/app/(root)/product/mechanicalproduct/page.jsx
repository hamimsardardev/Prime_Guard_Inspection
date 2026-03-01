"use client";
import React from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";

const Mechanical_part = () => {
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
                mechanical products with a variety of goods like
                electromechanical device, machine parts, auto parts, pump, and
                die casting to support your regulatory compliance in different
                consumer markets.
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
                  src="/mechanicalimageone.jpg"
                  alt="Electromechanical device"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a
                    className="hover:text-white hover:underline"
                    href="/product/electronisproduct"
                  >
                    Electromechanical device
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimagetwo.jpg"
                  alt="Machine parts"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Machine parts
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimagethree.jpg"
                  alt="Auto parts"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Auto parts
                  </a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimagefour.jpg"
                  alt="Pump"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Pump
                  </a>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimagefive.jpg"
                  alt="Mold"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Mold
                  </a>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimagesix.jpg"
                  alt="Machining parts"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Machining parts
                  </a>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimageseven.jpg"
                  alt="Die casting"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Die casting
                  </a>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/mechanicalimageeight.jpg"
                  alt="Stamping parts"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Stamping parts
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

export default Mechanical_part;
