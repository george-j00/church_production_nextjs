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

  return (
    <>
      <div className="relative flex flex-col h-screen w-full">
        <div className="absolute z-10">
          <Navbar />
        </div>

        <Carousel className="absolute w-full h-full">
          <CarouselContent>
            {/* Map through images and dynamically change background */}
            {banners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <div className="">
                    <div className="max-w-full">
                      <div
                        className="bg-cover bg-center w-screen h-[100vh] mt-[10px] rounded-lg relative"
                        style={{ backgroundImage: `url(${banner?.imageUrl})` }}
                      >
                        {/* Content inside each carousel item */}
                        <div className="p-6 text-center flex justify-center items-center w-full h-full relative">
                          <h1 className="text-4xl font-extrabold text-white bg-white/10 p-5 md:text-6xl">
                            {banner?.quote}
                            <br />
                            <span className="text-gray-100 text-2xl inline-block">
                              - {banner?.author}
                            </span>
                          </h1>
                          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-center">
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
