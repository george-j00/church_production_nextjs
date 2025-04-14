"use client";

import { FetchEventById } from "@/lib/actions/user.actions";
import Image from "next/image";
import useSWR from "swr";

type EventParam = {
  params: {
    eventId: string;
  };
};

const fetcher = async (eventId: string) => {
  const event = await FetchEventById(eventId);
  const formattedEvent = {
    ...event,
    eventDate: new Date(event?.eventDate).toLocaleDateString(),
    endDate: new Date(event?.endDate).toLocaleDateString(),
  };
  return formattedEvent;
};

const EventView = ({ params: { eventId } }: EventParam) => {
  const { data: event, error } = useSWR(eventId, fetcher);

  if (error) return <div className="flex justify-center items-center h-screen">Failed to load event.</div>;
  if (!event) return <div className="flex justify-center items-center h-screen">Loading event...</div>;

  return (
    <div className="wrapper flex flex-col md:flex-row gap-10 items-center justify-center min-h-[70vh] p-4">
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {event?.imageUrls?.map((image : any, index:any) => (
          <Image
            key={index}
            src={image}
            alt={`Event Image ${index + 1}`}
            className="w-full h-auto rounded shadow-lg"
            width={1000}
            height={1000}
            objectFit="cover"
          />
        ))}
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{event?.eventTheme}</h1>
        <div className="text-lg text-gray-600 mb-2">
          <strong>Start Date:</strong> {event?.eventDate}
        </div>
        <div className="text-lg text-gray-600 mb-2">
          <strong>End Date:</strong> {event?.endDate}
        </div>
        <div className="text-lg text-gray-600 mb-2">
          <strong>Start Time:</strong> {event?.eventTime}
        </div>
        <div className="text-lg text-gray-600 mb-2">
          <strong>End Time:</strong> {event?.endTime}
        </div>
        <div className="text-lg text-gray-600 mb-2">
          <strong>Location:</strong> {event?.eventLocation}
        </div>
        <div className="text-lg text-gray-600 mb-2">
          <strong>Description:</strong> {event?.eventDescription}
        </div>
      </div>
    </div>
  );
};

export default EventView;
