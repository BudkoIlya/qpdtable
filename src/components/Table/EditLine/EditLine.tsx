import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { lineT, updateLineA } from "../../../redux/table-reducer";
import styles from "../Table.module.css";

type EditLineT = {
  toggleEdit: (editLine: lineT | null) => void;
  isEdit: lineT;
};

export const EditLine: React.FC<EditLineT> = ({
  toggleEdit,
  isEdit,
  isEdit: { name, value },
}) => {
  const [formValueOne, setFormValueOne] = useState(name);
  const [formValueTwo, setFormValueTwo] = useState(value);
  const dispatch = useDispatch();
  const updateFormValues = () => {
    const newLine = {
      id: isEdit.id,
      name: formValueOne,
      value: formValueTwo,
    };
    dispatch(updateLineA(newLine));
  };
  return (
    <div className={styles.line}>
      <div>
        <input
          className={styles.input}
          value={formValueOne}
          onChange={(event) => {
            console.log(event.target.value);
            setFormValueOne(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          className={styles.input}
          value={formValueTwo}
          onChange={(e) => setFormValueTwo(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <div onClick={updateFormValues}>apply</div>
        <div onClick={() => toggleEdit(null)}>cancel</div>
      </div>
    </div>
  );
};
