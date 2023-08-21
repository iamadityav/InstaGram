import {createSlice} from '@reduxjs/toolkit';
import {DummyData} from '../Data/Dummydata';

const initialState = DummyData;

const PostSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    AddPost: (state, action) => {
      const {id, name, Image, Post, likes, touch} = action.payload;
      state.push({id, name, Image, Post, likes, touch});
    },
  },
});

export const {AddPost} = PostSlice.actions;

export default PostSlice.reducer;
