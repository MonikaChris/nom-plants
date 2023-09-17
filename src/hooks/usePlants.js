import { useState, useEffect } from "react";
import { getPlants } from "../api/axios";

export function usePlants(week) {
  const [plants, setPlants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchPlants() {
      try {
        const fetchedPlants = await getPlants(week);
        setPlants(fetchedPlants);
      } catch (error) {
        setErrorMessage(error.message || "An error occurred");
      }
    }
    fetchPlants();
  }, [week]);

  return { plants, setPlants, errorMessage, setErrorMessage };
}