import PlantRow from "./PlantRow";
import ProgressBar from "./ProgressBar";
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from "react";

function Garden({ plants, GARDEN_STARTING_SIZE, GARDEN_ROW_LENGTH, setEditPlantModal, setPlantToEdit }) {
  
  function getPlantRows() {
    //Shapes garden array and fills in 0's to represent seedbeds
    let gardenArray = [];
    plants.forEach((plant) => gardenArray.push(plant));
    while (gardenArray.length < GARDEN_STARTING_SIZE) gardenArray.push(0);

    if (plants.length > GARDEN_STARTING_SIZE) {
      const num_zeros = GARDEN_ROW_LENGTH - ((plants.length - GARDEN_STARTING_SIZE) % GARDEN_ROW_LENGTH);
      if (num_zeros < GARDEN_ROW_LENGTH) gardenArray = gardenArray.concat(new Array(num_zeros).fill(0));
    }
    return groupRows(gardenArray);
  }

  function groupRows(gardenArray) {
    const plantRows = [];
    for(let i = 0; i < gardenArray.length; i+= GARDEN_ROW_LENGTH) {
      plantRows.push(gardenArray.slice(i, i+GARDEN_ROW_LENGTH));
    }
    return plantRows;
  }

  return (
    getPlantRows().map(row => 
      <Fragment key={uuidv4()}>
        <PlantRow
          row={row}
          GARDEN_ROW_LENGTH={GARDEN_ROW_LENGTH}
          setEditPlantModal={setEditPlantModal}
          setPlantToEdit={setPlantToEdit}
        />

        <ProgressBar
          row={row}
          GARDEN_ROW_LENGTH={GARDEN_ROW_LENGTH} 
        />
      </Fragment>
    )
  );
}

export default Garden;
