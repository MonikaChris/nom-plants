import { useState } from "react";
import { Link } from "react-router-dom";
import authAPI from "../api/authAPI";

function RegisterForm() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const api = new authAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.register(username, password);
    } catch (error) {
      console.error(error);
    }
    //Reset form
    setUser("");
    setPassword("");
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        
        <h2>Register</h2>
        
        <div className="username-field">
          <label htmlFor="reg-username">Username:</label>
          <input
            id="reg-username"
            onChange={(e) => setUser(e.target.value)}
            type="text"
          />
        </div>
        
        <div className="password-field">
          <label htmlFor="reg-password">Password:</label>
          <input
            id="reg-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="generic-button" type="submit">
          Register
        </button>
      </form>

      <div className="sign-in-info">
        <p>After registering, please log in here:</p>
        <br />
        <Link className="generic-button" to="/">
          Login
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

export default RegisterForm;
