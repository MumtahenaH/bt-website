import React, { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Login successful");
          // You can navigate to dashboard here using react-router-dom
          // e.g., navigate("/admin/dashboard")
        } else {
          setMessage("Invalid credentials");
        }
      })
      .catch(() => setMessage("Login failed"));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#931f1d] mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-[#931f1d]">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[#931f1d]">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#931f1d] text-white py-3 rounded-xl hover:bg-pink-600 transition"
          >
            Login
          </button>
          {message && (
            <p className="text-center text-sm text-red-600 font-medium mt-4">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
