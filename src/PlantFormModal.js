export default function PlantFormModal({ showModal }) {
  return (
    <div className={`plant-form-modal ${showModal}`} >
      <form action="submit" method="post">
        <label type="text" htmlFor="plant-type">Plant:</label>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}