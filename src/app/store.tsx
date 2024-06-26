import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import listingReducer from '../features/listing/listingSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    listing: listingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
