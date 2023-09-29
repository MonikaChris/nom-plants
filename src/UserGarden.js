import GardenDisplay from "./GardenDisplay";
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";

function UserGarden() {
  const { auth } = useContext(AuthContext);

  return (
    <GardenDisplay user={auth.username} />
  )

}

export default UserGarden;
