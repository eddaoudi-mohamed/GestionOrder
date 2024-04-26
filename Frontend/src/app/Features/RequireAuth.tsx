import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../hooks";
import { selectAuth } from "./AuthSlice";

const RequireAuth = () => {
  const isAuthenticated = useAppSelector(selectAuth);
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

export default RequireAuth;
