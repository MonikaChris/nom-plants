import './App.css';
import { useState, useEffect } from 'react';
import getMonday from './dateFormatter2';
import axios from 'axios';
import PlantRow from './PlantRow';
import ProgressBar from './ProgressBar';
import Banner from './Banner';
import PlantFormModal from './PlantFormModal';

function DisplayContainer() {
  const[week, setWeek] = useState(getMonday(new Date()));
  const[user, setUser] = useState('lovebug@veggies.com');
  const[plants, setPlants] = useState([]);
  const [showPlantModal, setPlantModal] = useState(false);

  const rowLength = 5;

  useEffect(() => {
    getPlants();
  }, []);


  async function getPlants() {
    try {
      const url = `${process.env.REACT_APP_SERVER}/week?date=${week}`;
      const res = await axios.get(url);
      console.log(url);
      console.log(`res.data: ${JSON.stringify(res.data)}`);
      setPlants(res.data[0].plants);
    } catch(error){
      console.log(error);
    }
  }

  async function addPlant(plant) {
      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/plant',
        data: {
          "date": `${week}`,
          "plant": `${plant}`,
          "email": `${user}`
          }
        }
         console.log(`config: ${config}`);

        try {
          const res = await axios(config);
          console.log(`post res: ${res}`);
        } catch(error) {
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

  return(
    <div className="display-container">
      <Banner week={week} total={plants.length} addPlant={addPlant} setPlantModal={setPlantModal}/>

      {showPlantModal && <PlantFormModal setPlantModal={setPlantModal}/>}
      
      {getPlantRows(rowLength).map((row, idx) =>
        <>
          <PlantRow idx={idx} row={row} rowLength={rowLength}/>
          <ProgressBar row={row} rowLength={rowLength}/>
        </>
      )}

    </div>
  )
}

export default DisplayContainer;
