import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";
import AuthAPI from "../api/authAPI";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const api = new AuthAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.authorize(username, password);
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
      <Link to="/demo">Demo</Link>
    </>
  )

}

export default Login;
