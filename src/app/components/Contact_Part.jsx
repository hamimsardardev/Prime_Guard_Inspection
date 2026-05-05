"use client";

import React from "react";
import { MdAddCall, MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import Container from "@/app/components/common/Container";

const Contact_Part = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <div>
      <section>
        <Container>
          <div className="rounded-[15px] pt-[120px]">
            <div className="text-center mx-auto pb-4">
              <motion.h3
                className="font-roboto text-[24px] md:text-[30px] lg:text-[38px] font-normal md:font-semibold lg:font-semibold leading-[28px] md:leading-[36px] text-primary"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let’s discuss your Project
              </motion.h3>
              <motion.p
                className="font-roboto mx-auto text-14px md:text-[16px] lg:text-[18px] font-normal leading-[16px] md:leading-[20px] lg:leading-[24px] text-white mt-4 w-auto lg:w-[481px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gray-800 px-5 rounded-[12px] py-4 md:py-6 lg:py-[30px]">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="py-6 md:py-7 lg:py-[35px] flex flex-col gap-3">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-auto md:w-[300px] lg:w-[390px] border-2 border-primary"
                  >
                    <div className="flex gap-[13px] py-3 md:py-4 lg:py-6  pl-3 md:pl-4 lg:pl-6 items-center hover:shadow-xl/20">
                      <div className="group py-3 md:py-4 lg:py-[20px] px-3 md:px-4 lg:px-[20px] border-2 border-primary inline-block rounded-[6px]">
                        <MdOutlineLocationOn className="h-[32px] w-[32px] text-primary " />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-primary">
                          Address:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] text-white">
                          Dhaka, Bangladesh
                        </h5>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-auto md:w-[300px] lg:w-[390px] border-2 border-primary"
                  >
                    <div className="flex gap-3.5 py-3 md:py-4 lg:py-6  pl-3 md:pl-4 lg:pl-6 items-center hover:shadow-xl/20">
                      <div className="group py-3 md:py-4 lg:py-5 px-3 md:px-4 lg:px-5 border-2 border-primary inline-block rounded-[6px]">
                        <MdOutlineMarkEmailUnread className="h-8 w-8 text-primary" />
                      </div>
                      <div className="">
                        <p className="font-roboto text-[18px] font-normal leading-5 mb-1 text-primary">
                          Email:
                        </p>
                        <h5 className="break-all sm:break-normal font-roboto text-[16px] font-medium leading-6 text-white">
                          hossain@pgi-intl.com | service@pgi-intl.com
                        </h5>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-auto md:w-[300px] lg:w-[390px] border-2 border-primary"
                  >
                    <div className="flex gap-3.5 py-3 md:py-4 lg:py-6  pl-3 md:pl-4 lg:pl-6 items-center hover:shadow-xl/20">
                      <div className="group py-3 md:py-4 lg:py-5 px-3 md:px-4 lg:px-5 border-2 border-primary inline-block rounded-[6px]">
                        <MdAddCall className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-5 mb-1 text-primary">
                          Contact:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-6 text-white">
                          +8801642-401262
                        </h5>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="inline-block rounded-[8px]">
                  <ul className="flex gap-2 mb-4">
                    <motion.li
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full"
                    >
                      <a href="">
                        <FaFacebookF className="h-[20px] w-[20px]" />
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#007B3D] hover:text-primary hover:rounded-full"
                    >
                      <a href="">
                        <FaDribbble className="h-[20px] w-[20px]" />
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#F70164] hover:text-primary hover:rounded-full"
                    >
                      <a href="">
                        <IoLogoInstagram className="h-[20px] w-[20px]" />
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#0A66C2] hover:text-primary hover:rounded-full"
                    >
                      <a href="">
                        <FaLinkedin className="h-[20px] w-[20px]" />
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#2453FE] hover:text-primary hover:rounded-full"
                    >
                      <a href="">
                        <FaBehance className="h-[20px] w-[20px]" />
                      </a>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="bg-transparent border-1 border-gray-300 px-6 py-6 rounded-[8px]"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="mt-[36px] md:mt-[40px] lg:mt-[50px]">
                  <motion.form
                    variants={staggerContainer}
                    className="rounded-2xl"
                  >
                    {/* Name */}
                    <motion.div variants={fadeInUp} className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Name*
                      </label>
                      <div className="group rounded-[8px] bg-gray-900 hover:bg-gray-900/50 transition duration-300">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 border text-white border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                    </motion.div>

                    {/* Gmail */}
                    <motion.div variants={fadeInUp} className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Gmail*
                      </label>
                      <div className="group rounded-xl bg-gray-900 hover:bg-gray-900/50 transition duration-300">
                        <input
                          type="email"
                          placeholder="Enter your gmail"
                          className="w-full font-roboto text-[16px] text-regular px-4 py-2 border text-white border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mb-6">
                      <label className="lg:block text-primary font-medium mb-1">
                        Location*
                      </label>
                      <div className="group rounded-xl bg-gray-900 hover:bg-gray-900/50 transition duration-300">
                        <select
                          required
                          className="w-full font-roboto text-[16px] text-regular px-4 py-2 border  bg-gray-900 text-white border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        >
                          <option value="SS">Select Location</option>
                          <option value="BD">Bangladesh</option>
                          <option value="CN">China</option>
                          <option value="IN">India</option>
                          <option value="PK">Pakistan</option>
                          <option value="VN">Vietnam</option>
                        </select>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className=" mb-6">
                      <div className="w-full">
                        <label className="block text-primary font-medium mb-1">
                          Service*
                        </label>
                        <div className="group rounded-lg bg-gray-900 hover:bg-gray-900/50 transition duration-300">
                          <select
                            required
                            className="w-full font-roboto text-[16px] text-regular px-4 py-2 border  bg-gray-900 text-white border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                          >
                            <option value="SS">Select Service</option>
                            <option value="PQI">
                              Product Quality Inspection
                            </option>
                            <option value="AS">Audit & Survey</option>
                            <option value="SMD">
                              Supplier Management & Development
                            </option>
                          </select>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Message*
                      </label>
                      <div className="group rounded-xl bg-gray-900 hover:bg-gray-900/50 transition duration-300">
                        <textarea
                          placeholder="Write your message..."
                          className="w-full font-roboto text-[16px] text-regular px-4 py-2 border text-white border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        ></textarea>
                      </div>
                    </motion.div>

                    <div>
                      <div className="p-[2px] rounded-[8px] inline-block">
                        <div className="group rounded-[8px] bg-primary border border-transparent hover:bg-transparent hover:border hover:border-primary  transition duration-300">
                          <button className="px-6 py-2 text-white hover:text-primary cursor-pointer font-semibold tracking-wide transition-all duration-300">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact_Part;
