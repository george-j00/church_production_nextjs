import React from "react";
import { Card } from "../../ui/card";
import { UserAvatar } from "../avatar/Avatar";

const TestimonialCard = ({ testimonial }: any) => {
  return (
    <>  
      <Card className="bg-dotted-pattern bg-cover bg-primary-50  flex flex-col items-center justify-center shadow-lg rounded-lg overflow-hidden p-8 h-full">
        <div className="flex mt-10">
          <UserAvatar avatar={testimonial.image}/>
        </div>
        <div className="text-center mt-4">
          <p className="text-justify mb-5">{testimonial.description}</p>
          <p className="mb-12 font-bold text-indigo-600">- {testimonial.author}</p>
        </div>
      </Card>
    </>
  );
};

export default TestimonialCard;
