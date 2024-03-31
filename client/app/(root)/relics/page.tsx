"use client";

import Image from "next/image";
import React, { useState } from "react";

const Relics = () => {
  // Define the list of relics images
  const relics = [
    "image1.JPG",
    "image2.JPG",
  ];

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);
  // State to store the URL of the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on an image and open the modal
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-500">Relics</h2>
      <p className="text-center  mb-10">In the church, relics are the mortal remains of a saint, or any object that has been in contact with the saint. The term relic comes from the Latin word reliquiae, which means remains.</p>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relics.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              width={500}
              height={1000}
              src={`/assets/relics/${image}`}
              alt={`Church Image ${index + 1}`}
              className="w-full h-auto cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying enlarged image */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 text-2xl cursor-pointer"
              onClick={closeModal}
            >
             close &times;
            </button>
            <Image 
              height={500}
              width={500}
              src={`/assets/relics/${selectedImage}`}
              alt="Enlarged Image"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Relics;
