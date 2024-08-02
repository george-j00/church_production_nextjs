'use client'

import { EventType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ShowEventsProps = {
  events: EventType[];
  title: string;
};

const ShowEvents = ({ events, title }: ShowEventsProps) => {
  const router = useRouter();

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event: EventType) => (
          <div
            key={event._id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => router.push(`events/${event?._id}`)}
          >
            <Image
              src={event.imageUrls?.[0]}
              alt={event.eventTheme}
              className="w-full h-48 object-cover"
              height={192}
              width={384}
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {event.eventTheme}
              </h3>
              <p className="text-gray-600 mb-4">{event.eventDescription}</p>
              <div className="flex gap-5 text-gray-500 text-sm">
                <p>Start: {event.eventDate}</p>
                <p>End: {event.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowEvents;
