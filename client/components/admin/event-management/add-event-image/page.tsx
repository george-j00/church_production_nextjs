"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { AddImages } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AddEventImage() {
  const { toast } = useToast();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 5) {
      setError(true);
      return;
    }
    setImages(files);
    setError(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (images.length === 0) {
      setError(true);
      return;
    }
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`eventImage${index}`, image);
    });
    
    // Simulate event updation for addding more images
    const res = await AddImages(formData); 
    if (res) {
      showToast();
      setTimeout(() => {
        window.location.reload();
      }, 500);
      console.log("Images added successfully");
    }
  };

  const showToast = () => {
    toast({
      variant: "primary",
      title: "Images added successfully",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">
          Add Image(s)
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Event Images (Max 5 images)</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="eventImages" className="text-right">
                Event Image(s)
              </Label>
              <Input
                id="eventImages"
                type="file"
                name="eventImages"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="col-span-3"
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center mb-5">
              Please upload up to 5 images
            </p>
          )}
          <DialogFooter>
            <Button type="submit">Add Images</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
