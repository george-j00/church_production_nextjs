'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface CreateEventFormValues {
  eventDate: string;
  eventLocation: string;
  eventTheme: string;
  eventTime: string;
  eventDescription: string;
}

export function CreateEventDialogBox() {
  const [formValues, setFormValues] = useState<CreateEventFormValues>({
    eventDate: "",
    eventLocation: "",
    eventTheme: "",
    eventTime: "",
    eventDescription: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here, for example:
    console.log("Create Event Form submitted:", formValues);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">Create Event</Button>
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
                value={formValues.eventDate}
                onChange={handleChange}
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
                value={formValues.eventTime}
                onChange={handleChange}
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
                value={formValues.eventLocation}
                onChange={handleChange}
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
                value={formValues.eventTheme}
                onChange={handleChange}
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
                value={formValues.eventDescription}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
