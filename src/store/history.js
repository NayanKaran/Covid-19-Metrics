import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'history',
  initialState: '/',
  reducers: {
    setHistory(query, action) {
      /* eslint-disable no-param-reassign */
      return action.payload;
    },
  },
});

export const { setHistory } = slice.actions;

export default slice.reducer;
