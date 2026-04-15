import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask, deleteTask } from '../store/tasksSlice'

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newDescription, setNewDescription] = useState(task.description)
  const dispatch = useDispatch()

  const handleSave = () => {
    if (newDescription.trim() === '') return
    dispatch(editTask({ id: task.id, description: newDescription }))
    setIsEditing(false)
  }

 return (
  <div className="task-card">
    <input
      type="checkbox"
      checked={task.isDone}
      onChange={() => dispatch(toggleTask(task.id))}
    />

    {isEditing ? (
      <>
        <input
          type="text"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
        />
        <div className="task-actions">
          <button className="btn-save" onClick={handleSave}>Sauvegarder</button>
          <button className="btn-edit" onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
      </>
    ) : (
      <>
        <span className={task.isDone ? 'done' : ''}>{task.description}</span>
        <div className="task-actions">
          <button className="btn-edit" onClick={() => setIsEditing(true)}>Modifier</button>
          <button className="btn-delete" onClick={() => dispatch(deleteTask(task.id))}>Supprimer</button>
        </div>
      </>
    )}
  </div>
)
}

export default Task