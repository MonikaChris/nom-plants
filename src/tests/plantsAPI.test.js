import axios from "axios";
import PlantsAPI from "../api/plantsAPI";

// Mock axios
jest.mock("axios");

test("fetches week's plant data", async () => {
  const dummyResponse = {
    data: {
      date: "9-25-2023",
      plants: ["Spinach", "Broccoli", "Tomatoes"],
      username: "user",
    },
  };

  // Mock Axios to return dummy response
  axios.mockResolvedValue(dummyResponse);

  const plantsAPI = new PlantsAPI("dummyToken");
  const data = await plantsAPI.getPlants("9-25-2023");
  
  expect(data).toEqual(["Spinach", "Broccoli", "Tomatoes"]);
});
