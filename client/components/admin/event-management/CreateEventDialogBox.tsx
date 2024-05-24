"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { createEvent } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

// export interface IEventFormData {
//   eventDate: Date;
//   eventLocation: string;
//   eventTheme: string;
//   eventTime: string;
//   endDate: Date;
//   endTime: string;
//   eventDescription?: string;
//   images: FileList;  
// }

// export function CreateEventDialogBox() {
//   const { toast } = useToast();
//   const router = useRouter();
//   const [error, setError] = useState(false);
//   const [images, setImages] = useState<File[]>([]);
//   const [formData, setFormData] = useState<IEventFormData>({
//     eventDate: new Date(),
//     endDate: new Date(),
//     eventTime: '',
//     endTime: '',
//     eventLocation: '',
//     eventTheme: '',
//     images: new FileList(),
//     eventDescription: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     if (name === 'eventDate' || name === 'endDate') {
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: new Date(value)
//       }));
//     } else {
//       setFormData(prevState => ({ ...prevState, [name]: value }));
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const isValid = await validateForm();
//     if (isValid) {
//       console.log("Create Event Form submitted:", formData);
//       setError(false)
//       const res = await createUpcomingEvent(formData);
//       if (res) {
//         await showToast();
//         setTimeout(() => {
//           window.location.reload()
//         }, 500);
//         console.log("event created successfully");
//       }
//     }else{
//       setError(true)
//     }
//   };

//   const showToast = async () => {
//     toast({
//       variant: "primary",
//       title: "Event created successfully",
//     });
//   };

//   const validateForm = async () => {
//     const {
//       eventDate,
//       eventDescription,
//       eventLocation,
//       eventTheme,
//       eventTime,
//     } = formData;
//     if (
//       !eventDate &&
//       !eventDescription &&
//       !eventLocation &&
//       !eventTime &&
//       !eventTheme
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const formatDate = (date: Date): string => {
//     return date.toISOString().split('T')[0];
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline" className="text-black">
//           Create Event
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Create Event</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="eventDate" className="text-right">
//                 Event Date
//               </Label>
//               <Input
//                 id="eventDate"
//                 type="date"
//                 name="eventDate"
//                 value={formatDate(formData.eventDate)}
//                 onChange={handleInputChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="eventTime" className="text-right">
//                 Event Time
//               </Label>
//               <Input
//                 id="eventTime"
//                 type="time"
//                 name="eventTime"
//                 value={formData.eventTime}
//                 onChange={handleInputChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="eventLocation" className="text-right">
//                 Event Location
//               </Label>
//               <Input
//                 id="eventLocation"
//                 type="text"
//                 name="eventLocation"
//                 value={formData.eventLocation}
//                 onChange={handleInputChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="eventTheme" className="text-right">
//                 Event Theme
//               </Label>
//               <Input
//                 id="eventTheme"
//                 type="text"
//                 name="eventTheme"
//                 value={formData.eventTheme}
//                 onChange={handleInputChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="eventDescription" className="text-right">
//                 Event Description
//               </Label>
//               <Textarea
//                 id="eventDescription"
//                 name="eventDescription"
//                 value={formData.eventDescription}
//                 onChange={handleInputChange}
//                 className="col-span-3"
//               />
//             </div>
//           </div>
//           {
          
//           error ?  <p className="text-red-500 text-center mb-5"> Fill the all the input  </p> : null 
//           }
//           <DialogFooter>
//             <Button type="submit">Create Event</Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }



  // import React, { useState } from 'react';
  // import { useRouter } from 'next/router';
  // import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/shadcn/Dialog';

export interface IEventFormData {
  eventDate: Date;
  endDate: Date;
  eventTime: string;
  endTime: string;
  eventLocation: string;
  eventTheme: string;
  eventDescription?: string;
}

export function CreateEventDialogBox() {
  const { toast } = useToast();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<IEventFormData>({
    eventDate: new Date(),
    endDate: new Date(),
    eventTime: '',
    endTime: '',
    eventLocation: '',
    eventTheme: '',                                                                                                                                                                                                                                                                                          
    eventDescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'eventDate' || name === 'endDate') {
      setFormData(prevState => ({
        ...prevState,
        [name]: new Date(value)
      }));
    } else { 
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      console.log("Create Event Form submitted:", formData);
      setError(false);
      const res = await createEvent(formData);
      if (res) {
        await showToast();
        setTimeout(() => {
          window.location.reload();
        }, 500);
        console.log("Event created successfully");
      }
    } else {
      setError(true);
    }
  };

  const showToast = async () => {
    toast({
      variant: "primary",
      title: "Event created successfully",
    });
  };

  const validateForm = async () => {
    const {
      eventDate,
      eventDescription,
      eventLocation,
      eventTheme,
      eventTime,
      endDate,
      endTime,
    } = formData;
    if (
      !eventDate ||
      !eventDescription ||
      !eventLocation ||
      !eventTime ||
      !eventTheme ||
      !endDate ||
      !endTime
    ) {
      return false;
    } else {
      return true;
    }
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">
          Create Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventDate" className="text-right">
                Event Date
              </Label>
              <Input
                id="eventDate"
                type="date"
                name="eventDate"
                value={formatDate(formData.eventDate)}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="endDate" className="text-right">
                End Date
              </Label>
              <Input
                id="endDate"
                type="date"
                name="endDate"
                value={formatDate(formData.endDate)}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventTime" className="text-right">
                Event Time
              </Label>
              <Input
                id="eventTime"
                type="time"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="endTime" className="text-right">
                End Time
              </Label>
              <Input
                id="endTime"
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventLocation" className="text-right">
                Event Location
              </Label>
              <Input
                id="eventLocation"
                type="text"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventTheme" className="text-right">
                Event Theme
              </Label>
              <Input
                id="eventTheme"
                type="text"
                name="eventTheme"
                value={formData.eventTheme}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventDescription" className="text-right">
                Event Description
              </Label>
              <Textarea
                id="eventDescription"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center mb-5">Please fill all the inputs</p>
          )}
          <DialogFooter>
            <Button type="submit">Create Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
