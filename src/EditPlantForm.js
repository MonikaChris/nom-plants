import { useState } from 'react';

export default function EditPlantForm({ week, updatePlant, setPlants, setDeletePlantModal, setEditPlantModal, plantToEdit }) {
  const [input, setInput] = useState(plantToEdit);
  
  const handleSave = async (e) => {
    e.preventDefault();
    setEditPlantModal(false);
    updatePlant(plantToEdit, input);
  }
  
  return (
    <form className="update-plant-form">
      <h1>Update or Delete Plant?</h1>
      
      <div>
        <label id="edit-plant">Plant:</label>
        <input onChange={(e) => setInput(e.target.value)} id="edit-plant" type="text" value={input}></input>
      </div>
      
      <div>
        <button className="save-button modal-button" onClick={handleSave}>Save</button>
        <button className="delete-button modal-button" onClick={() => setDeletePlantModal(true)}>Delete</button>
        <button className="cancel-button modal-button" onClick={() => setEditPlantModal(false)}>Cancel</button>
      </div>
    </form>
  )
}