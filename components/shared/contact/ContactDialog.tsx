'use client'

import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactDialog = () => {

  const router = useRouter(); 
  const handleCall = () => {
    router.push(`tel:${+918762375263}`)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-indigo-600 w-full md:w-1/3">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[280px] md:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Contact Church  </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to contact the church ?
        </DialogDescription>

        <DialogFooter>
          <div className="flex justify-center md:justify-start gap-4 md:gap-3">
            <Button className="bg-red-500 w-full md:w-auto" type="button">
              Cancel
            </Button>
            <Button className="bg-green-700 w-full md:w-auto" type="button" onClick={handleCall}>
              Call
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
