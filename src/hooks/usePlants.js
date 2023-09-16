import { useState, useEffect } from "react";
import { getPlants } from "../api/axios";

export function usePlants(initialWeek) {
  const [plants, setPlants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [week, setWeek] = useState(initialWeek);

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

  return { plants, setPlants, week, setWeek, errorMessage, setErrorMessage };
}