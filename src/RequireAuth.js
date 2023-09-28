import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import RegisterForm from "./RegisterForm";
import AuthContext from "./context/AuthProvider";

function RequireAuth () {
  const { auth } = useContext(AuthContext);

  return (
    auth 
    ? <Outlet />
    :
    <RegisterForm />
    
  )
};

export default RequireAuth;
