export default function DeletePlantModal({plant, setDeletePlantModal, setEditPlantModal}) {
  const handleClick = () => {
    setDeletePlantModal(false);
    setEditPlantModal(false);
  }
  
  return (
    <div>
      <h1>Are you sure you want to delete {plant}?</h1>
      <button onClick={handleClick}>Yes</button>
      <button onClick={() => setDeletePlantModal(false)}>No</button>
    </div>
  )
}