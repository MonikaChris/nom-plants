import axios from "axios";

class PlantsAPI {
  constructor(user) {
    this.user = user;
    this.baseURL = process.env.REACT_APP_SERVER;
  }

  async getPlants(week) {
    try {
      const url = `${this.baseURL}/api/weeks/${week}`;
      const res = await axios.get(url);
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
      data: {
        email: this.user,
      },
    };

    try {
      const response = await axios(config);
      console.log(`axios: ${response.data}`);
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
