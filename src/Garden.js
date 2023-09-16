import PlantRow from "./PlantRow";
import ProgressBar from "./ProgressBar";

export default function Garden({plants, GARDEN_STARTING_SIZE, GARDEN_ROW_LENGTH, setEditPlantModal, setPlantToEdit}) {
  
  function getPlantRows() {
    let gardenArray = plants;
    if (!plants || plants.length < GARDEN_STARTING_SIZE) {
      gardenArray = new Array(GARDEN_STARTING_SIZE);
      gardenArray.fill(0);
      
      if(plants) {
        for(let i = 0; i < plants.length; i++) {
          gardenArray[i] = plants[i];
        }
      }
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
    getPlantRows().map((row, idx) => 
      <>
        <PlantRow
          idx={idx}
          row={row}
          GARDEN_ROW_LENGTH={GARDEN_ROW_LENGTH}
          setEditPlantModal={setEditPlantModal}
          setPlantToEdit={setPlantToEdit}
        />

        <ProgressBar 
          row={row}
          GARDEN_ROW_LENGTH={GARDEN_ROW_LENGTH} 
        />
      </>
    )
  );
}