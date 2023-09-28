import "./App.css";
import { useState, useEffect, useContext } from "react";
import { getMonday } from "./dateUtility";
import Banner from "./Banner";
import PlantFormModal from "./PlantFormModal";
import EditPlantModal from "./EditPlantModal";
import Garden from "./Garden";
import ErrorModal from "./ErrorModal";
import { usePlants }  from "./hooks/usePlants";
import AuthContext from "./context/AuthProvider";

// Starting Garden Size (target plant consumption)
// Number of plants per row
const GARDEN_STARTING_SIZE = 30;
const GARDEN_ROW_LENGTH = 10;

function GardenDisplay() {
  const { user } = useContext(AuthContext);
  const [week, setWeek] = useState(getMonday(new Date()));
  const { plants, addPlant, updatePlant, deletePlant, errorMessage, clearErrorMessage } = usePlants(user, week);
  const [showPlantModal, setPlantModal] = useState(false);
  const [showEditPlantModal, setEditPlantModal] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState("");

  console.log(plants);
  return (
    <div className="garden-display">
      <Banner
        total={plants.length}
        setPlantModal={setPlantModal}
        week={week}
        setWeek={setWeek}
      />

      {errorMessage && 
      <ErrorModal
        errorMessage={errorMessage}
        clearErrorMessage={clearErrorMessage}
      />}

      {/* Conditionally render either add plant modal, edit/delete plant modal, or garden */}

      {showPlantModal ? (
        <PlantFormModal
          setPlantModal={setPlantModal}
          addPlant={addPlant} 
        />
      ) : showEditPlantModal ? (
        <EditPlantModal
          plantToEdit={plantToEdit}
          setEditPlantModal={setEditPlantModal}
          updatePlant={updatePlant}
          deletePlant={deletePlant}
          week={week}
          
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

export default GardenDisplay;
