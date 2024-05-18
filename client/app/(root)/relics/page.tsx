"use client";

import { fetchAllRelics } from "@/lib/actions/user.actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Relics = () => {
  const [relics, setAllRelics] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRelics = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllRelics();
        setAllRelics(data);
      } catch (error) {
        console.error("Error fetching relics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelics();
  }, []);

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);
  // State to store the URL of the selected image
  const [selectedImage, setSelectedImage] = useState({
    description: "",
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
      description: "",
      imageUrl: "",
    });
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-500">
        Relics
      </h2>
      <p className="text-center  mb-10">
        In the church, relics are the mortal remains of a saint, or any object
        that has been in contact with the saint. The term relic comes from the
        Latin word reliquiae, which means remains.
      </p>

      <div className="grid md:grid-cols-3 gap-6 grid-cols-2">
        {relics?.map((relic, index) => (
          <div key={index} className="flex flex-col md:flex-row items-justify">
            <div className="overflow-hidden rounded-lg shadow-md md:w-1/3">
              <Image
                width={1000}
                height={1000}
                src={relic?.imageUrl}
                alt={`Church Image ${index + 1}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => handleImageClick(relic)}
              />
            </div>
            <div className="md:pl-4 mt-4 md:mt-0 md:w-2/3">
              <p className="text-gray-600 text-sm">{relic?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying enlarged image (unchanged) */}
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
              height={500}
              width={500}
              src={selectedImage?.imageUrl}
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
