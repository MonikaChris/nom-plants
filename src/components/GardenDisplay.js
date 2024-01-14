import "../App.css";
import { useState } from "react";
import { getMonday } from "../dateUtility";
import Banner from "./Banner";
import PlantFormModal from "./PlantFormModal";
import EditPlantModal from "./EditPlantModal";
import Garden from "./Garden";
import ErrorModal from "./ErrorModal";
import { usePlants }  from "../hooks/usePlants";


function GardenDisplay({ user }) {
  const [week, setWeek] = useState(getMonday(new Date()));
  const { plants, addPlant, updatePlant, deletePlant, errorMessage, clearErrorMessage } = usePlants(user, week);
  const [showPlantModal, setPlantModal] = useState(false);
  const [showEditPlantModal, setEditPlantModal] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState("");

  return (
    <div className="garden-display">
      <Banner
        total={plants.length}
        setPlantModal={setPlantModal}
        week={week}
        setWeek={setWeek}
        user={user}
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
            setEditPlantModal={setEditPlantModal}
            setPlantToEdit={setPlantToEdit}
          />
      )}
    </div>
  );
}

export default GardenDisplay;
