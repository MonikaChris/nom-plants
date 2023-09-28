import { Outlet } from "react-router-dom"

function DisplayContainer() {
  return (
    <div className="display-container">
      <Outlet />
    </div>
  )
}

export default DisplayContainer;
