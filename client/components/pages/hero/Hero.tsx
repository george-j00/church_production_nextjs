
import VisionMission from "../vision-mission/VisionMission";
import AboutUs from "../about/AboutUs";
import { TestimonialCarousel } from "../../shared/testimonials/TestimonialsCarousel";

const Hero = () => {

  return (
    <>
      <div className="container mx-auto py-16">
        {/* About us page  */}
        <AboutUs />

        <div>
          <div className="flex flex-col justify-center items-center mt-12">
            <h2 className="text-3xl font-bold mb-8">
              Vision and <span className=" text-indigo-600">Mission</span>
            </h2>
            <p className="text-gray-500 mb-5">
              this part shows the vision and mission of the St.Anthony&apos;s
              church manglore{" "}
            </p>
          </div>

          {/* vision and mission  */}
          <div className="w-full bg-image-pattern bg-opacity-10  bg-primary-50 bg-cover  flex items-center mt-10 mb-20">
            <VisionMission />
          </div>
        </div>

        <div className="mt-10">
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
