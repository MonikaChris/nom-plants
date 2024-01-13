import { useState, useEffect, useContext } from "react";
import PlantsAPI from "../api/plantsAPI";
import SessionAPI from "../api/sessionAPI";
import AuthContext from "../context/AuthProvider";
import { DEMO_EMAIL } from "../constants";

export function usePlants(user, week) {
  const [plants, setPlants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    getPlants();
  }, [week]);

  const api = user === DEMO_EMAIL ? new SessionAPI() : new PlantsAPI(auth.accessToken);

  async function getPlants() {
    try {
      const fetchedPlants = await api.getPlants(week);
      setPlants(fetchedPlants || []);
    } catch (error) {
      setErrorMessage("Could not fetch plants");
    }
  }
  
  async function addPlant(newPlant) {
    try {
      await api.addPlant(week, newPlant);
      getPlants();
    } catch(error) {
        console.error(error);
        setErrorMessage("Could not add plant");
      }
  }
 
  async function updatePlant(plantToEdit, newPlant) {
    try{
      await api.updatePlant(week, plantToEdit, newPlant);
      getPlants();
    } catch(error) {
      console.error(error);
      setErrorMessage("Could not update plant");
    }
  }  
  
  async function deletePlant(plantToDelete) {
    try{
      await api.deletePlant(week, plantToDelete);
      getPlants();
    } catch(error) {
      console.error(error);
      setErrorMessage("Could not delete plant");
    }
  }

  function clearErrorMessage() {
    setErrorMessage("");
  }

  return { plants, addPlant, updatePlant, deletePlant, errorMessage, clearErrorMessage };
}