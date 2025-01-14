"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Header = () => {
  const carouselImages = [
    {
      imageUrl: "/assets/carousel/4.jpg",
      quote: "With God, all things are possible",
      author: "Matthew 19:26",
    },
    {
      imageUrl: "/assets/carousel/2.jpg",
      quote: "Our faith can move mountains",
      author: "Matthew 17:20",
    },
    {
      imageUrl: "/assets/carousel/3.jpg",
      quote:
        "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      author: "Jeremiah 29:11",
    },
    {
      imageUrl: "/assets/carousel/1.jpg",
      quote: "Give all your worries and cares to God, for he cares about you",
      author: "1 Peter 5:7",
    },
    {
      imageUrl: "/assets/carousel/4.jpg",
      quote: "The Lord is my shepherd, I lack nothing.",
      author: "Psalm 23:1",
    },
  ]

  return (
    <>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {carouselImages?.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[100vh]">
                  <Image
                    src={banner.imageUrl}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover object-[center_5%]"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5 z-10">
                    <div className="max-w-4xl">
                      <h1 className="text-4xl font-extrabold md:text-6xl">
                        <span className="text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-snug">
                          "{banner?.quote}"
                        </span>
                        <div className="mt-6">
                          <span className="text-white/90 text-2xl font-medium italic drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
                            - {banner?.author}
                          </span>
                        </div>
                      </h1>
                    </div>
                    
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-center">
                      <p className="text-white/90 text-xl font-light drop-shadow-md">
                        Swipe down for more details
                      </p>
                      <Image
                        src="/assets/swipe.gif"
                        alt="Move down gif"
                        width={40}
                        height={40}
                        className="opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white border-none shadow-lg backdrop-blur-sm z-20" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white border-none shadow-lg backdrop-blur-sm z-20" />
        </Carousel>
      </div>
    </>
  )
}

export default Header
