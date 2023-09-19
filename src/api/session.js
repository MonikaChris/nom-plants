import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER;

export async function sessionGetPlants(week) {
  try {
    const response = await axios.get(`${baseURL}/api/demo/${week}`);
    response.data.forEach((week) => {
      sessionStorage.setItem(JSON.stringify(week.date), JSON.stringify(week.plants));
    })
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function sessionAddPlant(week, newPlant) {
  let plants = JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
  
  //Don't allow duplicates
  if (plants.includes(newPlant)) return;
  
  plants.push(newPlant);
  sessionStorage.setItem(JSON.stringify(week), JSON.stringify(plants));
}

export function sessionUpdatePlant(week, plantToUpdate, newPlant) {
  let plants = JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
  plants = plants.map(plant => plant === plantToUpdate ? newPlant : plant);
  sessionStorage.setItem(JSON.stringify(week), JSON.stringify(plants)); 
}

export function sessionDeletePlant(week, plantToDelete) {
  let plants = JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
  plants = plants.filter(plant => plant !== plantToDelete);
  sessionStorage.setItem(JSON.stringify(week), JSON.stringify(plants));
}