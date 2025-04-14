"use client";
import { prayerRequest } from "@/lib/actions/user.actions";
import Image from "next/image";
import React, { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { LoadingButton } from "@/components/ui/loading-button"

const prayerRequestTypes = [
  { value: "intercession-prayer", label: "Intercession Prayer" },
  { value: "prayer-departed-soul", label: "Prayer for Departed Soul" },
  { value: "holy-qurbana-prayer", label: "Holy Qurbana" },
  { value: "special-prayer-request", label: "Special Prayer Request" },
];

const PrayerRequestForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    place: "",
    requestType: "",
    specialPrayer: "", // Add message field if needed
    amount: "",
  });
  const [showSpecialPrayerInput, setShowSpecialPrayerInput] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "requestType" && value === "special-prayer-request") {
      setFormData({
        ...formData,
        requestType: value,
        specialPrayer: "", // Reset special prayer field when selecting the special request type
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const { name, phoneNumber, place, requestType, amount , specialPrayer } = formData;
    if (
      (!name && name === "") ||
      (!phoneNumber && phoneNumber === "") ||
      (!place && place === "") ||
      (!requestType && requestType == "" || requestType === "special-prayer-request" && !specialPrayer && specialPrayer === '')
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form submitted:', formData);
      setIsLoading(true)
      const res = await prayerRequest(formData);
      setIsLoading(false)
      if (res) {
        setFormData({
          name: "",
          phoneNumber: "",
          place: "",
          requestType: "",
          specialPrayer: "",
          amount: "",
        });
        toast({
          variant: "primary",
          title: "Prayer request submitted successfully",
          description: "Contact church for further details",
        })
      }
    }
  };

  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-5xl flex flex-col md:flex-row gap-7">
      <div className="md:w-2/4 w-full flex flex-col justify-center items-center md:order-1">
        {/* QR Code Component */}
        {/* {formData.phoneNumber && ( */}
        <Image
          //   value={`tel:${formData.phoneNumber}`}
          src={"/assets/QRCode.png"}
          alt="QR code "
          width={1000}
          height={1000}
        />
        {/* )} */}
        <p className="text-center mt-2">Scan for prayer request payment</p>
      </div>
      {/* prayer request form  */}
      <div className="md:w-2/4 w-full">
        <h2 className="text-2xl font-medium mb-4 text-center">
          Prayer Request Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              // required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              // required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="place"
              className="block text-gray-700 font-medium mb-2"
            >
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              // required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="requestType"
              className="block text-gray-700 font-medium mb-2"
            >
              Request Type
            </label>
            <select
              id="requestType"
              name="requestType"
              value={formData.requestType}
              onChange={(e) => {
                handleChange(e);
                if (e.target.value === "special-prayer-request") {
                  setShowSpecialPrayerInput(true);
                }
              }}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              // required
            >
              <option value="">Select Request Type</option>
              {prayerRequestTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {formData.requestType === "special-prayer-request" && (
              <div className="mb-4">
                <label
                  htmlFor="specialPrayer"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Special Prayer Request
                </label>
                <input
                  type="text"
                  id="specialPrayer"
                  name="specialPrayer"
                  value={formData.specialPrayer}
                  onChange={handleChange}
                  placeholder="Enter your special prayer request here..."
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  // required
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-medium mb-2"
            >
              Amount paid
            </label>
            <input
              type="amount"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              // required
            />
          </div>
          <div>
            {error && (
              <p className="text-red-500 text-sm text-center mt-1">
                Fill all the form fields{" "}
              </p>
            )}
            <LoadingButton
            type="submit"
            size="lg"
            loading={isLoading}
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit prayer request
          </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrayerRequestForm;
