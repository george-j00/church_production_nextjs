"use client"
import React, { useState } from "react"
import { adminLogin } from "@/lib/actions/admin.actions"
import { useRouter } from "next/navigation"
import { setCookie } from "@/lib/auth"
import { Eye, EyeOff } from "lucide-react"
import { LoadingButton } from "@/components/ui/loading-button"

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    try {
      setIsLoading(true)
      const response = await adminLogin(username, password)
      setIsLoading(false)
      console.log("Login successful:", response)
      if (response.token) {
        await setCookie(response.token)
        router.replace("/admin/dashboard")
      } else {
        setError(response.message)
      }
    } catch (error: any) {
      setError(
        error.response?.data?.message || "An error occurred during login."
      )
      console.error("Login error:", error)
    }
  }

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="py-5 px-10 rounded-lg shadow-lg bg-white">
        <form className="w-60" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-xl p-5">Admin Login</h1>

          <div className="p-2">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              className="rounded-md py-1 px-2 w-full bg-gray-100 border"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="py-2 px-2 relative">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full rounded-md py-1 px-2 bg-gray-100 border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-4 top-10 text-sm cursor-pointer text-blue-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </span>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <LoadingButton
            type="submit"
            size="lg"
            loading={isLoading}
            className="mt-3 py-2 px-2 bg-black text-white rounded-lg w-full"
          >
            Login
          </LoadingButton>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
