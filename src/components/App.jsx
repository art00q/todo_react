import Priority from "./Priority"
import { 
  PRIORITIES, 
  filterTasksByPriority,
} from "../js/todo_control";
import { useState } from "react";

function App() {
  const [highPriorityTasks, setHighPriorityTasks] = useState(filterTasksByPriority(PRIORITIES.HIGH));
  const [lowPriorityTasks, setLowPriorityTasks] = useState(filterTasksByPriority(PRIORITIES.LOW));

  return (
    <section className="todo">
      <div className="wrapper">
        <div className="todo__priority">
          <Priority setTasks={ setHighPriorityTasks } priorityGrade={ PRIORITIES.HIGH } tasks={ highPriorityTasks } />
          <Priority setTasks={ setLowPriorityTasks } priorityGrade={ PRIORITIES.LOW } tasks={ lowPriorityTasks } />
        </div>
      </div>
    </section>
  )
}

export default App
