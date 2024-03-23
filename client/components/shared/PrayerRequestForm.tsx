'use client'
import Image from 'next/image'
import React, { useState } from 'react';

const surveyOptions = [
  { value: 'prayer-request', label: 'Prayer Request' },
  { value: 'general-inquiry', label: 'General Inquiry' },
  { value: 'volunteer-interest', label: 'Volunteer Interest' },
  // Add more options as needed
];

const PrayerRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    requestType: '',
    date: '',
    message: '', // Add message field if needed
  });

  const handleChange = (event : any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();

    // Implement logic to submit form data (e.g., send to backend)
    console.log('Form submitted:', formData);

    // Clear form after submission (optional)
    setFormData({
      name: '',
      phoneNumber: '',
      address: '',
      requestType: '',
      date: '',
      message: '',
    });
  };

  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-5xl flex flex-col md:flex-row gap-7">
    
    <div className="md:w-2/4 w-full flex flex-col justify-center items-center md:order-1">
      {/* QR Code Component */}
      {/* {formData.phoneNumber && ( */}
        <Image
        //   value={`tel:${formData.phoneNumber}`}
        src={"/assets/image2.jpg"}
        alt='QR code '
        width={1000}
        height={1000}
        />
      {/* )} */}
      <p className="text-center mt-2">Scan for Prayer Request</p>
    </div>
    <div className="md:w-2/4 w-full">
      <h2 className="text-2xl font-medium mb-4 text-center">Prayer Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requestType" className="block text-gray-700 font-medium mb-2">
            Request Type
          </label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select Request Type</option>
            {surveyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
            Date (Optional)
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
   
  </div>
  );
};

export default PrayerRequestForm;
