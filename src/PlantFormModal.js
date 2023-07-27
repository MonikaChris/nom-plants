import { useState } from 'react';

export default function PlantFormModal({setPlantModal}) {
  const [plantType, setPlantType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plantType);
    setPlantModal(false);
    setPlantType('');
  }

  return (
    <div className="plant-form-modal" >
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
        <button type="submit">Add Plant</button>
        <button onClick={() => setPlantModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}