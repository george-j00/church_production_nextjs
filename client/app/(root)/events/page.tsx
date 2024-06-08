"use client";

import ShowEvents from "@/components/shared/event/ShowEvents";
import { fetchAllEvents } from "@/lib/actions/admin.actions";
import { EventType } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AllEvents = () => {
  const router = useRouter();
  const [events, setEvents] = useState<EventType[]>();

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await fetchAllEvents();

      const formattedEvents = events.map(
        (event: {
          eventDate: string | number | Date;
          endDate: string | number | Date;
        }) => {
          // Convert eventDate to Date object
          const formattedStartDate = new Date(
            event.eventDate
          ).toLocaleDateString();
          const formattedEndDate = new Date(event.endDate).toLocaleDateString();
          // Replace the original eventDate with the formattedDate
          return {
            ...event,
            eventDate: formattedStartDate,
            endDate: formattedEndDate,
          };
        }
      );
      setEvents(formattedEvents);
    };
    fetchEvents();
  }, []);

  const onGoingEvents = events?.filter((event) => event.status === "Ongoing");
  const completedEvents = events?.filter(
    (event) => event.status === "Completed"
  );

  return (
    <>
      {!events && (
        <div className="flex justify-center items-center h-screen">
          {" "}
          Loding events ...
        </div>
      )}
      {onGoingEvents && (
        <ShowEvents events={onGoingEvents} title="Ongoing Events" />
      )}
      {completedEvents && (
        <ShowEvents events={completedEvents} title="Completed Events" />
      )}
    </>
  );
};

export default AllEvents;
