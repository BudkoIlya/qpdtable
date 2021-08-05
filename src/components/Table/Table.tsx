import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Table.module.css";
import { RootState } from "../../redux";
import {
  lineT,
  toggleEditA,
  deleteLineA,
  toggleAddA,
  getLinesA,
} from "../../redux/table-reducer";
import { EditLine } from "./EditLine/EditLine";
import { AddLine } from "./addLine/AddLine";
import editImg from '../../imgs/edit.png'
import deleteImg from '../../imgs/delete.png'

export const Table: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLinesA());
  }, [dispatch]);
  const { isEdit, lines, isAdd } = useSelector(
    (state: RootState) => state.table
  );

  const toggleEdit = (editLine: lineT | null) => {
    dispatch(toggleEditA(editLine));
  };
  const deleteLine = (id: number) => {
    dispatch(deleteLineA(id));
  };
  return (
    <div className={styles.table}>
      {isAdd && <AddLine />}
      <div className={styles.add} onClick={() => dispatch(toggleAddA(true))}>
        Добавить
      </div>
      <div className={styles.header}>
        <div>Название</div>
        <div>Значение</div>
        <div>Действие</div>
      </div>
      <div className={styles.body}>
        {lines.map((el) => {
          return (
            <div key={el.id}>
              {isEdit && el.id === isEdit.id ? (
                <EditLine toggleEdit={toggleEdit} isEdit={isEdit} />
              ) : (
                <div className={styles.line}>
                  <div>{el.name}</div>
                  <div>{el.value}</div>
                  <div className={styles.buttons}>
                    <div onClick={() => toggleEdit(el)}><img src={editImg} alt='edit'/></div>
                    <div onClick={() => deleteLine(el.id)}><img src={deleteImg} alt='edit'/></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
