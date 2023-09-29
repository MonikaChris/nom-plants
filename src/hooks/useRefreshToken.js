import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import AuthAPI from "../api/authAPI";

function useRefreshToken() {
  const { setAuth } = useContext(AuthContext);

  const api = new AuthAPI();

  const refresh = async () => {
    try {
      const response = await api.refresh();

      setAuth(prev => {
        return {
          ...prev,
          accessToken: response?.data?.accessToken
        }
      });
    } catch(error) {
      throw error;
    }
  }
  return refresh;
}

export default useRefreshToken;
