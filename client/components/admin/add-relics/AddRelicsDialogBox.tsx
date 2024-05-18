'use client'

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
import { addRelic } from "@/lib/actions/admin.actions";
import { useState } from "react";

interface CreateRelicFormValues {
  relicFile: File | null;
  description: string;
}

export function AddRelicDialogBox() {
  const { toast } = useToast()
  const [formValues, setFormValues] = useState<CreateRelicFormValues>({
    relicFile: null,
    description: "",
  });

  const handleRelicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormValues({ ...formValues, relicFile: file });
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, description: event.target.value });
  };

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    if (formValues.relicFile) { // Ensure relicFile is not null
        formData.append('relicFile', formValues.relicFile);
    }
    formData.append('description', formValues.description);

    // Handle form submission here, for example:
    console.log("Create Relic Form submitted:", formValues);
    // Perform relic upload logic here
    const res = await addRelic(formData);

    if (res) {
      toast({
        variant: "primary",
        title: "Relic added successfully",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Relic did not add successfully",
      });
    }
    
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">Add Relic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Relic</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="relicFile" className="text-right">
                Choose Relic
              </Label>
              <input
                name="relicImage"
                id="relicFile"
                type="file"
                accept="image/*"
                onChange={handleRelicChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="relicDescription" className="text-right">
                Description
              </Label>
              <textarea
                id="relicDescription"
                name="relicDescription"
                value={formValues.description}
                onChange={handleDescriptionChange}
                className="col-span-3 h-24 p-2 resize-none rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Relic</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
