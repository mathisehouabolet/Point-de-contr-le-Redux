import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'

function AddTask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (description.trim() === '') return
    dispatch(addTask(description))
    setDescription('')
  }

  return (
  <div className="add-task">
    <h2>Ajouter une tâche</h2>
    <div className="add-row">
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        placeholder="Description de la tâche..."
      />
      <button className="btn-add" onClick={handleAdd}>Ajouter</button>
    </div>
  </div>
)
}

export default AddTask