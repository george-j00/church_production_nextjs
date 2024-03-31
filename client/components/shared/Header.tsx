import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="relative bg-landing-page bg-cover bg-center w-full h-screen">
        <Navbar />
        <div className="container flex justify-center items-center h-screen mt-[-150px]">
          <h1 className="text-5xl font-extrabold text-white">
          &quot;Our faith can move mountains.&quot;<br />{" "}
            <span className="text-gray-100 text-2xl flex justify-end mt-5">
              - Matthew 17:20
            </span>{" "}
          </h1>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"> {/* Adjusted position */}
          <p className="text-white text-1xl">Swipe down for more details </p>
          <Image
            src="/assets/swipe.gif"
            alt="Your GIF description"
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
