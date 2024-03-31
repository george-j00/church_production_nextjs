'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addImage, createEvent } from "@/lib/actions/admin.actions";
import { useState } from "react";

interface CreateImageFormValues {
  imageFile: File | null;
  imageTitle: string;
}

export function AddImageDialogBox() {
  const [formValues, setFormValues] = useState<CreateImageFormValues>({
    imageFile: null,
    imageTitle: "",
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormValues({ ...formValues, imageFile: file });
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, imageTitle: event.target.value });
  };

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    if (formValues.imageFile) { // Ensure imageFile is not null
        formData.append('imageFile', formValues.imageFile);
    }
    formData.append('imageTitle', formValues.imageTitle);

    // Handle form submission here, for example:
    console.log("Create Image Form submitted:", formValues);
    // Perform image upload logic here
    const res = await addImage(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">Add Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Image</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageFile" className="text-right">
                Choose Image
              </Label>
              <input
                name="galleryImage"
                id="imageFile"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageTitle" className="text-right">
                Image Title
              </Label>
              <Input
                id="imageTitle"
                type="text"
                name="imageTitle"
                value={formValues.imageTitle}
                onChange={handleTitleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Image</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
