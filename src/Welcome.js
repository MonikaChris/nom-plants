import { Outlet } from "react-router-dom";

function Welcome() {
  return (
    <>
      <p>Welcome to NomNom Plants!</p>
      <Outlet />
    
    </>
  )
}

export default Welcome;
