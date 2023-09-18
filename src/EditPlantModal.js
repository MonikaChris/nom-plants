import DeletePlantModal from './DeletePlantModal';
import EditPlantForm from './EditPlantForm';
import { useState } from 'react';

export default function EditPlantModal({ week, updatePlant, setPlants, plantToEdit, setEditPlantModal }) {
  const [showDeletePlantModal, setDeletePlantModal] = useState(false);
  return (
    <div className="edit-plant-modal">
      { showDeletePlantModal ?
        <DeletePlantModal
          setDeletePlantModal={setDeletePlantModal}
          setEditPlantModal={setEditPlantModal}
          plantToEdit={plantToEdit}
          //updatePlant={updatePlant}
          week={week}
          setPlants={setPlants}
          
        />
      :
        <EditPlantForm
          setDeletePlantModal={setDeletePlantModal}
          plantToEdit={plantToEdit}
          setEditPlantModal={setEditPlantModal}
          week={week}
          setPlants={setPlants}
          updatePlant={updatePlant}
        />  
    }
    </div>
  )
}