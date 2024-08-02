"use client";

import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/ui/loading-button";
import { useToast } from "@/components/ui/use-toast";
import { addLandingBanner } from "@/lib/actions/admin.actions";
import React, { useState } from "react";

interface IBanner {
  bannerFile: File | null;
  quote: string;
  author: string;
}

const Banner = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast();
  const [formValues, setFormValues] = useState<IBanner>({
    bannerFile: null,
    quote: "",
    author: "",
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormValues({ ...formValues, bannerFile: file });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    if (formValues.bannerFile) {
      // Ensure bannerFile is not null
      formData.append("bannerFile", formValues.bannerFile);
    }
    formData.append("author", formValues.author);
    formData.append("quote", formValues.quote);

    // Handle form submission here, for example:
    console.log("Create Banner :", formData);
    // Perform image upload logic here
    setIsLoading(true)
    const res = await addLandingBanner(formData);
    setIsLoading(false)

    if (res) {
      toast({
        variant: "primary",
        title: "Banner added successfully",
      });
      setFormValues({
        quote: "",
        author: "",
        bannerFile: null,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Banner did not add successfully",
      });
    }
  };

  return (
    <div className="shadow-md rounded-lg p-4 mx-auto max-w-md flex flex-col gap-4">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
        <p className="text-sm text-red-500 text-center w-full">Accepts only .jpeg , .jpg and .png formats </p>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bannerFile" className="text-right">
              Choose Image
            </Label>
            <input
              name="bannerFile"
              id="bannerFile"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="col-span-3"
              required
            />

          </div>
          {/* Added quote and author fields */}
          <label htmlFor="quote" className="text-white font-medium">
            Quote:
          </label>
          <textarea
            id="quote"
            name="quote"
            value={formValues.quote}
            onChange={(e) =>
              setFormValues({ ...formValues, quote: e.target.value })
            }
            className="shadow-sm rounded-md px-3 py-2 w-full border text-black"
            required
          />
          {formValues.quote && (
            <>
              <label htmlFor="author" className="text-white font-medium">
                Author:
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formValues.author}
                onChange={(e) =>
                  setFormValues({ ...formValues, author: e.target.value })
                }
                className="text-black shadow-sm rounded-md px-3 py-2 w-full border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                required
              />
            </>
          )}
        </div>
        {/* <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
          disabled={disabled}
        >
          Submit
        </button> */}
        <LoadingButton
            type="submit"
            size="lg"
            loading={isLoading}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
          >
            Add banner
          </LoadingButton>

      </form>
    </div>
  );
};

export default Banner;
