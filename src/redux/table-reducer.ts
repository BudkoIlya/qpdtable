import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/api";

export interface lineT {
  id: number;
  name: string;
  value: string;
}

export const getLinesA = createAsyncThunk(
  "lines/get",
  async (data: undefined, thunkAPI) => {
    try {
      return await API.get();
    } catch (err) {
      window.alert(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateLineA = createAsyncThunk(
  "lines/update",
  async (updatedLine: lineT, thunkAPI) => {
    try {
      return await API.update(updatedLine);
    } catch (err) {
      window.alert(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const addLineA = createAsyncThunk(
  "lines/add",
  async (newLIne: Omit<lineT, "id">, thunkAPI) => {
    try {
      return await API.add(newLIne);
    } catch (err) {
      window.alert(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const deleteLineA = createAsyncThunk(
  "lines/delete",
  async (id: number, thunkAPI) => {
    try {
      return await API.delete(id);
    } catch (err) {
      window.alert(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isEdit: null as null | lineT,
    isAdd: false,
    lines: [] as lineT[],
  },
  reducers: {
    toggleEditA(state, action: PayloadAction<lineT | null>) {
      state.isEdit = action.payload;
    },
    toggleAddA(state, action: PayloadAction<boolean>) {
      state.isAdd = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLinesA.fulfilled, (state, action) => {
      state.lines = action.payload;
    });
    builder.addCase(updateLineA.fulfilled, (state, action) => {
      const {
        payload,
        payload: { id },
      } = action;
      state.lines = state.lines.map((el) => (el.id === id ? payload : el));
      state.isEdit = null;
    });
    builder.addCase(addLineA.fulfilled, (state, action) => {
      state.lines.push(action.payload);
      state.isAdd = false;
    });
    builder.addCase(deleteLineA.fulfilled, (state, action) => {
      state.lines = state.lines.filter(
        (el) => el.id !== Number(action.payload.id)
      );
    });
  },
});

export default categorySlice.reducer;
export const { toggleEditA, toggleAddA } = categorySlice.actions;
