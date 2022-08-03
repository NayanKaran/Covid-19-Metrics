import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'countryQuery',
  initialState: {},
  reducers: {
    setQuery(query, action) {
      /* eslint-disable no-param-reassign */
      query[action.payload.continent] = action.payload.query;
    },
  },
});

export const { setQuery } = slice.actions;

export default slice.reducer;
