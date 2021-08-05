import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAddA, addLineA } from "../../../redux/table-reducer";
import styles from "./AddLine.module.css";

export const AddLine: React.FC = () => {
  const dispatch = useDispatch();
  const cancel = () => dispatch(toggleAddA(false));

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const add = () => {
    const newLine = {
      name,
      value,
    };
    dispatch(addLineA(newLine));
  };
  return (
    <div className={styles.addWindow}>
      <div>
        <div className={styles.inputs}>
          <input
            placeholder="Введите название"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            placeholder="Введите значение"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={add}>Add</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
