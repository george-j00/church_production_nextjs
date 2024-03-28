import { Request, Response } from "express";
import EventModel from "../models/event.schema";
import PrayerRequestModel from "../models/prayerRequests.schema";

export const createEvent = async (req: Request, res: Response) => {
  const { event } = req.body;

  try {
    // Create a new event instance based on the request body
    const newEvent = new EventModel({
      eventDate: event.eventDate,
      eventLocation: event.eventLocation,
      eventTheme: event.eventTheme,
      eventTime: event.eventTime,
      eventDescription: event.eventDescription,
    });

    // Save the new event to the database
    await newEvent.save();

    // Respond with success message
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    // Handle any errors
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    // Query the database to get all events
    const events = await EventModel.find();

    // Respond with the retrieved events
    res.status(200).json({ events });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.eventId;
    // delete the event with the specified eventId
    await EventModel.findByIdAndDelete(eventId);

    // Respond with the retrieved events
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    // Handle any errors
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getAllPrayerRequests = async (req: Request, res: Response) => {
  try {
    const allPrayerRequests = await PrayerRequestModel.find();    
    // Respond with the retrieved events
    res.status(200).json({ prayerRequests: allPrayerRequests });
  } catch (error) {
    // Handle any errors
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
