const baseUrl = "http://localhost:3001/api/admin";
import { EventParams } from "@/types";
import axios, { AxiosError } from "axios";

export const createEvent = async (eventData: EventParams) => {
  try {
    const response = await axios.post(`${baseUrl}/create-event`, {
      event: eventData,
    });
    //   return response
    console.log("this is responsee", response);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // const status = axiosError.response.status;
      // return status
      console.log("axios error ", axiosError);
    }
  }
};
export const deleteEvent = async (eventId: string) => {
  try {
   const res =  await axios.delete(`${baseUrl}/delete-event/${eventId}`);
    return res?.data?.message
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // const status = axiosError.response.status;
      // return status
      console.log("axios error ", axiosError);
    }
  }
};
