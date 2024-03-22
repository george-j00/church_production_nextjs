import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { UserAvatar } from "./Avatar";

export function TestimonialCarousel() {
  const testimonials = [
    {
      image: "/images/testimonial1.jpg",
      description: "I am extremely happy to know about the launching of a website. We are blessed with a beautiful church and I believe that we all are very proud to be a part of the church where we are gathering for the Holy Mass and other gospel services of our savior JESUS CHRIST. In Today’s world , We have many ways to use the technology to connect between people through the media by launching the website. It will be helpful to our parishioners, the people around the world to know our church history, our spiritual activities & our social services. I take this opportunity to congratulate the Vicar, Secretary, Trustee, Committee members and all others who are working for this endeavor, at the same time I wish the service will be useful to our church and the society. We remember the parish in our humble prayers and wish all success",
      author: "George Jose",
    },
    {
      image: "/images/testimonial2.jpg",
      description: "This is another sample testimonial description.",
      author: "Mary Smith",
    },
  ];

  return (
    <Carousel className="md:w-[950px] w-[350px] h-[450px] flex items-center  mx-auto mt-10 ">
      <CarouselContent className="w-full h-[350px] ">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="h-full flex justify-center items-center  shadow-lg rounded-lg overflow-hidden">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-32 h-32">
                 <UserAvatar />
                </div>
                <p className="text-center">{testimonial.description}</p>
                <p className="mt-2 font-bold">{testimonial.author}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-gray-500 hover:text-gray-800 absolute left-0 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="text-gray-500 hover:text-gray-800 absolute right-0 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
