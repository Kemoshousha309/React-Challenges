// it's a best practice to store types of the 
// actions in variables or to use symbols to 
// ensure they are unique

export const addTask = ( value) => ({
  type: "ADD_TASK",
  value
});

export const editTask = (id) => ({
  type: "EDIT_TASK",
  id,
});

export const updateEditTaskValue = (value, id) => ({
  type: "UPDATE_EDIT_TASK_VALUE",
  value,
  id,
});

export const updateTaskCheck = (value, id) => ({
  type: "UPDATE_TASK_CHECK",
  value,
  id,
});

export const dragStart = (id) => ({
  type: "DRAG_START",
  id,
});

export const dragEnd = (id) => ({
  type: "DRAG_END",
  id,
});

export const deleteAreaDrop = (draged) => ({
    type: "DELETE_AREA_DROP",
    draged
})

export const rearrange = (index, draged) => ({
  type: "REARRANGE",
  index,
  draged
})