import "./App.css";
import { useState, useEffect } from "react";
import getMonday from "./dateFormatter2";
import axios from "axios";
import PlantRow from "./PlantRow";
import ProgressBar from "./ProgressBar";
import Banner from "./Banner";
import PlantFormModal from "./PlantFormModal";
import EditPlantModal from "./EditPlantModal";

function DisplayContainer() {
  const [week, setWeek] = useState(getMonday(new Date()));
  const [user, setUser] = useState("lovebug@veggies.com");
  const [plants, setPlants] = useState([]);
  const [showPlantModal, setPlantModal] = useState(false);
  const [showEditPlantModal, setEditPlantModal] = useState(false);
  const [oldPlant, setOldPlant] = useState("");

  // Number of plants per row
  const rowLength = 10;

  useEffect(() => {
    getPlants();
  }, []);

  async function getPlants() {
    try {
      const url = `${process.env.REACT_APP_SERVER}/week?date=${week}`;
      const res = await axios.get(url);
      setPlants(res.data[0].plants);
    } catch (error) {
      console.log(error);
    }
  }

  async function addPlant(plant) {
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/plant",
      data: {
        date: week,
        plants: plant,
        email: user,
      },
    };

    try {
      const res = await axios(config);
      getPlants();
    } catch (error) {
      this.console.error(error);
    }
  }

  async function updatePlant(newPlant) {
    console.log(`updatePlant newPlant: ${newPlant}`);
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/update_plants",
      data: {
        date: week,
        oldPlant: oldPlant,
        newPlant: newPlant,
      },
    };
    try {
      const res = await axios(config);
      getPlants();
    } catch (error) {
      this.console.error(error);
    }
  }

  // Groups plants into rows for display
  function getPlantRows(size) {
    const plantRows = [];

    for (let i = 0; i < plants.length; i += size) {
      plantRows.push(plants.slice(i, i + size));
    }

    return plantRows;
  }

  return (
    <div className="display-container">
      <Banner
        total={plants.length}
        addPlant={addPlant}
        setPlantModal={setPlantModal}
        week={week}
      />

      {/* Conditionally render either add plant modal, edit/delete plant modal, or garden */}

      {showPlantModal ? (
        <PlantFormModal setPlantModal={setPlantModal} addPlant={addPlant} />
      ) : showEditPlantModal ? (
        <EditPlantModal
          oldPlant={oldPlant}
          setEditPlantModal={setEditPlantModal}
          updatePlant={updatePlant}
        />
      ) : (
        getPlantRows(rowLength).map((row, idx) => (
          <>
            <PlantRow
              idx={idx}
              row={row}
              rowLength={rowLength}
              setEditPlantModal={setEditPlantModal}
              setOldPlant={setOldPlant}
            />
            <ProgressBar row={row} rowLength={rowLength} />
          </>
        ))
      )}
    </div>
  );
}

export default DisplayContainer;
