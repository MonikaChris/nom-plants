import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

function useRefreshToken() {
  const { setAuth } = useContext(AuthContext);

  const refresh = async () => {
    const config = {
      method: "get",
      baseURL: process.env.REACT_APP_SERVER,
      url: '/api/refresh',
      withCredentials: true,
      //headers: {'Content-Type': 'application/json'}
    }

    const response = await axios(config);

    setAuth(prev => {
      return {
        ...prev,
        accessToken: response.data.accessToken
      }
    });
  }
  return refresh;
}

export default useRefreshToken;
