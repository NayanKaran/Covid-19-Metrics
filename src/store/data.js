import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCoronavirusData from '../modules/coronavirusAPI';

export const fetchCoronavirusDataFromAPI = createAsyncThunk(
  'data/fetchCoronavirusDataFromAPI',
  async () => {
    const response = await getCoronavirusData();
    return response;
  },
);

const slice = createSlice({
  name: 'data',
  initialState: null,
  extraReducers: (builder) => {
    builder.addCase(
      fetchCoronavirusDataFromAPI.fulfilled,
      (data, action) => action.payload,
    );
  },
});

export default slice.reducer;
