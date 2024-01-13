import styles from "./InputControl.module.css";

export default function InputControl({
  label,
  type,
  id,
  handler,
  value,
  ...rest
}) {
  return (
    <>
      <div className={styles.container}>
        {type != "submit" ? (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        ) : null}

        <input
          onChange={(e) => handler(e, id)}
          value={value}
          className={styles.input}
          type={type}
          {...rest}
        />
      </div>
    </>
  );
}
