import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'continentQuery',
  initialState: '',
  reducers: {
    setQuery(query, action) {
      /* eslint-disable no-param-reassign */
      return action.payload;
    },
  },
});

export const { setQuery } = slice.actions;

export default slice.reducer;
