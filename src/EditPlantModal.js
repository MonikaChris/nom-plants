import DeletePlantModal from './DeletePlantModal';
import EditPlantForm from './EditPlantForm';
import { useState } from 'react';

export default function EditPlantModal({ oldPlant, setEditPlantModal, updatePlant }) {
  const [showDeletePlantModal, setDeletePlantModal] = useState(false);
  return (
    <div>
      { showDeletePlantModal ?
        <DeletePlantModal
          setDeletePlantModal={setDeletePlantModal}
          setEditPlantModal={setEditPlantModal}
          oldPlant={oldPlant}
          updatePlant={updatePlant}
        />
      :
        <EditPlantForm
          setDeletePlantModal={setDeletePlantModal}
          oldPlant={oldPlant}
          setEditPlantModal={setEditPlantModal}
          updatePlant={updatePlant}
        />  
    }
    </div>
  )
}