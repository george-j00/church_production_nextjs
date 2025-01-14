
// const baseUrl = "https://chuch-backend-nodejs.onrender.com/api/admin";
const baseUrl = "http://localhost:3001/api/admin";

import { IEventFormData } from "@/components/admin/event-management/CreateEventDialogBox";
import { EventParams } from "@/types";
import axios, { AxiosError } from "axios";

export const adminLogin = async (username : string , password:string) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      username: username,
      password: password,
    });
    console.log(response);
    return response?.data
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // const status = axiosError.response.status;
      // return status
      console.log("axios error ", axiosError);
    }
  }
};
export const createEvent = async (eventData: any) => {
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
export const updateEventStatus = async (eventId:string, status:string) => {
  try {
    const response = await axios.post(`${baseUrl}/change-event-status`, {
      eventId:eventId,
      status:status,
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

export const AddImages = async (formData : any ) => {
  try {

    const response = await axios.post(`${baseUrl}/add-event-images`,formData);
    // console.log('response from the addimages',eventData , eventId);
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

export const deleteMember = async (memberId: string) => {
  try {
   const res =  await axios.delete(`${baseUrl}/delete-member/${memberId}`);
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

export const fetchAllEvents = async (status: string) => {
  try {
    const response = await axios.post(`${baseUrl}/getEvents`, {status : status});
    return response?.data?.events;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // const status = axiosError.response.status;
      // return status
      console.log("axios error ", axiosError);
    }
  }
};

export const addRelic = async (formData : any) => {
  try {
    console.log('payload', formData);
    
    const res = await axios.post(`${baseUrl}/add-relics`,formData);
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

export const addLandingBanner = async (formData : any) => {
  try {
    console.log('payload', formData);
    
   const res = await axios.post(`${baseUrl}/add-banner`,formData);
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
export const addParishMembers = async (formData : any) => {
  try {
    console.log('payload', formData);
    
   const res = await axios.post(`${baseUrl}/add-parish-member`,formData);
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

const fetchParishMembers = async () => {
  const res = await axios.get(
    `${baseUrl}/get-parish-members`
  );
  return res?.data?.memebersList;
};

export const addRegister = async (payload : any ) => {
  try {
    const response = await axios.post(`${baseUrl}/add-register`,payload);
    console.log('response from the add registerrr',response);
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

export const fetchAllRegisters = async () => {
  try {
    const res = await axios.get(`${baseUrl}/get-registers`);
    return res?.data?.registers;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.log("axios error ", axiosError);
    }
  }
};

export const deleteRegister = async (registerId: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/delete-register/${registerId}`);
    return res?.data?.message;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.log("axios error ", axiosError);
    }
  }
};
