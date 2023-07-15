import './App.css';
import { useState, useEffect } from 'react';
import getMonday from './dateFormatter2';
import axios from 'axios';
import PlantRow from './PlantRow';
import ProgressBar from './ProgressBar';

function DisplayContainer() {
  const[week, setWeek] = useState(getMonday(new Date()));
  const[user, setUser] = useState('lovebug@veggies.com');
  const[plants, setPlants] = useState([]);

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
      
      {getPlantRows(rowLength).map((row, idx) =>
        <>
          <PlantRow idx={idx} row={row} rowLength={rowLength}></PlantRow>
          <ProgressBar row={row} rowLength={rowLength}></ProgressBar>
        </>
      )}

    </div>
  )
}

export default DisplayContainer;
