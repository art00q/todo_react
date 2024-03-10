import Task from "./Task";

function TaskList({ tasks, setTasks, priorityGrade }) {
  return (
    <div className="tasks">
      {
        tasks.map(task => <Task 
          setTasks={ setTasks } 
          priorityGrade={ priorityGrade } 
          taskStatus={ task.status }
          taskId={ task.id } 
          taskText={ task.name } 
          key={ task.id } 
        />)
      }
    </div>
  )
}

export default TaskList;