import Task from "./Task";

function TaskList({ tasks, setTasks, priorityGrade }) {
  return (
    <div className="tasks">
      {
        tasks.map(task => <Task setTasks={ setTasks } priorityGrade={ priorityGrade } taskText={ task.name } key={ task.id } />)
      }
    </div>
  )
}

export default TaskList;