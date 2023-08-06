import "./App.css";
import { useState, useEffect } from "react";
import getMonday from "./dateFormatter2";
import axios from "axios";
import Banner from "./Banner";
import PlantFormModal from "./PlantFormModal";
import EditPlantModal from "./EditPlantModal";
import Garden from "./Garden";

function DisplayContainer() {
  const [week, setWeek] = useState(getMonday(new Date()));
  const [user, setUser] = useState("lovebug@veggies.com");
  const [plants, setPlants] = useState([]);
  const [showPlantModal, setPlantModal] = useState(false);
  const [showEditPlantModal, setEditPlantModal] = useState(false);
  const [oldPlant, setOldPlant] = useState("");

  useEffect(() => {
    getPlants();
  }, []);

  // Starting Garden Size (target plant consumption)
  // Number of plants per row
  const gardenStartingSize = 30;
  const gardenRowLength = 10;

  async function getPlants() {
    console.log('ran');
    try {
      const url = `${process.env.REACT_APP_SERVER}/api/weeks/${week}`;
      console.log(`url: ${url}`);
      const res = await axios.get(url);
      console.log(`res: ${res.data.plants}`);
      setPlants(res.data.plants);
    } catch (error) {
      console.log(error);
    }
  }

  async function addPlant(plant) {
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: `/api/weeks/${week}/plants/${plant}`,
      data: {
        email: user,
      },
    };

    try {
      await axios(config);
      getPlants();
    } catch (error) {
      console.error(error);
    }
  }

  async function updatePlant(newPlant) {
    const config = {
      method: "put",
      baseURL: process.env.REACT_APP_SERVER,
      url: `/api/weeks/${week}/plants/${oldPlant}`,
      data: {
        newPlant: newPlant,
      },
    };
    
    try {
      await axios(config);
      getPlants();
    } catch (error) {
      console.error(error);
    }
  }

  
  console.log(`plants: ${plants}`);
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
          <Garden
            plants={plants} 
            gardenStartingSize={gardenStartingSize} 
            gardenRowLength={gardenRowLength}
            setEditPlantModal={setEditPlantModal}
            setOldPlant={setOldPlant}
          />
      )}
    </div>
  );
}

export default DisplayContainer;
