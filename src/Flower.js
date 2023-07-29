export default function Flower({plant, setEditPlantModal }) {
  const handleClick = () => {
    setEditPlantModal(true);
  }
  
  
  return (
    <div onClick={handleClick} className='flower-container'>
      <img className='flower' src={require('./images/tulip.png')} alt="Flower" />
      <div className='flower-text'>{plant}</div>
    </div>
  )
}