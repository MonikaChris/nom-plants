import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [username,setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: 'api/register',
      data: {
        username,
        password 
      },
      withCredentials: true
    }

    try {
      await axios(config);
    } catch(error) {
      console.error(error);
    }

    //Reset form
    setUser('');
    setPassword('');
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reg-username">Username:</label>
        <input id="reg-username" onChange={e => setUser(e.target.value)}type="text" />
        <label htmlFor="reg-password">Password:</label>
        <input id="reg-password" onChange={e => setPassword(e.target.value)} type="text" />

        <button type="submit">Register</button>
      </form>

      <Link to="/">Login</Link>
    </>
  )

}

export default RegisterForm;
