import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
   <>
 <section id='aboutUs' className="bg-tiles-pattern bg-primary-50 bg-contain grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-8 mx-auto max-w-screen-xl mt-14 mb-14">
        <div className="sm:order-2 order-1 flex justify-center items-center">
            <Image
            className="object-cover rounded-lg shadow-md h-full w-full sm:h-[400px]"
            src="/assets/image7.jpg"
            alt="Your GIF description"
            width={40}
            height={40}
          />
        </div>
        <div className="sm:order-1 order-2 flex flex-col justify-center px-4 sm:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl text-center">
            About <span className="text-indigo-600">Church</span>
          </h2>
          <p className="text-gray-700 leading-loose text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, commodi
            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
            voluptatum.
          </p>
        </div>
      </section>
   </>
  )
}

export default AboutUs