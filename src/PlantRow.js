import Flower from './Flower';
import Seedbed from './Seedbed';

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
    <Seedbed idx={idx}/>)}
    </div>

  )
}