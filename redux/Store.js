import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice';
import videoPostReducer from './AddPostSlice';

const store = configureStore({
  reducer: {
    post: postReducer,
    video: videoPostReducer,
  },
});

export default store;
