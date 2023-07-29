import DeletePlantModal from './DeletePlantModal';
import EditPlantForm from './EditPlantForm';
import { useState } from 'react';

export default function EditPlantModal({ plantToEdit, setEditPlantModal }) {
  const [showDeletePlantModal, setDeletePlantModal] = useState(false);
  return (
    <div>
      { showDeletePlantModal ?
        <DeletePlantModal
          setDeletePlantModal={setDeletePlantModal}
          setEditPlantModal={setEditPlantModal}
          plantToEdit={plantToEdit}
        />
      :
        <EditPlantForm
          setDeletePlantModal={setDeletePlantModal}
          plantToEdit={plantToEdit}
          setEditPlantModal={setEditPlantModal}
        />  
    }
    </div>
  )
}