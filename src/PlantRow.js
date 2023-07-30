import Flower from './Flower';
import Seedbed from './Seedbed';

export default function PlantRow({ row, rowLength, setEditPlantModal, setOldPlant }) {
  let emptySpots = new Array(rowLength - row.length);
  emptySpots.fill(0);

  return(
    <div className="plant-row">
    {row.map((plant, idx) => 
      <Flower 
        oldPlant={plant} 
        idx={idx}
        setEditPlantModal={setEditPlantModal}
        setOldPlant={setOldPlant}  
      />
      )}

    {emptySpots.map((hole, idx) => 
    <Seedbed idx={idx}/>)}
    </div>

  )
}