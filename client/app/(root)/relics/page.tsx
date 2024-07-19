"use client";

import Image from "next/image";
import React, { useState } from "react";

const Relics = () => {
  const relics = [
    {
      image: "/assets/relics/Relic1.jpg",
      name: "St. Mary",
      title: "Girdle of St. Mary",
      detail:
        "The relics of St. Mary are not only historical artifacts but also spiritual treasures for many Christians. They are believed to convey Mary's presence and intercessory power, providing comfort, inspiration, and miracles to the faithful. These relics are often housed in ornate reliquaries and displayed during important liturgical feasts, particularly on Nativity of the Blessed Virgin Mary (September 8).",
      description:
        'Also known as the "Holy Belt," this is a belt or girdle said to have belonged to Mary',
      significance:
        "Symbolizes Mary's maternal protection and her role as a mediator between humanity and God.",
    },
    {
      image: "/assets/relics/Relic2.jpg",
      name: "St. Ignatius Elias III",
      title: "Iconographic Relics",
      detail:
        "The relics of St. Mary are not only historical artifacts but also spiritual treasures for many Christians. They are believed to convey Mary's presence and intercessory power, providing comfort, inspiration, and miracles to the faithful. These relics are often housed in ornate reliquaries and displayed during important liturgical feasts, particularly on Nativity of the Blessed Virgin Mary (September 8).",
      description:
        'Also known as the "Holy Belt," this is a belt or girdle said to have belonged to Mary',
      significance:
        "Symbolizes Mary's maternal protection and her role as a mediator between humanity and God.",
    },
    {
      image: "/assets/relics/Relic3.jpg",
      name: "St. Gregorios of Parumala",
      title: "Iconographic Relics",
      detail:
        "The relics of St. Mary are not only historical artifacts but also spiritual treasures for many Christians. They are believed to convey Mary's presence and intercessory power, providing comfort, inspiration, and miracles to the faithful. These relics are often housed in ornate reliquaries and displayed during important liturgical feasts, particularly on Nativity of the Blessed Virgin Mary (September 8).",
      description:
        'Also known as the "Holy Belt," this is a belt or girdle said to have belonged to Mary',
      significance:
        "Symbolizes Mary's maternal protection and her role as a mediator between humanity and God.",
    },
  ];

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);
  // State to store the URL of the selected image
  const [selectedImage, setSelectedImage] = useState({
    description: "",
    image: "",
  });

  // Function to handle click on an image and open the modal
  const handleImageClick = (image : any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage({
      description: "",
      image: "",
    });
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-500">
        Relics
      </h2>
      <p className="text-center mb-10">
        In the church, relics are the mortal remains of a saint, or any object
        that has been in contact with the saint. The term relic comes from the
        Latin word reliquiae, which means remains.
      </p>

      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {relics?.map((relic, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="overflow-hidden rounded-lg shadow-md w-72 h-72">
              <Image
                width={300} // Set the width to 300
                height={300} // Set the height to 300
                src={relic?.image}
                alt={`Church Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => handleImageClick(relic)}
              />
            </div>

            <div className="md:pl-4 mt-4 text-justify">
              <h3 className="text-lg font-bold mb-2">{relic?.name}</h3>
              <h4 className="text-indigo-500 font-bold mb-2">{relic?.title}</h4>
              <p className="text-gray-600 mb-2">{relic?.detail}</p>
              <p className="text-gray-600 mb-2">{relic?.description}</p>
              <p className="text-gray-600">{relic?.significance}</p>
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
              width={300} // Set the width to 300
              height={300} // Set the height to 300
              src={selectedImage?.image}
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
