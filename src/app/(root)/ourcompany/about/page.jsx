import Container from "@/app/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <section>
        {/* ================= HERO BANNER ================= */}
        <div className="bg-[url('/aboutbanner.png')] bg-cover bg-center ">
          <div className="bg-black/60 py-[240px]">
            <Container>
              <div className="flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-6">
                  About Our Quality Inspection Services
                </h1>
                <p className="text-white">
                  Delivering trusted inspection, testing, and quality control
                  solutions to global importers and exporters.
                </p>
              </div>
            </Container>
          </div>
        </div>

        {/* ================= COMPANY OVERVIEW ================= */}
        <div className="py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Who We Are
                </h2>
                <p className="text-white mb-4">
                  We are a professional third-party inspection agency providing
                  quality control services across multiple industries including
                  Footwear, Food & Fruits, Craft & Paper Goods, and Consumer
                  Products.
                </p>
                <p className="text-white">
                  Our mission is to protect your brand reputation by ensuring
                  product quality, compliance, and shipment accuracy.
                </p>
              </div>

              <div>
                <Image
                  src="/about-company.jpg"
                  alt="Inspection Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </Container>
        </div>

        {/* ================= MISSION & VISION ================= */}
        <section>
          <Container>
            <div className="py-16 grid md:grid-cols-2 gap-10 text-center border-t-2 border-gray-300">
              <div className="bg-third p-10 rounded-xl shadow">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-white">
                  To deliver reliable, transparent, and professional inspection
                  services that help businesses minimize risk and maximize
                  quality.
                </p>
              </div>

              <div className="bg-third p-10 rounded-xl shadow">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-white">
                  To become a globally recognized inspection partner trusted by
                  manufacturers, suppliers, and importers worldwide.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section>
          <Container>
            <div className="py-16 md:py-8 border-t-2 border-gray-300 ">
              <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-12 ">
                Why Choose Us
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                <div className="p-8 border rounded-xl hover:shadow-lg transition">
                  <h4 className="text-xl text-primary font-semibold mb-3">
                    Experienced Inspectors
                  </h4>
                  <p className="text-white">
                    Skilled professionals with industry expertise and strict QC
                    knowledge.
                  </p>
                </div>

                <div className="p-8 border rounded-xl hover:shadow-lg transition">
                  <h4 className="text-xl text-primary font-semibold mb-3">
                    Fast Reporting
                  </h4>
                  <p className="text-white">
                    Inspection reports delivered within 24 hours with detailed
                    photos.
                  </p>
                </div>

                <div className="p-8 border rounded-xl hover:shadow-lg transition">
                  <h4 className="text-xl text-primary font-semibold mb-3">
                    Global Standards
                  </h4>
                  <p className="text-white">
                    Compliance with international safety and quality
                    regulations.
                  </p>
                </div>
              </div>
              {/* ================= STATS SECTION ================= */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                  <div className="relative">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                      5
                    </h2>
                    <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[35px] bottom-[42px]">
                      {" "}
                      minutes
                    </span>
                    <p className="text-white text-base leading-relaxed">
                      5 minutes instant online order
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                  <div className="relative">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                      $219
                    </h2>
                    <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[40px] bottom-[69px]">
                      {" "}
                      MD
                    </span>
                    <p className="text-white text-base leading-relaxed">
                      $219/MD for Inspection in Bangladesh & South Asia
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                  <div className="relative">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                      24
                    </h2>
                    <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[60px] bottom-[70px]">
                      {" "}
                      hours
                    </span>
                    <p className="text-white text-base leading-relaxed">
                      24 hours to schedule order and get report
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                  <div className="relative">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                      50+
                    </h2>
                    <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[60px] bottom-[95px]">
                      {" "}
                      QC
                    </span>
                    <p className="text-white text-base leading-relaxed">
                      50+ full-time senior inspectors in Bangladesh and
                      Southeast Asian countries, as well as Europe countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ================= CTA ================= */}
        <div className="py-20 text-center">
          <Container>
            <h2 className="text-3xl text-primary  md:text-4xl font-semibold mb-6">
              Ready to Secure Your Product Quality?
            </h2>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-transparent hover:text-primary border border-primary transition cursor-pointer"
            >
              Contact Us Today
            </Link>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default About;
