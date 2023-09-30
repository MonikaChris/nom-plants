import axios from "axios";

class PlantsAPI {
  constructor(token) {
    this.baseURL = process.env.REACT_APP_SERVER;
    this.headers = {
      'Authorization': `Bearer ${token}`
    }
  }

  async getPlants(week) {
    try {
      const config = {
        method: "get",
        baseURL: this.baseURL,
        url: `${this.baseURL}/api/weeks/${week}`,
        headers: this.headers,
      }
      const res = await axios(config);
      return res.data.plants || [];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async addPlant(week, plant) {
    const config = {
      method: "post",
      baseURL: this.baseURL,
      url: `/api/weeks/${week}/plants/${plant}`,
      headers: this.headers,
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(error);
      return "Plant could not be added";
    }
  }

  async updatePlant(week, plantToEdit, newPlant) {
    const config = {
      method: "put",
      baseURL: this.baseURL,
      url: `/api/weeks/${week}/plants/${plantToEdit}`,
      headers: this.headers,
      data: {
        newPlant: newPlant,
      },
    };
    
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(error);
      return "Plant could not be updated";
    }
  }

    async deletePlant(week, plantToDelete) {
      const config = {
        method: "put",
        baseURL: this.baseURL,
        url: `/api/weeks/${week}/plants/${plantToDelete}`,
        headers: this.headers,
        data: {
          newPlant: "",
        },
      };
      
      try {
        const response = await axios(config);
        return response.data;
      } catch (error) {
        console.error(error);
        return "Plant could not be deleted";
      }
  }
}

export default PlantsAPI;
