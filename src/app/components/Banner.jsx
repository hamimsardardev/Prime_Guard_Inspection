"use client";
import React from "react";
import Container from "./common/Container";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <section className="bg-[url('/banner.png')] bg-cover bg-center">
        <div className="bg-black/70 flex items-center">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 py-sm-4 py-[80px] md:py-[120px] lg:py-[280px] items-center">
              <div>
                <h1 className="text-primary text-[26px] md:text-[36px] font-bold leading-tight">
                  <span className="block text-primary">
                    <TypeAnimation
                      sequence={[
                        "Prime Guard Inspection International ",
                        2000,
                        "",
                      ]}
                      wrapper="span"
                      speed={50}
                      deletionSpeed={30}
                      style={{ display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </span>
                </h1>

                <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed py-4">
                  As a trusted global quality control and inspection service
                  provider, we offer independent third-party inspection and
                  supplier audit services to ensure product quality, reduce
                  supply chain risk, and meet international standards
                </p>
                <Link href="/contact">
                  <button className="before:ease relative h-12 w-40 overflow-hidden border border-white bg-primary font-semibold text-[18px] leading-6 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-700 hover:shadow-primary hover:before:-translate-x-40 cursor-pointer">
                    <span relative="relative z-10">Contact</span>
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Banner;
