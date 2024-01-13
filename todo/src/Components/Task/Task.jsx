import { useContext, useRef } from "react";
import styles from "./Task.module.scss";
import { Refs } from "../../main";
export function Task({
  editHandler,
  inputChangeHandler,
  checkedHandler,
  dragStartHandler,
  dragEndHandler,
  task,
}) {
  const ref = useRef(null)
  const refs = useContext(Refs)
  const { id, value, editable, checked, dragging } = task;
  refs[id] = ref;
  const classesList = [styles.container]
  if(dragging) classesList[1] = styles.dragging
  else classesList[1] = null 
  
  return (
    <div
      className={classesList.join(" ")}
      draggable
      onDragStart={(e) => dragStartHandler(e, id)}
      onDragEnd={e => dragEndHandler(e, id)}
      ref={ref}
    >
      <div className={styles.left}>
        {editable ? (
          <input
            onChange={(e) => inputChangeHandler(e, id)}
            type="text"
            value={value}
          />
        ) : (
          <>
            <input
              className={styles.check}
              type="checkbox"
              checked={checked}
              onChange={(e) => checkedHandler(e, id)}
            />
            <p className={styles.value}>{value}</p>
          </>
        )}
      </div>
      <div className={styles.right}>
        <button onClick={(e) => editHandler(e, id)} className={styles.btn}>
          {editable ? "Done" : "Edit"}
        </button>
      </div>
    </div>
  );
}
