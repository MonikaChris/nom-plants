import Flower from './Flower';

export default function PlantRow({ row }) {
  return(
    <>
    {row.map((plant, idx) => 
      <Flower plant={plant} idx={idx}></Flower>
      )}
    </>
  )
}