import Flower from './Flower';
import Hole from './Hole';

export default function PlantRow({ row, rowLength }) {
  let emptySpots = new Array(rowLength - row.length);
  emptySpots.fill(0);
  console.log(`emptySpots: ${typeof emptySpots}`);

  return(
    <div className="plant-row">
    {row.map((plant, idx) => 
      <Flower plant={plant} idx={idx}></Flower>
      )}

    {emptySpots.map((hole, idx) => 
    <Hole idx={idx}/>)}
    </div>

  )
}