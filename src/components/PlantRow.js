import Flower from "./Flower";
import Seedbed from "./Seedbed";
import { v4 as uuidv4 } from "uuid";

function PlantRow({ row,GARDEN_ROW_LENGTH, setEditPlantModal, setPlantToEdit }) {
  // Split row into flowers and seedbeds
  let firstSeedIndex = row.findIndex((elem) => elem === 0);
  firstSeedIndex = firstSeedIndex === -1 ? GARDEN_ROW_LENGTH : firstSeedIndex;
  const flowerArray = row.slice(0, firstSeedIndex);
  const seedArray = row.slice(firstSeedIndex);

  return (
    <div className="plant-row">
      {flowerArray.map((plant) => (
        <Flower
          key={uuidv4()}
          plant={plant}
          setEditPlantModal={setEditPlantModal}
          setPlantToEdit={setPlantToEdit}
        />
      ))}

      {seedArray.map(() => (
        <Seedbed key={uuidv4()} />
      ))}
    </div>
  );
}

export default PlantRow;

