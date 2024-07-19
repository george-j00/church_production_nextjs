import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

export function TestimonialCarousel() {
  const testimonials = [
    {
      image:'/assets/endorsements/Endorsement1.jpg',
      description:
        "I am extremely happy to know about the launching of a website. We are blessed with a beautiful church and I believe that we all are very proud to be a part of the church where we are gathering for the Holy Mass and other gospel services of our savior JESUS CHRIST. In Today’s world , We have many ways to use the technology to connect between people through the media by launching the website. It will be helpful to our parishioners, the people around the world to know our church history, our spiritual activities & our social services. I take this opportunity to congratulate the Vicar, Secretary, Trustee, Committee members and all others who are working for this endeavor, at the same time I wish the service will be useful to our church and the society. We remember the parish in our humble prayers and wish all success",
      author: "Metropolitan - H.G Yacob Mor Anthonious",
    },
    {
      image:'/assets/endorsements/dummy_avatar.jpg',
      description:
        "Technology develops, the big world has been changed to a small one as the communication through medium strengthened, human relationship irrespective of space and time. By the grace of god Our church also step forward to centre of world of new communication methods through opening a website. I wish the intelligence along with innocent heart may lead our church members to a prosperous blessed future",
      author: "Vicar - Rev. Fr. Eldhose George P",
    },
  ];

  return (
    <Carousel className="mx-auto mt-10 md:p-10">
      <CarouselContent className="w-full h-full ">
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center "
          >
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Optional: Navigation arrows */}
      <CarouselPrevious className="text-gray-500 hover:text-gray-800 absolute left-0 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="text-gray-500 hover:text-gray-800 absolute right-0 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
