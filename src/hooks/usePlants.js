import { useState, useEffect } from "react";
import { getPlants, apiAddPlant, apiUpdatePlant } from "../api/axios";

export function usePlants(user, week) {
  const [plants, setPlants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchPlants();
  }
  , [week]);

  async function fetchPlants() {
    try {
      const fetchedPlants = await getPlants(week);
      setPlants(fetchedPlants);
    } catch (error) {
      setErrorMessage(error.message || "An error occurred");
    }
  }
  
  async function addPlant(newPlant) {
    try {
      await apiAddPlant(user, week, newPlant);
      fetchPlants();
    } catch(error) {
      console.error(error);
      setErrorMessage("Could not add plant");
    }
  }

  async function updatePlant(plantToEdit, newPlant) {
    try{
      await apiUpdatePlant(week, plantToEdit, newPlant);
      fetchPlants();
    } catch(error) {
      console.error(error);
      setErrorMessage("Could not update plant");
    }
  }


  return { plants, setPlants, addPlant, updatePlant, errorMessage, setErrorMessage };
}