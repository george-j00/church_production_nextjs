"use client";

import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateEventDialogBox } from "./CreateEventDialogBox";
import { useEffect } from "react";
import axios from "axios";
import { DeleteEventDialogBox } from "./DeleteEventDialogBox";
import { EventType } from "@/types";
import { EditEventStatusDialogBox } from "./EditEventStatus";
import { AddEventImage } from "./add-event/page";
import { fetchAllEvents } from "@/lib/actions/admin.actions";


const getColumns = (data: any) => {
  const columns: ColumnDef<EventType>[] = [
    {
      accessorKey: "eventDate",
      header: "Start Date",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("eventDate")}</div>
      ),
    },
    {
      accessorKey: "endDate",
      header: " End Date",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("endDate")}</div>
      ),
    },
    {
      accessorKey: "eventLocation",
      header: "Event Locatation",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("eventLocation")}</div>
      ),
    },
    {
      accessorKey: "eventTheme",
      header: "Event Theme",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("eventTheme")}</div>
      ),
    },

    {
      accessorKey: "eventTime",
      header: "Start Time",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("eventTime")}</div>
      ),
    },
    {
      accessorKey: "endTime",
      header: "End Time",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("endTime")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (

              row.getValue("status") === 'Completed' ?
        <div className="capitalize text-green-500">{row.getValue("status")}</div>

        : row.getValue("status") === 'Ongoing' ? 
        <div className="capitalize text-yellow-500">{row.getValue("status")}</div>
        : null 
        )
    },

    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const event = row.original;

        console.log('the event in the eve management ',event);
        
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Edit event</DropdownMenuItem> */}
              
              <div className="flex flex-col gap-1">
              <DropdownMenuItem className="text-red-500 " asChild>
                <AddEventImage eventId={event?._id} />
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DeleteEventDialogBox eventId={event?._id} />
              </DropdownMenuItem>
              {
                event?.status === "Ongoing" && (
                  <DropdownMenuItem asChild> 
                  <EditEventStatusDialogBox eventId={event?._id}/>
                  </DropdownMenuItem>
                )
              }
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  return columns;
};

export function AllEventsManagement() {
  const [data, setEventData] = React.useState<EventType[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllEvents('All');
        const formattedEvents = data?.map((event: {eventDate: string | number | Date , endDate :  string | number | Date  }) => {
            // Convert eventDate to Date object
            const formattedStartDate = new Date(event.eventDate).toLocaleDateString();
            const formattedEndDate = new Date(event.endDate).toLocaleDateString();
            // Replace the original eventDate with the formattedDate
            return { ...event, eventDate: formattedStartDate , endDate:formattedEndDate };
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


  // const fetchUpcomingEvents = async () => {
  //   const res = await axios.post(
  //     "https://chuch-backend-nodejs.onrender.com/api/admin/getEvents" , {status:'All'}
  //   );
  //   console.log('these are the upcoming events ',res?.data?.events);
  //   return res?.data?.events;
  // };
  const columns = getColumns(data);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-black">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize bg-black text-white"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

      
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-black">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:text-black text-white "
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  
                  {isLoading ?  <p>Loading events ...</p> : <p>No results.</p>}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            className="text-white"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="text-white"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
