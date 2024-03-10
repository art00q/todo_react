import { 
  deleteTask, 
  filterTasksByPriority,
} from "../js/todo_control";

function Task({ taskText, setTasks, priorityGrade }) {
  function takeTaskOut() {
    deleteTask(taskText);

    setTasks(filterTasksByPriority(priorityGrade));
  }

  return (
    <div className="task">
      <label className="task__checkbox">
        <input type="checkbox" className="checkbox" />
      </label>
      <p className="task__text text">
        { taskText }
      </p>
      <span onClick={ takeTaskOut } className="task__delete"></span>
    </div>
  )
}

export default Task;