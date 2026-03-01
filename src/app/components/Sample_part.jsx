import React from "react";
import Container from "./common/Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Sample_part = () => {
  return (
    <div>
      <section
        className="
        relative bg-[url('/Samplepartimage.png')] bg-cover bg-center bg-fixed
        before:absolute before:inset-0 before:bg-black/80 before:z-0
      "
      >
        <Container>
          <div className="relative z-10 py-16 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/Samplepartimage2.png"
                    alt="Factory audit inspection - 360 degree panoramic view"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right - Text + Button */}
              <div className="order-1 lg:order-2 text-third space-y-4 md:space-y-3">
                <h2 className="text-[24px] md:text-[30px] lg:text-[38px] text-primary font-semibold tracking-tight">
                  Sample Report
                </h2>

                <p className="w-auto lg:w-[560px] text-[14px] lg:text-[18px] font-medium text-white md:text-[16px] leading-[24px] ">
                  A detailed report with inspection results and photographs helps to assess goods quality and safety when performing an inspection. Review a PGI sample report related to your product of interest.
                </p>

                <div>
                  <Link
                    href="/resourses/samplereport"
                    type="button"
                    className="relative h-[50px] w-50 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-600 before:duration-500 before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56 cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Sample report
                      <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-[1.8]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Sample_part;
