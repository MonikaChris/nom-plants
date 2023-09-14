import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER;

export async function getPlants(week) {
  try {
    const url = `${baseURL}/api/weeks/${week}`;
    const res = await axios.get(url);
    return res.data.plants || [];
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function addPlant(user, week, plant) {
  const config = {
    method: "post",
    baseURL,
    url: `/api/weeks/${week}/plants/${plant}`,
    data: {
      email: user,
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

export async function updatePlant(week, plantToEdit, newPlant) {
  const config = {
    method: "put",
    baseURL,
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