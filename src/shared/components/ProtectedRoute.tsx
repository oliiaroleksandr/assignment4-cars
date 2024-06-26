import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/shared/providers";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
