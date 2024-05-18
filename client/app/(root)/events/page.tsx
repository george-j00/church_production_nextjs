"use client";

import { useRouter } from "next/navigation";
import React from "react";

const events = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmOYmAVTiI17DEx9bUhoPsxp_mYrxqyqeFZt-5Wscdw&s", // replace with actual image path
    title: "Event 1",
    description: "Description for Event 1",
    date: "2024-06-01",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmOYmAVTiI17DEx9bUhoPsxp_mYrxqyqeFZt-5Wscdw&s", // replace with actual image path
    title: "Event 2",
    description: "Description for Event 2",
    date: "2024-06-10",
  },
];

const AllEvents = () => {
  const router = useRouter();

  return (
    <div className="wrapper min-h-screen p-8 ">
      <h1 className="text-4xl font-bold text-center mb-8">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl"
            onClick={() => router.push(`events/${event?.id}`)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-500">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
