import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type lineT = {
  id: string;
  name: string;
  value: string;
};
const categorySlice = createSlice({
  name: "category",
  initialState: {
    isEdit: null as null | lineT,
    isAdd: false,
    lines: [
      {
        id: "qqq",
        name: "name",
        value: "value",
      },
      {
        id: "www",
        name: "name",
        value: "value",
      },
    ] as lineT[],
  },
  reducers: {
    toggleEditA(state, action: PayloadAction<lineT | null>) {
      state.isEdit = action.payload;
    },
    toggleAddA(state, action: PayloadAction<boolean>) {
      state.isAdd = action.payload;
    },
    updateLineA(state, action: PayloadAction<lineT>) {
      const {
        payload,
        payload: { id },
      } = action;
      state.lines = state.lines.map((el) => (el.id === id ? payload : el));
      state.isEdit = null;
    },
    addLineA(state, action: PayloadAction<lineT>) {
      state.lines.push(action.payload);
    },
    deleteLineA(state, action: PayloadAction<string>) {
      state.lines = state.lines.filter((el) => el.id !== action.payload);
    },
  },
});

export default categorySlice.reducer;
export const { toggleEditA, updateLineA, addLineA, deleteLineA, toggleAddA } =
  categorySlice.actions;
