import { useState } from 'react';

function PlantFormModal({ addPlant, setPlantModal }) {
  const [plantType, setPlantType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();    
    addPlant(plantType);
    
    //Hide modal, reset component state
    setPlantModal(false);
    setPlantType('');
  }

  return (
      <form className="add-plant-form" onSubmit={handleSubmit}>
        <h1>Nom'd a Plant?</h1>
        <div id='add-plant-text'>
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
   
  )
}

export default PlantFormModal;
