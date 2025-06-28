import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../lib/axios';

export const extractData = createAsyncThunk(
  'dataExtract/extractData',
    async (file, { rejectWithValue }) => {
        try {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('file', file);
    
        const response = await axiosInstance.post('/extract/data', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
            },
        });
    
        return response.data;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dataExtractSlice = createSlice({
  name: 'dataExtract',
  initailState,
  extraReducers: (builder) => {
    builder
      .addCase(extractData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(extractData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(extractData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});