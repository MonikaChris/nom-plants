import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import useRefreshToken from "../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PersistAuth() {
  const { auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const refreshAccessToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
        navigate('/');
        setIsLoading(false);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    //Call refreshAccessToken only if no access token in auth state
    !auth?.accessToken ? refreshAccessToken() : setIsLoading(false);

    return () => isMounted = false;
  }, []);

  return isLoading ? <p>Loading...</p> : <Outlet />;
}

export default PersistAuth;
