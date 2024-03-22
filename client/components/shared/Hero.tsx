import React from "react";
import EventCard from "./EventCard";
import { EventTable } from "./EventTable";
import { Separator } from "@radix-ui/react-separator";
import VisionMission from "./VisionMission";
import { TestimonialCarousel } from "./TestimonialsCarousel";

const Hero = () => {
  const cardsData = [
    {
      title: "Card Title 1",
      description: "This is a sample description for the first card.",
      image: "/images/card-image1.jpg", // Replace with your image path
    },
    {
      title: "Card Title 8",
      description: "This is a sample description for the last card.",
      image: "/images/card-image8.jpg", // Replace with your image path
    },
    {
      title: "Card Title 8",
      description: "This is a sample description for the last card.",
      image: "/images/card-image8.jpg", // Replace with your image path
    },
    {
      title: "Card Title 8",
      description: "This is a sample description for the last card.",
      image: "/images/card-image8.jpg", // Replace with your image path
    },
    {
      title: "Card Title 8",
      description: "This is a sample description for the last card.",
      image: "/images/card-image8.jpg", // Replace with your image path
    },
    {
      title: "Card Title 8",
      description: "This is a sample description for the last card.",
      image: "/images/card-image8.jpg", // Replace with your image path
    },
  ];

  return (
    <>
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 flex justify-center">
          Upcoming Events
        </h2>

        {/* Event table section  */}
        <div className="container flex flex-col">
          <p className="mb-5">
            Stay connected and grow in faith! Explore our upcoming events below
          </p>
          <EventTable />
        </div>

        <hr />
        <div className="flex flex-col justify-center items-center mt-12">
          <h2 className="text-3xl font-bold mb-8">Vision and Mission</h2>
          <p className="text-gray-500 mb-5">
            this part shows the vision and mission of the st.auguestigns church
            manglore{" "}
          </p>
        </div>

        {/* vision and mission  */}
        <div className="w-full bg-patternBg flex items-center">
          <VisionMission />
        </div>

        <div className="w-full p-5">
            <TestimonialCarousel />
        </div>
        {/* <h2 className="text-3xl font-bold mb-8 flex justify-center mt-5">
          Vision and Mission{" "}
        </h2> */}

        {/* <div className="flex flex-col  md:flex-row md:gap-10 flex-wrap justify-between ">
          {cardsData.map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Hero;
