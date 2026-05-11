"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Container from "./common/Container";
import Image from "next/image";

const Products_part = () => {
  const [activenumber, setActive] = useState(1);

  const products = [
    {
      id: 1,
      Title: "Electronics Products Inspection",
      link: "/product/electronisproduct",
      image: "/electronisbanner.jpg",
      items: [
        "Household Electric & Electronic Products",
        "Lights and Lighting",
        "Components",
        "Computer Device",
        "Power Tools",
        "Electronic Equipment",
      ],
    },
    {
      id: 2,
      Title: "Soft Goods/Textile",
      link: "/product/softgoods",
      image: "/softgoodsbanner.png",
      items: [
        "Garments and Apparel Inspection",
        "Footwear Inspection",
        "Luggage and Bags Inspection",
        "Fashion Accessories Inspection",
        "Home Textile Inspection",
        "Outdoor Textile Inspection",
        "Fabric Inspection",
      ],
    },
    {
      id: 3,
      Title: "Hard Goods",
      link: "/product/hardgoods",
      image: "/hardgoodsbanner.png",
      items: [
        "Fitness Equipment Inspection",
        "Baby Products Inspection",
        "Furniture Inspection",
        "Garden Tools Inspection",
        "Hardware and Building Material Inspection",
        "Home Decoration Products Inspection",
        "Kitchenware and Tableware Inspection",
        "Stationery and Office Supply Inspection",
        "Toys Quality Control Inspection",
      ],
    },
    {
      id: 4,
      Title: "Mechanical Products",
      link: "/product/hardgoods",
      image: "/mechanicalproductbanner.png",
      items: [
        "Electromechanical device",
        "Machine parts",
        "Auto Parts",
        "Pump",
        "Mold",
        "Machining parts",
        "Die casting",
        "Stamping parts",
      ],
    },
    {
      id: 5,
      Title: "Craft & Paper Goods",
      link: "/product/craftpaper",
      image: "/craftpaperbannerimage.png",
      items: [
        "Stationery & Office Paper Inspection",
        "Gift & Packaging Products Inspection",
        "Corrugated & Carton Products Inspection",
        "Printed Materials Inspection",
        "Specialty Paper Products Inspection",
      ],
    },
    {
      id: 6,
      Title: "Footwear",
      link: "/product/footwear",
      image: "/footwearbanner.png",
      items: [
        "Casual Footwear",
        "Formal Footwear",
        "Women’s Footwear",
        "Sandals & Slippers",
        "Boots",
        "Safety Footwear",
        "Sports Footwear",
        "Kids & Baby Footwear",
      ],
    },
    {
      id: 7,
      Title: "Food & Fruits",
      link: "/product/foodfruits",
      image: "/foodfruitsbanner.png",
      items: [
        "Fresh Fruits",
        "Fresh Vegetables",
        "Processed & Packed Food",
        "Dairy & Beverage Products",
        "Grains & Agricultural Products",
      ],
    },
  ];

  const activeProduct = products.find(
    (item) => item.id === activenumber
  );

  return (
    <div>
      <section className="py-16 md:py-24">
        <Container>
          <div>
            {/* Header */}
            <div className="text-center mb-7.5">
              <h1 className="text-[38px] md:text-[24px] font-bold text-primary tracking-tight">
                PRODUCTS
              </h1>

              {/* Buttons */}
              <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg text-primary">
                {products.map((product) => (
                  <li key={product.id}>
                    <button
                      onClick={() => setActive(product.id)}
                      className={`${
                        activenumber === product.id
                          ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1.25 after:left-0 after:bg-white after:w-full after:h-1"
                          : "hover:text-white transition-colors cursor-pointer"
                      }`}
                    >
                      {product.Title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Part */}
            <div
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-2xl backdrop-blur-md shadow-md gap-2 py-8"
            >
              {/* Left */}
              <div className="w-auto lg:w-[30%] space-y-3">
                <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                  {activeProduct?.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <GoDotFill className="text-xl" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-3">
                  <Link
                    href={activeProduct?.link}
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[18px] font-medium text-third shadow-lg hover:bg-secondery hover:text-white transition-all duration-300 hover:shadow-xl active:scale-95"
                  >
                    LEARN MORE

                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="w-full lg:w-[65%] relative h-55 sm:h-75 md:h-100 lg:h-125">
                <Image
                  src={activeProduct?.image}
                  alt={activeProduct?.Title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Products_part;