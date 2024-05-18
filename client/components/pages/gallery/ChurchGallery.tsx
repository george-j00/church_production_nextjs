"use client";

import { fetchAllImages } from "@/lib/actions/user.actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ChurchGallery = () => {

  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetchAllImages();
        setImages(response); // Assuming response is an array of image objects
        if (response) {
          setLoading(false);
        }
        console.log("responsee gallery imageeesss", response);
      } catch (error) {
        console.error("Error fetching images:", error);
      }finally{
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);
  // State to store the URL of the selected image
  const [selectedImage, setSelectedImage] = useState({
    imageTitle: "",
    imageUrl: "",
  });

  // Function to handle click on an image and open the modal
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage({
      imageTitle: "",
      imageUrl: "",
    });
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Church Gallery</h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        { images?.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              width={1000}
              height={1000}
              src={image?.imageUrl}
              alt={`Church Image ${index + 1}`}
              className="cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {
          loading && (<p className="flex items-center justify-center h-screen"> Images Loading.... </p>)
        }
      {/* Modal for displaying enlarged image */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-0 right-0 m-4 text-gray-100 text-2xl cursor-pointer"
              onClick={closeModal}
            >
              close &times;
            </button>
            <Image
              height={800}
              width={800}
              src={selectedImage?.imageUrl}
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
