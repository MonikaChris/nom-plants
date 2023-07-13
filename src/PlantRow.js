export default function PlantRow({ row }) {
  return(
    <>
    {row.map((plant, idx) => 
      <div idx={idx}>{plant}</div>
      )}
    </>
  )
}