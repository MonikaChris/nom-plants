export default function Flower({plantToEdit, setEditPlantModal, setPlantToEdit }) {
  const handleClick = () => {
    setPlantToEdit(plantToEdit);
    setEditPlantModal(true);
  }
  
  
  return (
    <div onClick={handleClick} className='flower-container'>
      <img className='flower' src={require('./images/tulip.png')} alt="Flower" />
      <div className='flower-text'>{plantToEdit}</div>
    </div>
  )
}