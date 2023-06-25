import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
