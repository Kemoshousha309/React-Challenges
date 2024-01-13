import { useContext, useReducer, useRef, useState } from "react";
import "./App.css";
import { AddTask } from "./Components/AddTask/AddTask";
import { Task } from "./Components/Task/Task";
import { DeleteArea } from "./Components/DeleteArea/DeleteArea";
import { tasksReducer } from "./Store/reducers";
import { addTask, deleteAreaDrop, dragEnd, dragStart, editTask, rearrange, updateEditTaskValue, updateTaskCheck } from "./Store/actions";
import { Refs } from "./main";

const storedTasks = JSON.parse(localStorage.getItem("tasks"));

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, storedTasks ? storedTasks : []);
  const [taskInput, setTaskInput] = useState("");
  const [deleteArea, setDeleteArea] = useState(false);
  const [draged, setDraged] = useState(null);
  const refs = useContext(Refs)

  const taskInputChangeHandler = (e) => {
    setTaskInput(e.target.value);
  };
  const inputTaskAddHandler = () => {
    dispatch(addTask(taskInput))
  };
  const taskEditHandler = (e, id) => {
    dispatch(editTask(id))
  };
  const editTaskInputChangeHandler = (e, id) => {
    dispatch(updateEditTaskValue(e.target.value, id))
  };
  const taskCheckedHandler = (e, id) => {
    dispatch(updateTaskCheck(e.target.checked, id))
  };
  const taskDragStartHandler = (e, id) => {
    setDeleteArea(true);
    setDraged(id);
    dispatch(dragStart(id))
  };
  const taskDragEndHandler = (e, id) => {
    setDeleteArea(false);
    setDraged(null);
    dispatch(dragEnd(id))
  };
  const deleteAreaDropHandler = () => {
    dispatch(deleteAreaDrop(draged))
    setDeleteArea(false);
    setDraged(null);
  };
  const tasksContainerDragOverHandler = (e) => {
    e.preventDefault()
    
    let i = 0;
    Object.keys(refs).forEach((key, index) => {
      const task = refs[key].current
      if(!task) return;
      const position = task.getBoundingClientRect();
      if(position.y + position.height /2 < e.clientY){
        i = index
      }
    })
    console.log(tasks)
    dispatch(rearrange(i, draged))
  };
  const tasksContainerDropHandler = (e) => {
    // console.log(e)
    // console.log('dorp')
  }

  return (
    <div className="container">
      <AddTask
        value={taskInput}
        inputChangeHandler={taskInputChangeHandler}
        addHandler={inputTaskAddHandler}
      />
      <div
        onDragOver={tasksContainerDragOverHandler}
        onDrop={tasksContainerDropHandler}
        className="tasks-container"
      >
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              editHandler={taskEditHandler}
              inputChangeHandler={editTaskInputChangeHandler}
              checkedHandler={taskCheckedHandler}
              dragStartHandler={taskDragStartHandler}
              dragEndHandler={taskDragEndHandler}
            />
          );
        })}
      </div>
      <DeleteArea active={deleteArea} dropHandler={deleteAreaDropHandler} />
    </div>
  );
}

export default App;
