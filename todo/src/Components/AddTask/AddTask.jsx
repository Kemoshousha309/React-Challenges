import styles from "./AddTask.module.scss";

export function AddTask({ inputChangeHandler, addHandler, value }) {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" onChange={inputChangeHandler} value={value} />
      <button className={styles.btn} onClick={addHandler}>Add</button>
    </div>
  );
}
