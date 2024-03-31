"use client";

import { fetchAllImages } from "@/lib/actions/user.actions";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ChurchGallery =  () => {
  // Define the list of church images
//   const churchImages = [
//     "image1.jpg",
//     "image2.jpg",
//     "image3.jpg",
//     "image4.jpg",
//     "image5.jpg", // Add more image URLs as needed
//   ];
const [images, setImages] = useState<any[]>([]);

useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetchAllImages();
        setImages(response); // Assuming response is an array of image objects
        console.log('responsee gallery imageeesss',response);
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []); 
    
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
      <h2 className="text-3xl font-bold text-center mb-6">Church Gallery</h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images?.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              width={1000}
              height={1000}
              src={image?.imageUrl}
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
            <img
              src={`/assets/${selectedImage}`}
              alt={`Enlarged Image`}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
    
export default ChurchGallery;
