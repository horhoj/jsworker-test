import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'peopleSlice';

interface IS {
  test: boolean;
}

const initialState: IS = {
  test: true,
};

const slice = createSlice({ name: SLICE_NAME, initialState, reducers: {} });

export const peopleSlice = {
  actions: slice.actions,
  reducer: slice.reducer,
  thunks: {},
} as const;
