import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust the path as needed

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  
  function handleLogout() {
    logout();               // Clear authentication
    navigate("/12345");     // Redirect to AdminLogin
  }

  function handleDelete(id) {
    fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProjects((prev) => prev.filter((p) => p._id !== id));
      });
  }

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#f5f5f5] flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold p-6 py-8 text-[#931f1d] text-center md:text-left">Admin Panel</h1>
          <nav className="space-y-2 px-6">
            <a href="#" className="block py-2 px-3 rounded bg-white text-[#931f1d] font-semibold text-center md:text-left">
              Dashboard
            </a>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="m-6 py-2 px-4 rounded bg-white text-[#931f1d] font-bold hover:bg-red-100"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#931f1d] text-center md:text-left">Projects List</h2>

        <div className="bg-white shadow-md rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm text-[#931f1d]">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Project Title</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project._id} className="border-b">
                    <td className="p-4 font-medium">{project.title}</td>
                    <td className="p-4 text-gray-600">{project.description}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-6 text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
