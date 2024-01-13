export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      const { ref, value } = action;
      return inputTaskAdd(tasks, value, ref);
    case "EDIT_TASK":
      return taskEdit(tasks, action.id);
    case "UPDATE_EDIT_TASK_VALUE":
      return editTaskInputChange(tasks, action.value, action.id);
    case "UPDATE_TASK_CHECK":
      return taskChecked(tasks, action.value, action.id);
    case "DRAG_START":
      return dragStart(tasks, action.id);
      break;
    case "DRAG_END":
      return dragEnd(tasks, action.id);
    case "DELETE_AREA_DROP":
      return deleteDrop(tasks, action.draged);
    case "REARRANGE":
      return rearrangeTasks(tasks, action.draged, action.index);

    default:
      break;
  }
}

function inputTaskAdd(tasks, taskInput) {
  let isExist = false;
  tasks.forEach((t) => {
    if (t.value == taskInput) isExist = true;
  });
  if (isExist) return tasks;
  const id = Math.random().toString(36).substring(2, 10);
  const task = {
    id: id,
    value: taskInput,
    editable: false,
    checked: false,
    dragging: false,
  };
  const newTasks = [...tasks, task];
  // add to loacal storage
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  return newTasks;
}

const taskEdit = (tasks, id) => {
  const updatedTaskes = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        editable: !task.editable,
      };
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTaskes));
  return updatedTaskes;
};

const editTaskInputChange = (tasks, value, id) => {
  const updatedTaskes = tasks.map((t) => {
    if (t.id == id) {
      return {
        ...t,
        value: value,
      };
    }
    return t;
  });
  return updatedTaskes;
};

const taskChecked = (tasks, value, id) => {
  const updatedTaskes = tasks.map((t) => {
    if (t.id == id) {
      return {
        ...t,
        checked: value,
      };
    }
    return t;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTaskes));
  return updatedTaskes;
};

const dragStart = (tasks, id) => {
  return tasks.map((t) => {
    if (t.id == id) {
      return {
        ...t,
        dragging: true,
      };
    }
    return { ...t };
  });
};

const dragEnd = (tasks, id) => {
  return tasks.map((t) => {
    if (t.id == id) {
      return {
        ...t,
        dragging: false,
      };
    }
    return { ...t };
  });
};

const deleteDrop = (tasks, draged) => {
  const filterdTasks = tasks.filter((task) => {
    return task.id != draged;
  });
  const updatedTasks = filterdTasks.map((t) => {
    if (t.id == draged) {
      return {
        ...t,
        dragging: false,
      };
    }
    return { ...t };
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  return updatedTasks;
};

// [task1, task2, task4, task3, task5]
//   0       1      2      3      5
// index = 2
const rearrangeTasks = (tasks, id, newIndx) => {
  const draggedIndx = tasks.findIndex((t) => t.id == id);
  const updateTasks = [...tasks];
  const temp = updateTasks[draggedIndx];
  updateTasks[draggedIndx] = updateTasks[newIndx];
  updateTasks[newIndx] = temp;
  return updateTasks;
};
