"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./common/Container";
import { CarouselSize } from "./CarouselSize";

const Blog = () => {
  return (
    <>
      <section>
        <Container>
          <div className="border-b border-t border-gray-600 py-20">
            <motion.div
              className="text-center mb-12.5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h5
                className="font-dmSans text-[48px] font-semibold leading-16.5 text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Blog
              </motion.h5>

              <motion.p
                className="w-auto text-[16px] lg:text-[18px] font-regular leading-4 lg:leading-6.5 text-white lg:w-235 mx-auto mt-4 lg:mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our blog shares expert insights on quality control, third-party inspections, factory audits, and global supply chain best practices. We publish practical guides, industry updates, and real-world inspection knowledge to help importers, exporters, and manufacturers reduce risk, ensure compliance, and maintain product quality. Whether you’re sourcing globally or managing production locally, our articles are designed to support informed decision-making.
              </motion.p>
            </motion.div>
            <CarouselSize />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
