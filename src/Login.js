import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import AuthContext from "./context/AuthProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: '/api/auth',
      data: {
        username,
        password
      },
      withCredentials: true
    }

    try {
      const response = await axios(config);
      const accessToken = response?.data?.accessToken;
      setAuth({ username, accessToken });
      
      //Clear username and password after login
      setUsername('');
      setPassword('');

      //Handle page redirect
      navigate('/garden');
    } catch(error) {
      console.error(error);
      navigate('/');
    }
  }

  return (
    <>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username:</label>
        <input id="login-username" onChange={e => setUsername(e.target.value)}type="text" />
        <label htmlFor="login-password">Password:</label>
        <input id="login-password" onChange={e => setPassword(e.target.value)} type="text" />

        <button type="submit">Sign In</button>
      </form>

      <Link to="/register">Register</Link>
    </>
  )

}

export default Login;
