export default function DeletePlantModal({setDeletePlantModal, setEditPlantModal, oldPlant, updatePlant }) {
  
  const handleClick = () => {
    setDeletePlantModal(false);
    setEditPlantModal(false);
    updatePlant('');
  }
  
  return (
    <div>
      <h1>Are you sure you want to delete {oldPlant}?</h1>
      <button onClick={handleClick}>Yes</button>
      <button onClick={() => setDeletePlantModal(false)}>No</button>
    </div>
  )
}