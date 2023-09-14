import { useState } from 'react';
import { addPlant } from './api/axios';

export default function PlantFormModal({user, week, setPlants, setPlantModal}) {
  const [plantType, setPlantType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();    
    const newWeekObj = await addPlant(user, week, plantType);
    
    //Hide modal and reset state
    setPlantModal(false);
    setPlantType('');

    //Update plants display
    setPlants(newWeekObj.plants);
  }

  return (
    <div className="plant-form-modal" >
      <h2>Nom'd a Plant?</h2>
      <form className="plant-form" onSubmit={handleSubmit}>
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
    </div>
  )
}