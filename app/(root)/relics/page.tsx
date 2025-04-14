"use client"

import Image from "next/image"
import React, { useState } from "react"

const Relics = () => {
  const relics = [
    {
      image: "/assets/relics/Relic1.jpg",
      name: "St. Mary",
      title: "Girdle of St. Mary",
      detail:
        "The relics of St. Mary are not only historical artifacts but also spiritual treasures for many Christians. They are believed to convey Mary's presence and intercessory power, providing comfort, inspiration, and miracles to the faithful. These relics are often housed in ornate reliquaries and displayed during important liturgical feasts, particularly on the Nativity of the Blessed Virgin Mary (September 8).",
      description:
        'Also known as the "Holy Belt," this is a belt or girdle said to have belonged to Mary.',
      significance:
        "Symbolizes Mary's maternal protection and her role as a mediator between humanity and God.",
    },
    {
      image: "/assets/relics/Relic2.jpg",
      name: "St. Ignatius Elias III",
      title: "Iconographic Relics",
      detail:
        "St. Elias III, also known as Mor Ignatius Elias III, was a significant patriarch in the Syriac Orthodox Church, serving as the 119th Patriarch of Antioch. Born in 1867 in Mardin, Turkey, and passing away in 1932 in India, St. Elias III is remembered for his piety, leadership, and efforts to maintain the unity of the Syriac Orthodox Church during tumultuous times. His relics are revered by the faithful, especially in the places most connected to his life and work.",
      description:
        "Icons and images depicting St. Elias III, often containing small relics such as pieces of his clothing or hair.",
      significance:
        "These relics serve as visual and physical reminders of the patriarch’s sanctity and are used in veneration practices.",
    },
    {
      image: "/assets/relics/Relic3.jpg",
      name: "St. Gregorios of Parumala",
      title: "Iconographic Relics",
      detail:
        "Saint Gregorios of Parumala, also known as Parumala Thirumeni, is a revered saint in the Malankara Orthodox Syrian Church. Born as Geevarghese in 1848 and passing away in 1902, he was canonized in 1947. Known for his deep spirituality, ascetic life, and healing powers, his relics are considered holy and are venerated by the faithful.",
      description:
        "Icons and images depicting St. Gregorios, sometimes containing small relics such as pieces of his clothing.",
      significance:
        "These relics serve as visual and physical reminders of the saint’s sanctity and are used in veneration practices.",
    },
  ]

  // State to manage the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false)
  // State to store the URL and description of the selected image
  const [selectedImage, setSelectedImage] = useState<{
    description: string
    image: string
  }>({
    description: "",
    image: "",
  })

  // Function to handle click on an image and open the modal
  const handleImageClick = (image: { description: string; image: string }) => {
    setSelectedImage(image)
    setModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage({
      description: "",
      image: "",
    })
  }

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

      <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
        {relics.map((relic, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full"
          >
            <div className="relative w-full h-80">
              <Image
                src={relic.image}
                alt={`${relic.name} Image`}
                layout="fill"
                objectFit="contain" // Ensures the entire image is visible without cropping
                className="cursor-pointer transition-transform transform hover:scale-105 duration-300"
                onClick={() => handleImageClick(relic)}
              />
            </div>

            <div className="flex flex-col flex-grow p-4">
              <h3 className="text-lg font-bold mb-2 text-center">
                {relic.name}
              </h3>
              <h4 className="text-indigo-500 font-bold mb-2 text-center">
                {relic.title}
              </h4>
              <p className="text-gray-600 mb-2 text-justify">{relic.detail}</p>
              <p className="text-gray-600 mb-2 text-justify">
                {relic.description}
              </p>
              <p className="text-gray-600 text-justify">{relic.significance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Relics
