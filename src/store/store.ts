import { configureStore } from '@reduxjs/toolkit';
import { peopleSlice } from './../features/people/store/peopleSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    peopleSlice: peopleSlice.reducer,
  },
});
