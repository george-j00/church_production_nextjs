"use client"
import React, { useState } from "react"
import axios from "axios"
import { addParishMembers } from "@/lib/actions/admin.actions"
import { useToast } from "@/components/ui/use-toast"
import { LoadingButton } from "@/components/ui/loading-button"

const Parish = () => {
  const [name, setName] = useState("")
  const [houseName, setHouseName] = useState("")
  const [imageFile, setImage] = useState<File | null>(null)
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("houseName", houseName)
    formData.append("category", category)
    formData.append("phoneNumber", phoneNumber)
    if (imageFile) {
      formData.append("imageFile", imageFile)
    }

    try {
      setIsLoading(true)
      const response = await addParishMembers(formData)
      setIsLoading(false)

      if (response) {
        toast({
          variant: "primary",
          title: "Member added successfully",
        })
        window.location.reload()
      }
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Parish</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-black px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="spiritual-leaders">Spiritual Leaders</option>
            <option value="parish-council">Parish Council</option>
            <option value="parish-members">Parish Members</option>
            <option value="eminent-personalities">Eminent Personalities</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-black px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="houseName">
            House Name
          </label>
          <input
            type="text"
            id="houseName"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
            className="w-full px-3 text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="houseName">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 text-black py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        {category !== "parish-members" && (
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="imageFile"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
        <div>
          {/* <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button> */}
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

export default Parish
