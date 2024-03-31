const baseUrl = "http://localhost:3001/api/user";
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