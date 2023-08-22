import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice';

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
