import React from "react";
import Container from "./common/Container";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const Service = () => {
  const services = [
    {
      image: "/serviceimageone.jpg",
      title: "Product Quality Inspection",
      link: "/service/productinspection",
      items: [
        "Pre-production Inspection",
        "During Production Inspection",
        "Pre-Shipment Inspection",
        "Sample pick inspection",
        "Packaging Inspection",
      ],
    },
    {
      image: "/serviceimagethree.jpg",
      title: "Audit & Survey",
      link: "/service/auditservey",
      items: [
        "Factory Audit",
        "Supplier Audit",
        "Loading Supervision",
        "Survey & Verification",
      ],
    },
    {
      image: "/serviceimagetwo.jpg",
      title: "Supplier Management & Development",
      link: "/service/supliermanagement",
      items: ["Management Consulting"],
    },
  ];

  return (
    <div>
      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="border-t-2 border-gray-300">
            {/* Header */}
            <div className="text-center py-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                <span className="text-primary">OUR SERVICE</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-2xl font-bold text-primary mb-4 cursor-pointer hover:text-white transition-colors">
                      <Link
                        className="hover:underline"
                        href={service.link}
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <ul className="space-y-2 text-primary text-sm md:text-base flex-grow">
                      {service.items.map((item, i) => (
                        <li
                          key={i}
                          className="group flex items-center gap-2 text-primary"
                        >
                          <span className="text-primary text-lg flex items-center">
                            <GoDotFill />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-12 md:mt-16 text-center">
              <button className="relative h-12.5 w-40 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-700 before:duration-500 before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56 cursor-pointer">
                <span className="relative z-10">Show More</span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Service;