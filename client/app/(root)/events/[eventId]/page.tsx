'use client'

import { FetchEventById } from "@/lib/actions/user.actions";
import { EventType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type EventParam = {
  params: {
    eventId: string;
  };
};

const EventView = ({ params: { eventId } }: EventParam) => {
  const [event , setEvent] = useState<EventType>();

  useEffect(() => {
    
    const fetchEvents = async () => {
        const event  = await FetchEventById(eventId);
        
        const formattedEvent = () => {
          // Convert eventDate to Date object
          const formattedStartDate = new Date(event?.eventDate).toLocaleDateString();
          const formattedEndDate = new Date(event?.endDate).toLocaleDateString();
          // Replace the original eventDate with the formattedDate
          return { ...event, eventDate: formattedStartDate , endDate:formattedEndDate };
        }

        setEvent(formattedEvent);
      }
    fetchEvents();
  }, [eventId])
  

  return (
    <div className="wrapper flex flex-col md:flex-row gap-10 items-center justify-center min-h-[70vh] p-4">
    <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-2">
      {event?.imageUrls?.map((image, index) => (
        <Image key={index} src={image} alt={`Event Image ${index + 1}`} className="w-[300px] h-[200px] rounded" width={1000} height={1000} />
      ))}
    </div>
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">{event?.eventTheme}</h1>
     
      <div className="mb-2">
        <strong>Start Date:</strong> {event?.eventDate}
      </div>
      <div className="mb-2">
        <strong>End Date:</strong> {event?.endDate}
      </div>
      <div className="mb-2">
        <strong>Start Time:</strong> {event?.eventTime}
      </div>
      <div className="mb-2">
        <strong>End Time:</strong> {event?.endTime}
      </div>
      <div className="mb-2">
        <strong>Location:</strong> {event?.eventLocation}
      </div>
      <div className="mb-2">
        <strong>Description:</strong> {event?.eventDescription}
      </div>
    </div>
  </div>

  );
};

export default EventView;
