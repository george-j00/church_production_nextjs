"use client";
import React, { useState } from "react";
import axios from "axios";
import { adminLogin } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); 
    try {
      const response = await adminLogin(username, password);
      console.log('Login successful:', response);
      if(response.token)
      {
        router.push('/admin/dashboard');
      }else{
        setError(response.message);
      }
      
    } catch (error: any) {
      setError(error.response?.data?.message || 'An error occurred during login.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="py-5 px-10 rounded-lg shadow-lg bg-white">
        <form className="w-60" onSubmit={handleSubmit}>
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
          <div className="py-2 px-2">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              className="w-full rounded-md py-1 px-2 bg-gray-100 border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            className="mt-3 py-2 px-2 bg-black text-white rounded-lg w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
