import { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function TaskList() {
  const [filter, setFilter] = useState('all')
  const tasks = useSelector(state => state.tasks)

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done')   return task.isDone
    if (filter === 'active') return !task.isDone
    return true
  })

 return (
  <div>
    <div className="filters">
      <button className={filter === 'all'    ? 'active' : ''} onClick={() => setFilter('all')}>Toutes</button>
      <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Non terminées</button>
      <button className={filter === 'done'   ? 'active' : ''} onClick={() => setFilter('done')}>Terminées</button>
    </div>

    {filteredTasks.length === 0 ? (
      <p className="empty">Aucune tâche ici.</p>
    ) : (
      filteredTasks.map(task => <Task key={task.id} task={task} />)
    )}
  </div>
)
}

export default TaskList