import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { deleteEvent } from "@/lib/actions/admin.actions"
  
  export function DeleteEventDialogBox({eventId} : {eventId:string}) {

    const { toast } = useToast()
    const handleDeleteEvent = async() => {
     const res = await deletePrayerRequest(eventId)
      if (res) {
        toast({
          variant: "destructive",
          title: "Prayer request removed deleted successfully",
        });
        setTimeout(() => {
          window.location.reload()
        }, 500);
      }
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected prayer request from the list .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="text-white bg-red-500" onClick={handleDeleteEvent}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  