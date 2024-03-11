import { useState } from "react";
import { 
  STATUSES,
  changeTaskStatus,
  deleteTask, 
  filterTasksByPriority,
} from "../js/todo_control";

function Task({ taskText, setTasks, taskStatus, priorityGrade, taskId }) {
  const [checked, setChecked] = useState(taskStatus === STATUSES.DONE);

  function takeTaskOut() {
    deleteTask(taskId);
    setTasks(filterTasksByPriority(priorityGrade));
  }

  function onChange() {
    const status = !checked ? STATUSES.DONE : STATUSES.TODO;

    setChecked(!checked);
    changeTaskStatus(taskId, status);
  }

  return (
    <div className={ 'task' + (checked ? ' task__checked' : '') }>
      <label className="task__checkbox">
        <input type="checkbox" onChange={ onChange } checked={ checked } className="checkbox" />
      </label>
      <p className="task__text text">
        { taskText }
      </p>
      <span onClick={ takeTaskOut } className="task__delete"></span>
    </div>
  )
}

export default Task;