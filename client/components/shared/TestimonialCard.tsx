import React from "react";
import { Card } from "../ui/card";
import { UserAvatar } from "./Avatar";

const TestimonialCard = ({ testimonial }: any) => {
  return (
    <>
      <Card className="bg-tiles-pattern  bg-contain  flex flex-col items-center justify-center shadow-lg rounded-lg overflow-hidden p-8 h-full">
        <div className="flex mt-10">
          <UserAvatar />
        </div>
        <div className="text-center mt-4">
          <p className="text-center p-4">{testimonial.description}</p>
          <p className="mb-12 font-bold text-indigo-600">- {testimonial.author}</p>
        </div>
      </Card>
    </>
  );
};

export default TestimonialCard;
