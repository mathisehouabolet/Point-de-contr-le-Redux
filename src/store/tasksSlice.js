import { createSlice } from '@reduxjs/toolkit'

let nextId = 1

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: nextId++,
        description: action.payload,
        isDone: false,
      })
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload)
      if (task) task.isDone = !task.isDone
    },
    editTask: (state, action) => {
      const task = state.find(t => t.id === action.payload.id)
      if (task) task.description = action.payload.description
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload)
    },
  },
})

export const { addTask, toggleTask, editTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer