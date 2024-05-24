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
import React, { useState, ChangeEvent, FormEvent } from "react";

interface CreateEventFormValues {
  _id: string;
  eventDate: string;
  eventLocation: string;
  eventTheme: string;
  eventTime: string;
  eventDescription: string;
  eventImages: File[] | null ;
}

export function CreateEventForAllEventsDialog() {
  const { toast } = useToast();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState<CreateEventFormValues>({
    _id: "",
    eventDate: "",
    eventLocation: "",
    eventTheme: "",
    eventTime: "",
    eventDescription: "",
    eventImages: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = event.target as HTMLInputElement & HTMLTextAreaElement;

    if (files) {
      setFormValues((prevValues) => ({
        ...prevValues,
        eventImages: Array.from(files),
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Create Event Form submitted:", formValues);
      setError(false);
      const res = await createEvent(formValues);
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

  const validateForm = () => {
    const {
      eventDate,
      eventDescription,
      eventLocation,
      eventTheme,
      eventTime,
    } = formValues;
    if (
      !eventDate ||
      !eventDescription ||
      !eventLocation ||
      !eventTime ||
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventImages" className="text-right">
                Event Image(s)
              </Label>
              <Input
                id="eventImages"
                type="file"
                name="eventImages"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center mb-5">Fill in all the inputs</p>
          )}
          <DialogFooter>
            <Button type="submit">Create Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
