"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
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

const Header = () => {
  interface IBanner {
    imageUrl: string;
    quote: string;
    author: string;
  }
  const [banners, setAllBanners] = useState<IBanner[]>([]);
  useEffect(() => {
    const fetchBanners = async () => {
      const res = await fetchAllBanners();
      if (res) {
        setAllBanners(res);
      }
    };

    fetchBanners();
  }, []);

  const carouselImages = [
    {
      imageUrl:'/assets/carousel/carousel4.jpg',
      quote:'With God, all things are possible',
      author:'Matthew 19:26'
    },
    {
      imageUrl:'/assets/carousel/carousel1.png',
      quote:'With God, all things are possible',
      author:'Matthew 19:26'
    },
    {
      imageUrl:'/assets/carousel/carousel2.png',
      quote:'With God, all things are possible',
      author:'Matthew 19:26'
    },
    {
      imageUrl:'/assets/carousel/carousel3.png',
      quote:'With God, all things are possible',
      author:'Matthew 19:26'
    }
  ]

  return (
    <>
      <div className="relative">
        <Navbar />
        <Carousel >
          <CarouselContent>
            {/* Map through images and dynamically change background */}
            {carouselImages.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <div
                    className="bg-cover bg-center h-screen relative"
                    style={{ backgroundImage: `url(${banner?.imageUrl})`}}
                  >
                    {/* Content inside each carousel item */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                      <h1 className="text-4xl font-extrabold text-white bg-black bg-opacity-50 p-5 md:text-6xl">
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
