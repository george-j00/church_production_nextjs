"use client"
import React, { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { LoadingButton } from "@/components/ui/loading-button"
import { addRegister } from "@/lib/actions/admin.actions"

const Registers = () => {
  const [registerName, setRegisterName] = useState("")
  const [docLink, setDocLink] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
        name:registerName,
        link:docLink
    }
    try {
      setIsLoading(true)
      console.log('payloaddd',payload);
      
      const response = await addRegister(payload)
      setIsLoading(false)

      if (response) {
        toast({
          variant: "primary",
          title: "Register added successfully",
        })
        window.location.reload()
      }
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add registers</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="registerName"
          >
            Register Name
          </label>
          <input
            type="text"
            id="registerName"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
            className="w-full text-black px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="link">
            Document Link
          </label>
          <input
            type="text"
            id="link"
            value={docLink}
            onChange={(e) => setDocLink(e.target.value)}
            className="w-full px-3 text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <LoadingButton
            type="submit"
            size="lg"
            loading={isLoading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </LoadingButton>
        </div>
      </form>
    </div>
  )
}

export default Registers
