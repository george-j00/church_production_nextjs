"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EventParams } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

// const events = [
//   {
//     date: "Nov 15, 2024",
//     location: "Chapel",
//     theme: "Harvest festival",
//     status: "Not over",
//   },
//   {
//     date: "Nov 23, 2024",
//     location: "Chapel",
//     theme: "Vehicle Blessing",
//     status: "Not over",
//   },
//   {
//     date: "March 01, 2024",
//     location: "Chapel",
//     theme: "Mary's Feast",
//     status: "Over",
//   },
// ];
export function EventTable() {
  const [events, setEventData] = useState<EventParams[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllEvents();
        const formattedEvents = data.map(
          (event: { eventDate: string | number | Date }) => {
            // Convert eventDate to Date object
            const formattedDate = new Date(
              event.eventDate
            ).toLocaleDateString();
            // Replace the original eventDate with the formattedDate
            return { ...event, eventDate: formattedDate };
          }
        );
        setEventData(formattedEvents);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const fetchAllEvents = async () => {
    const res = await axios.get("https://chuch-backend-nodejs-6.onrender.com/api/admin/getAllEvents");
    console.log(res?.data?.events);
    return res?.data?.events;
  };
  return (
    <>
      {isLoading ? (
        <p className="text-center text-xl mt-20 text-black-500">...loading</p>
      ) : (
        <div className="md:flex">
          <Table>
            <TableHeader className="w-full bg-gray-200 justify-center">
              <TableRow>
                {/* Adjust column widths using className attributes */}
                <TableHead className="text-start px-2">Date</TableHead>
                <TableHead className="text-center px-2">Location</TableHead>
                <TableHead className="text-end px-2">Theme</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.eventDate} className="h-14">
                  <TableCell className="text-start px-2">
                    {event.eventDate}
                  </TableCell>
                  <TableCell className="text-center px-2">
                    {event.eventLocation}
                  </TableCell>
                  <TableCell className="text-end px-2">
                    {event.eventTheme}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
