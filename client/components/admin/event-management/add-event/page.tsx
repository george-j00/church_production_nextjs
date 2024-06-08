// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";
// import { AddImages } from "@/lib/actions/admin.actions";
// import { useRouter } from "next/navigation";
// import { useState } from "react";


// interface IEventImages {
//   eventImageFile: File[] | null;
// }


// export function AddEventImage({ eventId }: { eventId: string }) {
  
//   const { toast } = useToast()
//   const [error, setError] = useState(false);
//   const [formValues, setFormValues] = useState<IEventImages>({
//     eventImageFile: null,
//   });

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // const file = event.target.files?.[0];
//     // if (file) {
//     //   setFormValues({ ...formValues, eventImageFile: file });
//     // }
//     const files = Array.from(event.target.files || []);
//     if (files.length > 5) {
//       setError(true);
//       return;
//     } else {
//       setFormValues({ ...formValues, eventImageFile: files });
//       setError(false);
//     }
//   };

//   const handleSubmit = async(event: React.FormEvent) => {
//     event.preventDefault(); 
    
//     const formData = new FormData();

//     formValues?.eventImageFile?.forEach((image , index) => {
//       formData.append(`EventImageFile${index}`, image); 
//     });

//     // if (formValues.eventImageFile) { // Ensure eventImageFile is not null
//     //     formData.append('eventImageFile', formValues?.eventImageFile);
//     // }

//     formData.append('eventId', eventId);

//     const res = await AddImages(formData);

//     if (res) {
//       toast({
//         variant: "primary",
//         title: "Image added successfully",
//       });
//     }else{
//       toast({
//         variant: "destructive",
//         title: "Image did not add successfully",
//       });
//     }
    
//   };


//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline" className="text-black">
//           Add Image(s)
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Add Event Images (Max 5 images)</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="eventImageFile" className="text-right">
//                 Event Image(s)  
//               </Label>
//               <Input
//                 id="eventImageFile"
//                 type="file"
//                 name="eventImage"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="col-span-3"
//               />
//             </div>
//           </div>
//           {/* {error && (
//             <p className="text-red-500 text-center mb-5">
//               Please upload up to 5 images
//             </p>
//           )} */}
//           <DialogFooter>
//             <Button type="submit">Add Images</Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }



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
import { useState } from "react";
import axios from "axios";
import { AddImages } from "@/lib/actions/admin.actions";

interface IEventImages {
  eventImageFile: File[] | null;
}

export function AddEventImage({ eventId }: { eventId: string }) {
  const { toast } = useToast();
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState<IEventImages>({
    eventImageFile: null,
  });
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 5) {
      setError(true);
      return;
    } else {
      setFormValues({ ...formValues, eventImageFile: files });
      setError(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formValues.eventImageFile || formValues.eventImageFile.length === 0) {
      setError(true);
      return;
    }

    const formData = new FormData();
    formValues.eventImageFile.forEach((image) => {
      formData.append(`eventImageFile`, image);
    });

    formData.append('eventId', eventId);

    const res = await AddImages(formData);

    if (res) {
      toast({
        variant: "primary",
        title: "Images added successfully",
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      toast({
        variant: "destructive",
        title: "Failed to add images",
      });
    }
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
