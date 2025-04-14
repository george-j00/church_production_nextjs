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
import { updateEventStatus } from "@/lib/actions/admin.actions"
  import { useState } from "react"
  
  export function EditEventStatusDialogBox({ eventId }: { eventId: string }) {
    const { toast } = useToast()
    const [status, setStatus] = useState("")
  
    const handleUpdateEventStatus = async () => {
      const res = await updateEventStatus(eventId, status)
      if (res) {
        toast({
          variant: "primary",
          title: `Event status updated to ${status}`,
        });
        setTimeout(() => {
          window.location.reload()
        }, 500);
      }
    }
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Edit Event</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change Event Status</AlertDialogTitle>
            <AlertDialogDescription>
              Select the new status for the event. This action will update the event status to the selected value.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="my-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              <option value="Select">Select Status</option>
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
            </select>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="text-white bg-blue-500" onClick={handleUpdateEventStatus}>Update Status</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  