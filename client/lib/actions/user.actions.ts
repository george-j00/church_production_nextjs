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