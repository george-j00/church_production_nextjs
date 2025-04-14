"use client";

import ShowEvents from "@/components/shared/event/ShowEvents";
import { fetchAllEvents } from "@/lib/actions/admin.actions";
import { EventType } from "@/types";
import useSWR from "swr";

const fetcher = async () => {
  const events = await fetchAllEvents('All');
  return events?.map(
    (event: {
      eventDate: string | number | Date;
      endDate: string | number | Date;
    }) => {
      const formattedStartDate = new Date(
        event.eventDate
      ).toLocaleDateString();
      const formattedEndDate = new Date(event.endDate).toLocaleDateString();
      return {
        ...event,
        eventDate: formattedStartDate,
        endDate: formattedEndDate,
      };
    }
  );
};

const AllEvents = () => {
  const { data: events, error } = useSWR('/api/events/all', fetcher);

  const renderContent = () => {
    if (error) {
      return <p className="text-center text-red-600">Failed to load events</p>;
    }
    if (!events) {
      return <p className="text-center">Loading events...</p>;
    }
    const onGoingEvents = events.filter((event: any) => event.status === "Ongoing");
    const completedEvents = events.filter((event: any) => event.status === "Completed");

    return (
      <>
        {onGoingEvents.length > 0 && (
          <ShowEvents events={onGoingEvents} title="Ongoing Events" />
        )}
        {completedEvents.length > 0 && (
          <ShowEvents events={completedEvents} title="Completed Events" />
        )}
      </>
    );
  };

  return (
    <div className="wrapper p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Events Overview</h1>
      {renderContent()}
    </div>
  );
};

export default AllEvents;
