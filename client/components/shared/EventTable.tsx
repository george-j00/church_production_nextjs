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

const events = [
  {
    date: "Nov 15, 2024",
    location: "Chapel",
    theme: "Harvest festival",
    status: "Not over",
  },
  {
    date: "Nov 23, 2024",
    location: "Chapel",
    theme: "Vehicle Blessing",
    status: "Not over",
  },
  {
    date: "March 01, 2024",
    location: "Chapel",
    theme: "Mary's Feast",
    status: "Over",
  },
];

export function EventTable() {
  return (
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
            <TableRow key={event.date} className="h-14">
              <TableCell  className="text-start px-2">{event.date}</TableCell>
              <TableCell  className="text-center px-2">{event.location}</TableCell>
              <TableCell  className="text-end px-2">{event.theme}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
