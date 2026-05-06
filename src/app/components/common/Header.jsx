"use client";

import React, { useState } from "react";
import Container from "./Container";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

  const pathname = usePathname();

  useEffect(() => {
    setNavbarShow(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
    setAboutOpen(false);
  }, [pathname]);
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
                  <Image
                    src="/headerlogo.jpg"
                    alt="logo"
                    width={150}
                    height={100}
                  />
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
                <li
                  className={
                    pathname === "/" ? "group list text-white" : "list"
                  }
                >
                  <Link href="/">HOME</Link>
                </li>
                <li
                  className={`relative group ${
                    pathname.startsWith("/ourcompany") ? "text-white" : "list"
                  }`}
                >
                  <Link href="#">
                    OUR COMPANY
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>

                  {/* Wrapper to prevent hover gap */}
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
                    <div className="min-w-[320px] rounded-md bg-gray-800 shadow-lg text-primary">
                      <ul className="flex flex-col py-2 gap-2">
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/ourcompany/about"
                            className="hover:underline"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/ourcompany/ourteam"
                            className="hover:underline"
                          >
                            Our Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className={`relative group ${
                    pathname.startsWith("/service") ? "text-white" : "list"
                  }`}
                >
                  <Link href="/service">
                    SERVICES
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>

                  {/* wrapper for smooth hover */}
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
                    <div className="min-w-87.5 rounded-md bg-gray-800 shadow-lg text-primary">
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
                  </div>
                </li>

                <li
                  className={`relative group ${
                    pathname.startsWith("/product") ? "text-white" : "list"
                  }`}
                >
                  <Link href="/product">
                    PRODUCTS
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>

                  {/* wrapper for smooth hover */}
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
                    <div className="min-w-87.5 rounded-md bg-gray-800 shadow-lg text-primary">
                      <ul className="flex flex-col py-2 gap-2">
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/electronisproduct"
                            className="hover:underline"
                          >
                            Electronics Products Inspection
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/softgoods"
                            className="hover:underline"
                          >
                            Soft Goods/Textile
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/hardgoods"
                            className="hover:underline"
                          >
                            Hard Goods
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/mechanicalproduct"
                            className="hover:underline"
                          >
                            Mechanical Products
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/craftpaper"
                            className="hover:underline"
                          >
                            Craft & Paper Goods
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/footwear"
                            className="hover:underline"
                          >
                            Footwear
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/product/foodfruits"
                            className="hover:underline"
                          >
                            Food & Fruits
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li
                  className={`relative group ${
                    pathname.startsWith("/resourses") ? "text-white" : "list"
                  }`}
                >
                  <Link href="/resourses">
                    RESOURCES
                    <FiChevronDown
                      size={20}
                      className="inline transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>

                  {/* smooth dropdown wrapper */}
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
                    <div className="min-w-55 rounded-md bg-gray-800 shadow-lg text-primary">
                      <ul className="flex flex-col py-2 gap-2">
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/resourses/blog"
                            className="hover:underline"
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/resourses/samplereport"
                            className="hover:underline"
                          >
                            Sample Reports
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/resourses/factoryaudit"
                            className="hover:underline"
                          >
                            Factory Audit
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/resourses/faqs"
                            className="hover:underline"
                          >
                            FAQs
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/terms-Condition"
                            className="hover:underline"
                          >
                            Terms and Conditions
                          </Link>
                        </li>
                        <li className="px-4 hover:text-white">
                          <Link
                            href="/privacy-policy"
                            className="hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li
                  className={`list ${
                    pathname.startsWith("/contact") ? "text-white" : ""
                  }`}
                >
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>

              {/* RIGHT SIDE */}
              <div className="hidden lg:flex items-center gap-6">
                <div className="flex items-center text-primary gap-1 cursor-pointer hover:text-white transition">
                  English <FiChevronDown size={16} />
                </div>
                <Link
                  href="/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:before:bg-primary rounded-full relative h-10 w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-primary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10">LOG IN</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center hover:before:bg-primary rounded-full relative h-10 w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-primary shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 "> SIGN UP</span>
                </Link>
              </div>
              {/* mobile view */}
              {navbarshow && (
                <div className="absolute top-8.75 right-0 w-full lg:hidden mt-4 flex flex-col items-center gap-2 bg-gray-800 rounded-xl p-4">
                  <ul className="w-full flex flex-col gap-3 font-semibold text-primary tracking-wide">
                    {/* HOME */}
                    <li className="w-full text-center">
                      <Link
                        href="/"
                        className="block hover:text-white transition"
                      >
                        HOME
                      </Link>
                    </li>

                    {/* OUR COMPANY */}
                    <li className="w-full">
                      <div
                        onClick={handleAboutOpen}
                        className="flex items-center justify-between cursor-pointer hover:text-white transition"
                      >
                        <span>OUR COMPANY</span>
                        <FiChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          aboutOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } w-full mt-2 bg-gray-700 rounded-lg border border-gray-600`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <Link href="/ourcompany/about">About Us</Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/ourcompany/ourteam">Our Team</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* SERVICES */}
                    <li className="w-full">
                      <div
                        onClick={handleservicesOpen}
                        className="flex items-center justify-between cursor-pointer hover:text-white transition"
                      >
                        <span>SERVICES</span>
                        <FiChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          servicesOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } w-full mt-2 bg-gray-700 rounded-lg border border-gray-600`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <Link href="/service/productinspection">
                              Product Quality Inspection
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/service/auditservey">
                              Audit & Survey
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/service/supliermanagement">
                              Supplier Management & Development
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* PRODUCTS */}
                    <li className="w-full">
                      <div
                        onClick={handleProductOpen}
                        className="flex items-center justify-between cursor-pointer hover:text-white transition"
                      >
                        <span>PRODUCTS</span>
                        <FiChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          productsOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } w-full mt-2 bg-gray-700 rounded-lg border border-gray-600`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <Link href="/product/electronisproduct">
                              Electronics Products Inspection
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/product/softgoods">
                              Soft Goods/Textile
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/product/hardgoods">Hard Goods</Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/product/mechanicalproduct">
                              Mechanical Products
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/product/craftpaper">
                              Craft & Paper Goods
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/product/footwear">Footwear</Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/product/foodfruits">
                              Food & Fruits
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* RESOURCES */}
                    <li className="w-full">
                      <div
                        onClick={handleResourcesOpen}
                        className="flex items-center justify-between cursor-pointer hover:text-white transition"
                      >
                        <span>RESOURCES</span>
                        <FiChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            resourcesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          resourcesOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } w-full mt-2 bg-gray-700 rounded-lg border border-gray-600`}
                      >
                        <ul className="flex flex-col py-2 gap-2">
                          <li className="px-4 hover:text-white">
                            <Link href="/resourses/blog">Blog</Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/resourses/samplereport">
                              Sample Reports
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/resourses/factoryaudit">
                              Factory Audit
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/resourses/faqs">FAQs</Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/terms-Condition">
                              Terms and Conditions
                            </Link>
                          </li>
                          <li className="px-4 hover:text-white">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* CONTACT */}
                    <li className="w-full text-center">
                      <Link
                        href="/contact"
                        className="hover:text-white transition"
                      >
                        CONTACT
                      </Link>
                    </li>
                  </ul>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col items-center gap-3 mt-3 w-full">
                    <div className="flex items-center text-primary gap-1 cursor-pointer hover:text-white transition">
                      English <FiChevronDown size={16} />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <button className="w-full h-[40px] rounded-full border-2 border-white bg-gray-900 text-white hover:bg-primary transition">
                        LOG IN
                      </button>
                      <button className="w-full h-[40px] rounded-full border-2 border-white bg-gray-900 text-white hover:bg-primary transition">
                        SIGN UP
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
