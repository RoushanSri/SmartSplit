import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";

export const getPastEvents = createAsyncThunk(
  "split/getPastEvents",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/split/pastEvents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSplitById = createAsyncThunk(
  "split/getSplitById",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get(`/split/getSplit?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState={
    splits: [],
    split:null,
    loading: false,
    error: null,
  }
const splitSlice = createSlice({
  name: "split",
  initialState,
  reducers: {
    clearSplit: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPastEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPastEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.splits = action.payload.data;
      })
      .addCase(getPastEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSplitById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSplitById.fulfilled, (state, action) => {
        state.loading = false;
        state.split = action.payload.data;
      })
      .addCase(getSplitById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default splitSlice.reducer;
export const { clearSplit } = splitSlice.actions;
