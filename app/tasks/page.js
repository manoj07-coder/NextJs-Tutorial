import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskFormCustom.jsx'
import TaskList from '@/components/TaskList'
import React from 'react'

const TasksPage = () => {
  return (
    <div>
        <TaskFormCustom />
        <TaskList />
    </div>
  )
}

export default TasksPage