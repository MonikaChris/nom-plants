export default function PlantFormModal({setPlantModal}) {
  return (
    <div className="plant-form-modal" >
      <form action="submit" method="post">
        <label type="text" htmlFor="plant-type">Plant:</label>
        <br></br>
        <input type="submit" value="Submit"/>
        <button onClick={() => setPlantModal(false)}>Cancel</button>
      </form>
    </div>
  )
}