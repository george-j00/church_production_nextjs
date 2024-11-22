"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchAllBanners } from "@/lib/actions/user.actions";
import Navbar from "../../shared/navbar/Navbar";

const Header = () => {
  const carouselImages = [
    {
      imageUrl: "/assets/carousel/carousel5.jpg",
      quote: "With God, all things are possible",
      author: "Matthew 19:26",
    },
    {
      imageUrl: "/assets/carousel/carousel2.JPG",
      quote: "Our faith can move mountains",
      author: "Matthew 17:20",
    },
    {
      imageUrl: "/assets/carousel/carousel1.jpg",
      quote: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      author: "Jeremiah 29:11",
    },
    {
      imageUrl: "/assets/carousel/carousel3.jpg",
      quote: "Give all your worries and cares to God, for he cares about you"    ,                          
      author: "1 Peter 5:7",
    },
    {
      imageUrl: "/assets/carousel/carousel5.jpg",
      quote: "The Lord is my shepherd, I lack nothing.",
      author: "Psalm 23:1",
    },
  ];

  return (
    <>
      <div className="relative">
       
        <Carousel>
          <CarouselContent>
            {/* Map through images and dynamically change background */}
            {carouselImages?.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <div
                    className="bg-cover bg-center h-[100vh] relative"
                    style={{
                      backgroundImage: `url(${banner?.imageUrl})`,
                      backgroundPositionY: "5%", // Move the image down by 5%
                      transform: "translateY(-5%)", // Move the image down by 5%
                    }}
                  >
                    {/* Content inside each carousel item */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-5">
                      <h1 className="text-4xl font-extrabold text-white md:text-6xl">
                        {banner?.quote}
                        <br />
                        <span className="text-gray-100 text-2xl inline-block">
                          - {banner?.author}
                        </span>
                      </h1>
                      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-center">
                        <p className="text-white text-1xl">
                          Swipe down for more details
                        </p>
                        <Image
                          src="/assets/swipe.gif"
                          alt="Move down gif"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black z-20" />
          <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black z-20" />
        </Carousel>
      </div>
    </>
  );
};

export default Header;
