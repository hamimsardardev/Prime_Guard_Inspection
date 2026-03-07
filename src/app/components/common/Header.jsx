"use client";

import React, { useState } from "react";
import Container from "./Container";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbarshow, setNavbarShow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  function handleshownavbar() {
    setNavbarShow(!navbarshow);
  }
  function handleservicesOpen() {
    setServicesOpen(!servicesOpen);
  }
  function handleProductOpen() {
    setProductsOpen(!productsOpen);
  }
  function handleResourcesOpen() {
    setResourcesOpen(!resourcesOpen);
  }
  function handleAboutOpen() {
    setAboutOpen(!aboutOpen);
  }
  return (
    <>
      <header className="fixed w-full z-[9999]">
        <motion.nav
          className="absolute w-full"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Container>
            <div className="relative flex items-center justify-between px-2 backdrop-blur-md shadow-md rounded-xl">
              <div>
                <Link href="/">
                  <Image src="/logo.jpg" alt="logo" width={150} height={100} />
                </Link>
              </div>
              <div className="lg:hidden text-white text-2xl">
                {navbarshow ? (
                  <FaXmark onClick={handleshownavbar} />
                ) : (
                  <FaBars onClick={handleshownavbar} />
                )}
              </div>
              <ul className="hidden lg:flex items-center gap-8 font-semibold text-primary tracking-wide">
                <li className="group flex items-center  gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  <Link href="/">HOME</Link>
                </li>
                <li className="relative group py-4 flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  <Link href="/service">
                    SERVICES{" "}
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>
                  <div
                    className="absolute left-0 mt-2 hidden text-primary min-w-[420px] rounded-md bg-gray-800 shadow-lg group-hover:block 
                  top-[45px]"
                  >
                    <ul className="flex flex-col py-2 gap-2">
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/service/productinspection"
                        >
                          Product Quality Inspection
                        </Link>
                      </li>
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/service/auditservey"
                        >
                          Audit & Survey
                        </Link>
                      </li>
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/service/supliermanagement"
                        >
                          Supplier Management & Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="relative group py-4 flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  <Link href="/product">
                    PRODUCTS
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>
                  <div className="absolute left-0 mt-2 hidden text-primary min-w-[350px] rounded-md bg-gray-800 shadow-lg group-hover:block top-[45px]">
                    <ul className="flex flex-col py-2 gap-2">
                      <li className="px-4 hover:text-white">
                        <a
                          className="hover:underline"
                          href="/product/electronisproduct"
                        >
                          Electronics Products Inspection
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a
                          className="hover:underline"
                          href="/product/softgoods"
                        >
                          Soft Goods/Textile
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a
                          className="hover:underline"
                          href="/product/hardgoods"
                        >
                          Hard Goods
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a
                          className="hover:underline"
                          href="/product/mechanicalproduct"
                        >
                          Mechanical Products
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a
                          className="hover:underline"
                          href="/product/craftpaper"
                        >
                          Craft & Paper Goods
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="/product/footwear">
                          Footwear
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a
                          className="hover:underline"
                          href="/product/foodfruits"
                        >
                          Food & Fruits
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="relative group py-4 flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  <Link href="/resourses">
                    RESOURCES{" "}
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>
                  <div className="absolute left-0 mt-2 hidden text-primary min-w-[220px] rounded-md bg-gray-800 shadow-lg group-hover:block top-[45px]">
                    <ul className="flex flex-col py-2 gap-2">
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/resourses/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/resourses/samplereport"
                        >
                          Sample Feports
                        </Link>
                      </li>
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/resourses/factoryaudit"
                        >
                          Factory Audit
                        </Link>
                      </li>
                      <li className="px-4 hover:text-white">
                        <Link
                          className="hover:underline"
                          href="/resourses/faqs"
                        >
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="relative group py-4 flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  <a>
                    OUR COMPANY
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </a>
                  <div className="absolute left-0 mt-2 hidden text-primary min-w-[320px] rounded-md bg-gray-800 shadow-lg group-hover:block top-[45px]">
                    <ul className="flex flex-col py-2 gap-2">
                      <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="/ourcompany/about">
                          About Us
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="/ourcompany/ourteam">
                          Our Team
                        </a>
                      </li>
                      {/* <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="#">
                          Inspection System
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="#">
                          Career
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="#">
                          Customer Feedback
                        </a>
                      </li>
                      <li className="px-4 hover:text-white">
                        <a className="hover:underline" href="#">
                          Team Building
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </li>

                <li className="cursor-pointer py-4 hover:text-white transition-colors duration-300">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>

              {/* RIGHT SIDE */}
              <div className="hidden lg:flex items-center gap-6">
                <FiSearch
                  size={22}
                  className="cursor-pointer text-primary hover:text-white transition"
                />

                <div className="flex items-center text-primary gap-1 cursor-pointer hover:text-white transition">
                  English <FiChevronDown size={16} />
                </div>
                <Link
                  href="/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:before:bg-primary rounded-full relative h-[40px] w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-primary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10">LOG IN</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center hover:before:bg-primary rounded-full relative h-[40px] w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-primary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 "> SIGN UP</span>
                </Link>
              </div>
              {/* mobile view */}
              {navbarshow && (
                <div className=" absolute top-[35px] right-0 w-full lg:hidden mt-4 flex flex-col items-center gap-2 bg-gray-800 rounded-xl p-4">
                  <ul className="lg:flex items-center gap-8 font-semibold text-primary tracking-wide">
                    <li className="group flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                      <Link href="/">HOME</Link>
                    </li>
                    <li
                      className="relative group flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300"
                      onClick={handleservicesOpen}
                    >
                      <Link href="/service">
                        SERVICES{" "}
                        <FiChevronDown
                          size={20}
                          className={`inline transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </Link>
                      <div
                        className={`${servicesOpen ? "block" : "hidden"} absolute  z-20 top-[20px] left-[-85px] min-w-[300px] rounded-md bg-gray-700 shadow-lg`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 transition">
                            <Link
                              className="hover:underline"
                              href="/service/productinspection"
                            >
                              Product Quality Inspection
                            </Link>
                          </li>
                          <li className="px-4 transition">
                            <Link
                              className="block hover:underline hover:text-white"
                              href="/service/auditservey"
                            >
                              Audit & Survey
                            </Link>
                          </li>
                          <li className="px-4 transition ">
                            <Link
                              className="block hover:underline hover:text-white"
                              href="/service/supliermanagement"
                            >
                              Supplier Management & Development
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li
                      className="relative group flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300"
                      onClick={handleProductOpen}
                    >
                      <Link href="/product">
                        PRODUCTS{" "}
                        <FiChevronDown
                          size={20}
                          className={`inline transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                        />
                      </Link>

                      <div
                        className={`${productsOpen ? "block" : "hidden"} absolute  z-20 top-[20px] left-[-85px] min-w-[300px] rounded-md bg-gray-700 shadow-lg`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/electronisproduct"
                            >
                              Electronics Products Inspection
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/softgoods"
                            >
                              Soft Goods/Textile
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/hardgoods"
                            >
                              Hard Goods
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/mechanicalproduct"
                            >
                              Mechanical Products
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/craftpaper"
                            >
                              Craft & Paper Goods
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/footwear"
                            >
                              Footwear
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/product/foodfruits"
                            >
                              Food & Fruits
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li
                      className="relative group flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300"
                      onClick={handleResourcesOpen}
                    >
                      <span>
                        RESOURCES{" "}
                        <FiChevronDown
                          size={20}
                          className={`inline transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                      <div
                        className={`${resourcesOpen ? "block" : "hidden"} absolute  z-20 top-[20px] left-[-85px] min-w-[300px] rounded-md bg-gray-700 shadow-lg`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/resourses/blog"
                            >
                              Blog
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/resourses/samplereport"
                            >
                              Sample Feports
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/resourses/factoryaudit"
                            >
                              Factory Audit
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link
                              className="hover:underline"
                              href="/resourses/faqs"
                            >
                              FAQs
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li
                      className="relative group flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300"
                      onClick={handleAboutOpen}
                    >
                      <a>
                        OUR COMPANY
                        <FiChevronDown
                          size={20}
                          className={`inline transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                        />
                      </a>
                      <div
                        className={`${aboutOpen ? "block" : "hidden"} absolute  z-20 top-[20px] left-[-85px] min-w-[300px] rounded-md bg-gray-700 shadow-lg`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <a className="hover:underline" href="/ourcompany/about">
                              About Us
                            </a>
                          </li>
                          <li className="px-4 hover:text-white">
                            <a className="hover:underline" href="/ourcompany/ourteam">
                              Our Team
                            </a>
                          </li>
                          {/* <li className="px-4 hover:text-white">
                            <a className="hover:underline" href="#">
                              Inspection System
                            </a>
                          </li>
                          <li className="px-4 hover:text-white">
                            <a className="hover:underline" href="#">
                              Career
                            </a>
                          </li>
                          <li className="px-4 hover:text-white">
                            <a className="hover:underline" href="#">
                              Customer Feedback
                            </a>
                          </li>
                          <li className="px-4 hover:text-white">
                            <a className="hover:underline" href="#">
                              Team Building
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </li>

                    <li className="cursor-pointer hover:text-primarytwo transition-colors duration-300">
                      <Link href="/contact">CONTACT</Link>
                    </li>
                  </ul>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center text-primary gap-1 cursor-pointer hover:text-white transition">
                      English <FiChevronDown size={16} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className=" hover:before:bg-primary rounded-full relative h-[40px] w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full">
                        <span className="relative z-10 "> LOG IN</span>
                      </button>
                      <button className=" hover:before:bg-primary rounded-full relative h-[40px] w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full">
                        <span className="relative z-10 "> SIGN UP</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </motion.nav>
      </header>
    </>
  );
};

export default Header;
