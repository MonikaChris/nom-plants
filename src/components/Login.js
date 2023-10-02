import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      setUsername("");
      setPassword("");

      //Handle page redirect
      navigate("/garden");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        
        <h2>Login</h2>
        
        <div className="username-field">
          <label htmlFor="login-username">Username:</label>
          <input
            id="login-username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        
        <div className="password-field">
          <label htmlFor="login-password">Password:</label>
          <input
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="generic-button" type="submit">
          Sign In
        </button>
      </form>

      <div className="sign-in-info">
        <p>If you don't have an account, please register here:</p>
        <br />
        <Link className="generic-button" to="/register">
          Register
        </Link>
      </div>
      
      <div className="demo-info">
        <p>Or check out this demo to tour all the features of the app:</p>
        <br />
        <Link
          className="generic-button demo-button"
          class-name="demo-button"
          to="/demo"
        >
          Demo
        </Link>
      </div>
    </div>
  );
}

export default Login;
