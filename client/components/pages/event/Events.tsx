import React from "react";
import { EventTable } from "../../shared/event/EventTable";

const EventPage = () => {
  return (
    <>
      <div className="wrapper flex flex-col mt-14">
        <h1 className="text-3xl text-center font-bold">Upcoming <span className="text-indigo-600">Events</span> </h1>
        <p className="mb-5 mt-5 text-center">
          Stay connected and grow in faith! Explore all events by clicking here <span className="text-blue-600 font-extrabold underline"><a href="/events">All events</a></span>
        </p>
        <EventTable />
      </div>
    </>
  );
};

export default EventPage;
