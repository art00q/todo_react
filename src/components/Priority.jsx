import { useState } from "react";
import { 
  addTask, 
  filterTasksByPriority,
} from "../js/todo_control";
import Form from "./Form";
import TaskList from "./TaskList";

function Priority({ priorityGrade, tasks, setTasks }) {
  const [taskName, setTaskName] = useState('');

  function onSubmit(event) {
    event.preventDefault();

    addTask(taskName, priorityGrade);
    setTasks(filterTasksByPriority(priorityGrade));
    setTaskName('');
  }

  return (
    <div className="priority">
      <p className="priority__name text">
        { priorityGrade }
      </p>
      <Form setTaskName={ setTaskName } taskName={ taskName } onSubmit={ onSubmit } />
      <TaskList tasks={ tasks } setTasks={ setTasks } priorityGrade={ priorityGrade } />
    </div>
  )
}

export default Priority;