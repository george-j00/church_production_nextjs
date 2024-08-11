const baseUrl = "https://chuch-backend-nodejs.onrender.com/api/user";
const localUrl = "http://localhost:3001/api/user";
import axios, { AxiosError } from "axios";

 type PrayerRequestParams = {
    name: string;
    phoneNumber: string;
    place: string;
    requestType: string;
    specialPrayer?:string; // Add message field if needed
    amount:string;
}

export const prayerRequest = async (prayerRequestData:PrayerRequestParams ) => {
    try {
      const response = await axios.post(`${baseUrl}/prayer-request`, {
        prayerRequest: prayerRequestData,
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


export const fetchAllImages = async () => {
    try {
      const response = await axios.get(`${baseUrl}/get-all-images`);
        return response?.data?.images;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // const status = axiosError.response.status;
        // return status
        console.log("axios error ", axiosError);
      }
    }
  };

export const fetchAllRelics = async () => {
    try {
      const response = await axios.get(`${baseUrl}/fetchRelics`);
        return response?.data?.relics;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // const status = axiosError.response.status;
        // return status
        console.log("axios error ", axiosError);
      }
    }
  };

export const fetchAllBanners = async () => {
    try {
      const response = await axios.get(`${baseUrl}/fetchAllBanners`);
        return response?.data?.banners;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // const status = axiosError.response.status;
        // return status
        console.log("axios error ", axiosError);
      }
    }
  };

export const FetchEventById = async (eventId:string) => {
    try {
      const response = await axios.post(`${baseUrl}/fetchEventById` , {eventId:eventId});
        return response?.data?.event;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // const status = axiosError.response.status;
        // return status
        console.log("axios error ", axiosError);
      }
    }
  };
export const fetchParishMembers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/fetchParishMembers`);
        return response?.data?.members;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // const status = axiosError.response.status;
        // return status
        console.log("axios error ", axiosError);
      }
    }
  };
export const fetchRegisters = async () => {
    try {
      const response = await axios.get(`${baseUrl}/get-registers`);

      console.log('register responseee' , response);
      
        return response?.data?.registers;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // const status = axiosError.response.status;
        // return status
        console.log("axios error ", axiosError);
      }
    }
  };

