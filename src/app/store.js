import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movie_or_series_Reducer from '../pages/movie_or_series_view/movie_or_series_slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie_or_series_view: movie_or_series_Reducer,
  },
});
