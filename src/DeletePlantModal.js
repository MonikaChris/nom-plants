export default function DeletePlantModal({week, deletePlant, setDeletePlantModal, setEditPlantModal, plantToEdit }) {
  
  const handleClick = async () => {
    setDeletePlantModal(false);
    setEditPlantModal(false);
    deletePlant(plantToEdit);
  }
  
  return (
    <div className="delete-plant-modal">
      <h2>Are you sure you want to delete {plantToEdit}?</h2>

      <div>
        <button className="modal-button yes-button" onClick={handleClick}>Yes</button>
        <button className="modal-button no-button" onClick={() => setDeletePlantModal(false)}>No</button>
      </div>
    </div>
  )
}