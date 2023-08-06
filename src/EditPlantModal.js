import DeletePlantModal from './DeletePlantModal';
import EditPlantForm from './EditPlantForm';
import { useState } from 'react';

export default function EditPlantModal({ plantToEdit, setEditPlantModal, updatePlant }) {
  const [showDeletePlantModal, setDeletePlantModal] = useState(false);
  return (
    <div className="edit-plant-modal">
      { showDeletePlantModal ?
        <DeletePlantModal
          setDeletePlantModal={setDeletePlantModal}
          setEditPlantModal={setEditPlantModal}
          plantToEdit={plantToEdit}
          updatePlant={updatePlant}
        />
      :
        <EditPlantForm
          setDeletePlantModal={setDeletePlantModal}
          plantToEdit={plantToEdit}
          setEditPlantModal={setEditPlantModal}
          updatePlant={updatePlant}
        />  
    }
    </div>
  )
}