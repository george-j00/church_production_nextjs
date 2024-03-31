
const baseUrl = "http://localhost:3001/api/admin";
import { EventParams } from "@/types";
import axios, { AxiosError } from "axios";

export const createEvent = async (eventData: EventParams) => {
  try {
    const response = await axios.post(`${baseUrl}/create-event`, {
      event: eventData,
    });
    return response
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
export const deletePrayerRequest = async (prayerRequestId: string) => {
  try {
   const res =  await axios.delete(`${baseUrl}/delete-prayer-request/${prayerRequestId}`);
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
export const fetchAllPrayerRequests = async () => {
  try {
   const res = await axios.get(`${baseUrl}/prayer-requests/getAll`);
    return res?.data?.prayerRequests
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // const status = axiosError.response.status;
      // return status
      console.log("axios error ", axiosError);
    }
  }
};


export const addImage = async (formData : any) => {
  try {
    console.log('payload', formData);
    
   const res = await axios.post(`${baseUrl}/addImage`,formData);
   console.log(res);
    return res?.data
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // const status = axiosError.response.status;
      // return status
      console.log("axios error ", axiosError);
    }
  }
};
