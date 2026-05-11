"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const blogs = [
    {
      image: "/blogimage.jpg",
      category: "Quality Control",
      title: "Complete Guide to Pre-Shipment Inspection",
      description:
        "Learn why PSI is essential before export and how it protects your business from costly defects.",
      link: "#",
    },

    {
      image: "/blogimage_v2.jpg",
      category: "Food & Fruits",
      title: "Food Safety Inspection Standards for Export",
      description:
        "Discover the key quality and safety checks required for exporting fresh produce globally.",
      link: "#",
    },

    {
      image: "/blogimagethree.jpg",
      category: "Footwear Inspection",
      title: "Footwear Quality Control Checklist",
      description:
        "Essential inspection points to ensure durability, safety, and compliance in footwear production.",
      link: "#",
    },

    {
      image: "/blogimagefour.jpg",
      category: "Soft Goods/Textile",
      title: "Soft Goods/Textile Checklist",
      description:
        "Essential inspection points to ensure durability, safety, and compliance in footwear production.",
      link: "#",
    },

    {
      image: "/blogimage5.jpg",
      category: "Electronics Products Inspection",
      title: "Electronics Products Checklist",
      description:
        "Essential inspection points to ensure durability, safety, and compliance in footwear production.",
      link: "#",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
      className="container mx-auto"
    >
      <CarouselContent className="flex overflow-visible">
        {blogs.map((blog, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <Card>
              <CardContent>
                <div>
                  {/* Image */}
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    height={226}
                    width={312}
                    className="w-full rounded-tl-xl rounded-tr-xl"
                  />

                  {/* Content */}
                  <div className="p-6 bg-gray-700 rounded-b-xl">
                    <p className="text-sm text-white mb-2">
                      {blog.category}
                    </p>

                    <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                      {blog.title}
                    </h3>

                    <p className="text-white text-sm mb-4">
                      {blog.description}
                    </p>

                    <a
                      href={blog.link}
                      className="text-primary font-medium hover:text-white hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}