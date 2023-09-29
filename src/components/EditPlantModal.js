import DeletePlantModal from './DeletePlantModal';
import EditPlantForm from './EditPlantForm';
import { useState } from 'react';

export default function EditPlantModal({ week, updatePlant, deletePlant, plantToEdit, setEditPlantModal }) {
  const [showDeletePlantModal, setDeletePlantModal] = useState(false);
  return (
    <div className="edit-plant-modal">
      { showDeletePlantModal ?
        <DeletePlantModal
          setDeletePlantModal={setDeletePlantModal}
          setEditPlantModal={setEditPlantModal}
          plantToEdit={plantToEdit}
          deletePlant={deletePlant}
          week={week}
        />
      :
        <EditPlantForm
          setDeletePlantModal={setDeletePlantModal}
          plantToEdit={plantToEdit}
          setEditPlantModal={setEditPlantModal}
          week={week}
          updatePlant={updatePlant}
        />  
    }
    </div>
  )
}