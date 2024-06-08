import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutUs = () => {


  // useEffect(() => {
    AOS.init();
  //  }, [])

   
  return (
    <>
      <section
        id="aboutUs"
        className="bg-tiles-pattern bg-primary-50 bg-contain grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-8 mx-auto max-w-screen-xl mt-14 mb-14"
        data-aos="zoom-in"
      >
        <div className="sm:order-2 order-1 flex justify-center items-center" >
          <Image
            className="object-cover rounded-lg shadow-md h-full w-full sm:h-[400px]"
            src="/assets/churchImage.JPG"
            alt="Your GIF description"
            width={1000}
            height={1000}
          />
        </div>
        <div className="sm:order-1 order-2 flex flex-col justify-center px-4 sm:px-8" >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl text-center" >
            About <span className="text-indigo-600">Church</span>
          </h2>
          <p className="text-gray-700 leading-loose text-center">
            St. Antony’s Jacobite Syrian Church in Mangalore, founded in 1937 by
            the Late Very Rev. Cor-episcopa George Pinto, embodies a rich
            history of service and faith. Beginning as a humble initiative to
            serve the poor and needy, the church has grown into a vibrant
            community hub, touching countless lives across Karnataka. Despite
            facing challenges, including legal battles, the church has remained
            resilient under the guidance of dedicated leaders like Rev. Jacob
            Kuriakal and Rev. Thomas Abraham. Over the years, it has hosted
            esteemed religious figures and continued its mission of spiritual
            growth and community engagement. Today, led by Rev. Fr. Eldhose and
            supported by committed members, the church remains committed to its
            founding principles of love, compassion, and service. With a renewed
            focus on outreach and spiritual enrichment, it continues to be a
            source of hope and inspiration for all who seek its shelter. As we
            celebrate its legacy and look to the future, St. Antony’s Jacobite
            Syrian Church stands as a testament to the enduring power of faith
            and unity—a beacon of light in an ever-changing world.
          </p>
         <p className="text-md text-blue-500 text-center mt-1">
          <Link href={"/church-history"}>Read more ...</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
