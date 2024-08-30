"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAllEvents } from "@/lib/actions/admin.actions";
import { EventParams } from "@/types";
import useSWR from 'swr';

const fetcher = async () => {
  const data = await fetchAllEvents('Upcoming');
  return data?.map((event: { eventDate: string | number | Date }) => {
    // Convert eventDate to Date object
    const formattedDate = new Date(event.eventDate).toLocaleDateString();
    // Replace the original eventDate with the formattedDate
    return { ...event, eventDate: formattedDate };
  });
};

export function EventTable() {
  const { data: events, error } = useSWR('/api/events/upcoming', fetcher);

  if (error) return <p className="text-center text-xl mt-20 text-black-500">Failed to load events</p>;
  if (!events) return <p className="text-center text-xl mt-20 text-black-500">...loading</p>;
  if (events.length <= 0 ) return <p className="text-center text-xl mt-20 text-black-500">No events</p>;

  return (
    <div className="md:flex">
      <Table>
        <TableHeader className="w-full bg-gray-200 justify-center">
          <TableRow>
            <TableHead className="text-start px-2">Date</TableHead>
            <TableHead className="text-center px-2">Location</TableHead>
            <TableHead className="text-end px-2">Theme</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event:any) => (
            <TableRow key={event?.eventDate} className="h-14">
              <TableCell className="text-start px-2">
                {event?.eventDate}
              </TableCell>
              <TableCell className="text-center px-2">
                {event?.eventLocation}
              </TableCell>
              <TableCell className="text-end px-2">
                {event?.eventTheme}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
