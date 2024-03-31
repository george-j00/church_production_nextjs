"use client";

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
import { useToast } from "@/components/ui/use-toast";
import { createEvent } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CreateEventFormValues {
  eventDate: string;
  eventLocation: string;
  eventTheme: string;
  eventTime: string;
  eventDescription: string;
}

export function CreateEventDialogBox() {
  const { toast } = useToast();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState<CreateEventFormValues>({
    eventDate: "",
    eventLocation: "",
    eventTheme: "",
    eventTime: "",
    eventDescription: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      console.log("Create Event Form submitted:", formValues);
      setError(false)
      const res = await createEvent(formValues);
      if (res) {
        await showToast();
        setTimeout(() => {
          window.location.reload()
        }, 500);
        console.log("event created successfully");
      }
    }else{
      setError(true)
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
    } = formValues;
    if (
      !eventDate &&
      !eventDescription &&
      !eventLocation &&
      !eventTime &&
      !eventTheme
    ) {
      return false;
    } else {
      return true;
    }
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
          {
          
          error ?  <p className="text-red-500 text-center mb-5"> Fill the all the input  </p> : null 
          }
          <DialogFooter>
            <Button type="submit">Create Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
