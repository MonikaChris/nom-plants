import './App.css';
import { useState, useEffect } from 'react';
import getMonday from './dateFormatter2';
import axios from 'axios';
import PlantRow from './PlantRow';

function DisplayContainer() {
  const[week, setWeek] = useState(getMonday(new Date()));
  const[user, setUser] = useState('lovebug@veggies.com');
  const[plants, setPlants] = useState([]);


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

  function groupPlants(size) {
    const plantRows = [];
    
    for (let i = 0; i < plants.length; i += size) {
      plantRows.push(plants.slice(i, i + size));
    }

    return plantRows;
  }

  // {/* {plants.map((plant, idx) => 
  //       <div idx={idx}>{plant}</div>
  //     )} */}

  return(
    <div className="display-container">
      
      {groupPlants(5).map((row, idx) =>
        <PlantRow idx={idx} row={row}></PlantRow>
      )}

    </div>
  )
}

export default DisplayContainer;
