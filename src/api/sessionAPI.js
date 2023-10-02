import axios from "axios";

class SessionAPI {
  constructor() {
    this.baseURL = process.env.REACT_APP_SERVER;
  }

  async getPlants(week) {
    //Use data in session storage if present
    if (sessionStorage.getItem(JSON.stringify(week))) {
      return JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
    }
    
    //Otherwise get demo data from server
    try {
      const response = await axios.get(`${this.baseURL}/api/demo/${week}`);
      response.data.forEach((week) => {
        sessionStorage.setItem(JSON.stringify(week.date), JSON.stringify(week.plants));
      })
      return JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  addPlant(week, newPlant) {
    let plants = JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
    
    //Don't allow duplicates
    if (plants.includes(newPlant)) return;
    
    plants.push(newPlant);
    sessionStorage.setItem(JSON.stringify(week), JSON.stringify(plants));
  }

  updatePlant(week, plantToUpdate, newPlant) {
    let plants = JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
    plants = plants.map(plant => plant === plantToUpdate ? newPlant : plant);
    sessionStorage.setItem(JSON.stringify(week), JSON.stringify(plants)); 
  }

  deletePlant(week, plantToDelete) {
    let plants = JSON.parse(sessionStorage.getItem(JSON.stringify(week)));
    plants = plants.filter(plant => plant !== plantToDelete);
    sessionStorage.setItem(JSON.stringify(week), JSON.stringify(plants));
  }
}

export default SessionAPI;
