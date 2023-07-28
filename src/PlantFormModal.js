import { useState } from 'react';

export default function PlantFormModal({setPlantModal, addPlant}) {
  const [plantType, setPlantType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    
    addPlant(plantType);
    console.log(plantType);
    
    //Hide modal and reset state
    setPlantModal(false);
    setPlantType('');
  }

  return (
    <div className="plant-form-modal" >
      <h2>Nom'd a Plant?</h2>
      <form className="plant-form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="plant-type">Plant:</label>
        <input 
          id="plant-type"
          type="text"
          value={plantType}
          onChange={e => setPlantType(e.target.value)}  
        />
        </div>

        <div>
        <button className="plant-form-button" type="submit">Add Plant</button>
        <button className="plant-form-button" onClick={() => setPlantModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}