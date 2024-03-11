const PRIORITIES = {
  LOW: 'LOW',
  HIGH: 'HIGH',
};

const STATUSES = {
  TODO: 'TODO',
  DONE: 'DONE',
};

const list = [
  {
    id: 1,
    name: 'create a post',
    status: 'TODO',
    priority: 'LOW',
  },
  {
    id: 2,
    name: 'test',
    status: 'DONE',
    priority: 'HIGH',
  },
];

function addTask(task, priority) {
  const lastTaskId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
  const isGivenPriorityExist = Object.values(PRIORITIES).includes(priority);

  if (isGivenPriorityExist) {
    list.push(
      {
        id: lastTaskId,
        name: task,
        status: STATUSES.TODO,
        priority,
      }
    )
  }
}

function deleteTask(id) {
  const taskIndex = list.findIndex((task) => task.id === id);

  const listCopy = list.slice(0, taskIndex).concat(list.slice(taskIndex + 1, list.length));

  list.length = 0;
  list.push(...listCopy);
}

function changeTaskStatus(taskId, status) {
  list.forEach((task) => {
    if (task.id === taskId) {
      task.status = status;

      return
    }
  })
}

function filterTasksByPriority(priority) {
  return list.filter(task => task.priority === priority);
};

export {
  PRIORITIES,
  STATUSES,
  list,
  addTask,
  deleteTask,
  changeTaskStatus,
  filterTasksByPriority,
}