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
import { deleteEvent, deleteMember } from "@/lib/actions/admin.actions"
  
  export function DeleteMemberDialog({memberId} : {memberId:string}) {

    const { toast } = useToast()
    const handelDelete = async() => {
     const res = await deleteMember(memberId)
      if (res) {
        toast({
          variant: "destructive",
          title: "Member deleted successfully",
        });
        setTimeout(() => {
          window.location.reload()
        }, 500);
      }
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Member</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected member.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="text-white bg-red-500" onClick={handelDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  