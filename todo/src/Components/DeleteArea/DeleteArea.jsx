import styles from "./DeleteArea.module.scss";
import trash from "../../assets/trash.svg";
export function DeleteArea({ active, dropHandler }) {
  if (!active) return null;
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dragLeaveHandler = (e) => {
        
  }
  return (
    <div
      onDrop={(e) => dropHandler(e)}
      className={styles.container}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
    >
      <img className={styles.icon} src={trash} alt="trash" />
    </div>
  );
}
