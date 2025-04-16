"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchAllEvents } from "@/lib/actions/admin.actions"
import { EventParams } from "@/types"
import useSWR from "swr"

const fetcher = async () => {
  const data = await fetchAllEvents("Upcoming")
  
  const events =  data?.map((event: { eventDate: string | number | Date }) => {
    // Convert eventDate to Date object
    const formattedDate = new Date(event.eventDate).toLocaleDateString()
    // Replace the original eventDate with the formattedDate
    return { ...event, eventDate: formattedDate }
  })

  return events.reverse()
}

export function EventTable() {
  const { data: events, error } = useSWR("/api/events/upcoming", fetcher)

  if (error)
    return (
      <p className="text-center text-xl mt-20 text-black-500">
        Failed to load events
      </p>
    )
  if (!events)
    return (
      <p className="text-center text-xl mt-20 text-black-500">...loading</p>
    )
  if (events.length <= 0)
    return <p className="text-center text-xl mt-20 text-black-500">No events</p>

  return (
    <div className="md:flex w-full overflow-x-auto">
      <Table className="w-full border rounded-md">
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="w-[130px] text-start px-2">Date</TableHead>
            <TableHead className="w-[100px] text-start px-2">Time</TableHead>
            <TableHead className="w-[180px] text-center px-2">
              Location
            </TableHead>
            <TableHead className="w-[250px] text-start px-2">Theme</TableHead>
            <TableHead className="text-start px-2">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event: any) => (
            <TableRow key={event?.eventDate} className="h-14">
              <TableCell className="text-start px-2">
                {event?.eventDate}
              </TableCell>
              <TableCell className="text-start px-2">
                {event?.eventTime}
              </TableCell>
              <TableCell className="text-center px-2">
                {event?.eventLocation}
              </TableCell>
              <TableCell className="text-start px-2">
                {event?.eventTheme}
              </TableCell>
              <TableCell className="text-start px-2 whitespace-normal break-words max-w-[300px]">
                {event?.eventDescription}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
