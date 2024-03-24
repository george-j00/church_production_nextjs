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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateEventDialogBox } from "./CreateEventDialogBox";
// import { getAllUsers } from "@/lib/actions/user.actions";
// import Banuser from "./Banuser";

export type eventType = {
  _id: number;
  eventDate: string;
  eventLocation:string;
  eventTheme: string;
  eventTime: string;
};

const data : eventType[] = [
    {
      _id: 1,
      eventDate: "2024-04-15",
      eventLocation: "Main Church Hall",
      eventTheme: "Easter Celebration",
      eventTime: "10:00 AM"
    },
    {
      _id: 2,
      eventDate: "2024-05-20",
      eventLocation: "Campsite",
      eventTheme: "Youth Camp",
      eventTime: "9:00 AM"
    },
    {
      _id: 3,
      eventDate: "2024-06-12",
      eventLocation: "Community Center",
      eventTheme: "Community Outreach",
      eventTime: "3:00 PM"
    },
  ];

const getColumns = (data: any) => {
     const columns: ColumnDef<eventType>[] = [
        {
          id: "select",
          header: ({ table }) => (
            <Checkbox
              className="bg-white"
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
              aria-label="Select all"
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              className="bg-white"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: false,
        },
        {
          accessorKey: "eventDate",
          header: "Event Date",
          cell: ({ row }) => (
            <div className="capitalize">{row.getValue("eventDate")}</div>
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
            header: "Event Time",
            cell: ({ row }) => (
              <div className="capitalize">{row.getValue("eventTime")}</div>
            ),
          },
        
      
        {
          id: "actions",
          enableHiding: false,
          cell: ({ row }) => {
            const user = row.original;
      
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
                  <DropdownMenuItem className="text-red-500">Delete event</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500" asChild> 
                  {/* <Banuser userId={user?._id} status={user?.status} /> */}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          },
        },
      ];
      return columns;
}

export function EventManagement() {

//   const [data, setUsersData] = React.useState<never[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);


  const columns = getColumns(data)

//   React.useEffect(() => {
//     const fetchUsers = async () => {
//       setIsLoading(true);
//       try {
//         // const data: never[] = await getAllUsers();
//         setUsersData([...data]);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

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
        {/* <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-black"
        /> */}
        
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

        {/* create event dialog box  */}
       <CreateEventDialogBox />
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
                  No results.
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
