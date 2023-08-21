import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice'; // Import your PostSlice reducer

const store = configureStore({
  reducer: {
    post: postReducer, // Use a meaningful name for the slice's data in the store
    // You can add more reducers here if needed
  },
});

export default store;
