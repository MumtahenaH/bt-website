import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === "adminpass") {
      login();
      navigate("/1234");
    } else {
      alert("Incorrect password");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#931f1d]">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-xl "
          required
        />
        <button type="submit" className="w-full bg-[#931f1d] text-white py-3 rounded-xl hover:bg-red-700 transition">
          Login
        </button>
      </form>
    </div>
  );
}