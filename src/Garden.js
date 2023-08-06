import PlantRow from "./PlantRow";
import ProgressBar from "./ProgressBar";

export default function Garden({plants, gardenStartingSize, gardenRowLength, setEditPlantModal, setPlantToEdit}) {
  
  function getPlantRows() {
    let gardenArray = plants;
    if (!plants || plants.length < gardenStartingSize) {
      gardenArray = new Array(gardenStartingSize);
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
    for(let i = 0; i < gardenArray.length; i+= gardenRowLength) {
      plantRows.push(gardenArray.slice(i, i+gardenRowLength));
    }


    return plantRows;
  }

  return (
    getPlantRows().map((row, idx) => 
      <>
        <PlantRow
          idx={idx}
          row={row}
          gardenRowLength={gardenRowLength}
          setEditPlantModal={setEditPlantModal}
          setPlantToEdit={setPlantToEdit}
        />

        <ProgressBar 
          row={row}
          gardenRowLength={gardenRowLength} 
        />
      </>
    )
  );
}