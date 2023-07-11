import './App.css';
import { useState, useEffect } from 'react';
import getMonday from './dateFormatter2';
import axios from 'axios';

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

  return(
    <div className="display-container">
      {plants.map((plant, idx) => 
        <div idx={idx}>{plant}</div>
      )}

    </div>
  )
}

export default DisplayContainer;
