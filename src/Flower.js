export default function Flower({oldPlant, setEditPlantModal, setOldPlant }) {
  const handleClick = () => {
    setOldPlant(oldPlant);
    setEditPlantModal(true);
  }
  
  
  return (
    <div onClick={handleClick} className='flower-container'>
      <img className='flower' src={require('./images/tulip.png')} alt="Flower" />
      <div className='flower-text'>{oldPlant}</div>
    </div>
  )
}