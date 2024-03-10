const PRIORITIES = {
  LOW: 'LOW',
  HIGH: 'HIGH',
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
  }
];

function addTask(task, priority) {
  const lastTaskId = list[list.length - 1].id + 1;
  const isGivenPriorityExist = Object.values(PRIORITIES).includes(priority);

  if (isGivenPriorityExist) {
    list.push(
      {
        id: lastTaskId,
        name: task,
        priority,
      }
    )
  }
}

function deleteTask(task) {
  for (let i = 0; i < list.length - 1; i++) {
    const isTaskNameMeetsGiven = list[i].name === task;

    if (isTaskNameMeetsGiven) {
      const listCopy = list.slice(0, i).concat(list.slice(i + 1, list.length));

      list.length = 0;
      list.push(...listCopy);
      break
    }
  }
}

function filterTasksByPriority(priority) {
  return list.filter(task => task.priority === priority);
};

export {
  PRIORITIES,
  list,
  addTask,
  deleteTask,
  filterTasksByPriority,
}