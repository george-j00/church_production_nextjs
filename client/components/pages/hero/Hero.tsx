'use client'

import React, { useEffect } from "react";
import VisionMission from "../vision-mission/VisionMission";
import AboutUs from "../about/AboutUs";
import { TestimonialCarousel } from "../../shared/testimonials/TestimonialsCarousel";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {

  useEffect(() => {
   AOS.init({duration: 3000});
  }, [])
  
  return (
    <>
      <div className="container mx-auto py-16">
        {/* About us page  */}
        <AboutUs />

        <div className="flex flex-col justify-center items-center mt-12" data-aos="zoom-out">
          <h2 className="text-3xl font-bold mb-8">
            Vision and <span className=" text-indigo-600">Mission</span>
          </h2>
          <p className="text-gray-500 mb-5">
            this part shows the vision and mission of the st.auguestigns church
            manglore{" "}
          </p>
        </div>

        {/* vision and mission  */}
        <div className="w-full bg-image-pattern bg-opacity-10  bg-primary-50 bg-cover  flex items-center mt-10 mb-20" data-aos="zoom-out">
          <VisionMission />
        </div>

        <div className="mt-10" data-aos="zoom-in">
          <h2 className="text-center text-3xl font-bold">
            <span className="text-indigo-600">Endorsements </span> from Our
            Spiritual Leader
          </h2>
          <TestimonialCarousel />
        </div>
      </div>
    </>
  );
};

export default Hero;
