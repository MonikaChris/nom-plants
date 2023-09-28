import { useContext, useState, useEffect } from "react";
import AuthContext from "./context/AuthProvider";
import useRefreshToken from "./hooks/useRefreshToken";
import { Outlet } from "react-router-dom";

function PersistAuth() {
  const { auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;

    const refreshAccessToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
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
