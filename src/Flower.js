export default function Flower({plant}) {
  return (
    <div className='flower-container'>
      <img className='flower' src={require('./images/tulip.png')} alt="Flower" />
      <div className='flower-text'>{plant}</div>
    </div>
  )
}