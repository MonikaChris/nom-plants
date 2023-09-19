import { useState, useEffect } from "react";
import { apiGetPlants, apiAddPlant, apiUpdatePlant, apiDeletePlant } from "../api/axios";
import { sessionGetPlants, sessionAddPlant, sessionUpdatePlant, sessionDeletePlant } from "../api/session";

const DEMO_EMAIL = "lovebug@veggies.com";

export function usePlants(user, week) {
  const [plants, setPlants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchPlants();
  }
  , [week]);

  
  const isDemoUser = user === DEMO_EMAIL;

  //Wrapper for api CRUD methods to accept user as first parameter
  const apiWrapper = {
    getPlants : (...args) => apiGetPlants(user, ...args),
    addPlant : (...args) => apiAddPlant(user, ...args),
    updatePlant : (...args) => apiUpdatePlant(user, ...args),
    deletePlant : (...args) => apiDeletePlant(user, ...args)
  }

  const dispatch = {
    handleGetPlants : isDemoUser ? sessionGetPlants : apiWrapper.getPlants,
    handleAddPlant : isDemoUser ? sessionAddPlant : apiWrapper.addPlant,
    handleUpdatePlant : isDemoUser ? sessionUpdatePlant : apiWrapper.updatePlant,
    handleDeletePlant : isDemoUser ? sessionDeletePlant : apiWrapper.deletePlant
  }

  async function fetchPlants() {
    try {
      if (user === DEMO_EMAIL && sessionStorage.getItem(JSON.stringify(week))) {
        setPlants(JSON.parse(sessionStorage.getItem(JSON.stringify(week))));
        return
      }
      const fetchedPlants = await dispatch.handleGetPlants(week);
      setPlants(fetchedPlants || []);
    } catch (error) {
      setErrorMessage(error.message || "An error occurred");
    }
  }
  
  async function addPlant(newPlant) {
    try {
      await dispatch.handleAddPlant(week, newPlant);
      fetchPlants();
    } catch(error) {
        console.error(error);
        setErrorMessage("Could not add plant");
      }
  }
 
  async function updatePlant(plantToEdit, newPlant) {
    try{
      await dispatch.handleUpdatePlant(week, plantToEdit, newPlant);
      fetchPlants();
    } catch(error) {
      console.error(error);
      setErrorMessage("Could not update plant");
    }
  }  
  
  async function deletePlant(plantToDelete) {
    try{
      await dispatch.handleDeletePlant(week, plantToDelete);
      fetchPlants();
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