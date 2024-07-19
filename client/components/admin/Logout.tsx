'use client'
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
import { Button } from "../ui/button"
import axios from "axios"
import { useRouter } from "next/navigation"

  const Logout = () => {
    const router = useRouter()
    const handleLogout = async () => {
        await axios.post(`/api/logout`)
        router.push('/admin/login')
    }
    return (
        <>
          <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Logout</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="text-white bg-red-500" onClick={handleLogout}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>            
      </AlertDialog> 
        </>
      
    )
  }
  
  export default Logout