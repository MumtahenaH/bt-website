import { useAuth } from "../context/AuthContext"; // adjust path
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/12345" replace />;
  }

  return children;
}
