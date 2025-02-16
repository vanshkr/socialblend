import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

export const PublicRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

