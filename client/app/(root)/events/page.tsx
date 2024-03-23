import { EventTable } from "@/components/shared/EventTable";
import React from "react";

const page = () => {
  return (
    <>
      <div className="wrapper flex flex-col mt-14">
        <h1 className="text-3xl text-center font-bold">Upcoming <span className="text-indigo-600">Events</span> </h1>
        <p className="mb-5 mt-5 text-center">
          Stay connected and grow in faith! Explore our upcoming events below
        </p>
        <EventTable />
      </div>
    </>
  );
};

export default page;
