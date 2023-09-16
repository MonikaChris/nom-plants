import Flower from './Flower';
import Seedbed from './Seedbed';

export default function PlantRow({ row, GARDEN_ROW_LENGTH, setEditPlantModal, setPlantToEdit }) {
  // Fill in any partial row
  if (row.length < GARDEN_ROW_LENGTH) {
    for(let i = row.length; i < GARDEN_ROW_LENGTH; i++) {
      row.push(0);
    }
  }
  
  // Split row into flowers and seedbeds
  let firstSeedIndex = row.findIndex(elem => elem === 0);
  firstSeedIndex = firstSeedIndex === -1 ? GARDEN_ROW_LENGTH : firstSeedIndex;
  const flowerArray = row.slice(0, firstSeedIndex);
  const seedArray = row.slice(firstSeedIndex);

  return(
    <div className="plant-row">
    {flowerArray.map((plant, idx) => 
      <Flower 
        plantToEdit={plant} 
        idx={idx}
        setEditPlantModal={setEditPlantModal}
        setPlantToEdit={setPlantToEdit}  
      />
      )}

    {seedArray.map((seedbed, idx) => 
    <Seedbed idx={idx}/>)}
    </div>

  )
}