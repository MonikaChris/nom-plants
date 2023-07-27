export default function PlantFormModal({ showPlantModal }) {
  return (
    <div className={`plant-form-modal ${showPlantModal}`} >
      <form action="submit" method="post">
        <label type="text" htmlFor="plant-type">Plant:</label>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}