import PlantsAPI from "../api/plantsAPI";

test('fetches week data', async () => {
  const plantsAPI = new PlantsAPI("dummyToken");
  const data = await plantsAPI.getPlants("9-25-2023");
  const expectedData = [
    {
      date: "9-25-2023",
      plants: ["Spinach", "Broccoli", "Tomatoes"],
      username: "user"
    }
  ];
  expect(data).toEqual(expectedData);
});