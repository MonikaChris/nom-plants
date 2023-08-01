export default function DeletePlantModal({setDeletePlantModal, setEditPlantModal, oldPlant, updatePlant }) {
  
  const handleClick = () => {
    setDeletePlantModal(false);
    setEditPlantModal(false);
    updatePlant('');
  }
  
  return (
    <div className="delete-plant-modal">
      <h2>Are you sure you want to delete {oldPlant}?</h2>

      <div>
        <button className="modal-button yes-button" onClick={handleClick}>Yes</button>
        <button className="modal-button no-button" onClick={() => setDeletePlantModal(false)}>No</button>
      </div>
    </div>
  )
}