export default function EditPlantForm({setDeletePlantModal, setEditPlantModal, plantToEdit}) {
  const handleSave = () => {
    setEditPlantModal(false);
  }
  
  return (
    <form>
      <h1>Update or Delete Plant?</h1>
      <label id="edit-plant">Plant:</label>
      <input id="edit-plant" type="text" value={plantToEdit}></input>
      <button onClick={() => setDeletePlantModal(true)}>Delete</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setEditPlantModal(false)}>Cancel</button>
    </form>
  )
}