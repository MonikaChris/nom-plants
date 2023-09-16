import "./App.css";
import { useState, useEffect } from "react";
import { getMonday } from "./dateUtility";
import Banner from "./Banner";
import PlantFormModal from "./PlantFormModal";
import EditPlantModal from "./EditPlantModal";
import Garden from "./Garden";
import ErrorModal from "./ErrorModal";
import { getPlants } from "./api/axios";

// Starting Garden Size (target plant consumption)
// Number of pla/nts per row
const GARDEN_STARTING_SIZE = 30;
const GARDEN_ROW_LENGTH = 10;

function DisplayContainer() {
  const [week, setWeek] = useState(getMonday(new Date()));
  const [user, setUser] = useState("lovebug@veggies.com");
  const [plants, setPlants] = useState([]);
  const [showPlantModal, setPlantModal] = useState(false);
  const [showEditPlantModal, setEditPlantModal] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchPlants() {
      try {
        const fetchedPlants = await getPlants(week);
        setPlants(fetchedPlants);
      } catch(error) {
        setErrorMessage("No Plants Found");
      }
    }
    fetchPlants();
  }, [week]);

  return (
    <div className="display-container">
      <Banner
        total={plants.length}
        setPlantModal={setPlantModal}
        week={week}
        setWeek={setWeek}
      />

      {errorMessage && 
      <ErrorModal
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />}

      {/* Conditionally render either add plant modal, edit/delete plant modal, or garden */}

      {showPlantModal ? (
        <PlantFormModal
          user={user}
          week={week} 
          setPlantModal={setPlantModal}
          setPlants={setPlants} 
        />
      ) : showEditPlantModal ? (
        <EditPlantModal
          plantToEdit={plantToEdit}
          setEditPlantModal={setEditPlantModal}
          //updatePlant={updatePlant}
          week={week}
          setPlants={setPlants}
        />
      ) : (
          <Garden
            plants={plants} 
            GARDEN_STARTING_SIZE={GARDEN_STARTING_SIZE} 
            GARDEN_ROW_LENGTH={GARDEN_ROW_LENGTH}
            setEditPlantModal={setEditPlantModal}
            setPlantToEdit={setPlantToEdit}
          />
      )}
    </div>
  );
}

export default DisplayContainer;
