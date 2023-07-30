import { useState } from 'react';

export default function EditPlantForm({setDeletePlantModal, setEditPlantModal, oldPlant, updatePlant}) {
  const [input, setInput] = useState(oldPlant);
  
  const handleSave = (e) => {
    e.preventDefault();
    setEditPlantModal(false);
    updatePlant(input);

  }
  
  return (
    <form>
      <h1>Update or Delete Plant?</h1>
      <label id="edit-plant">Plant:</label>
      <input onChange={(e) => setInput(e.target.value)} id="edit-plant" type="text" value={input}></input>
      <button onClick={() => setDeletePlantModal(true)}>Delete</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setEditPlantModal(false)}>Cancel</button>
    </form>
  )
}