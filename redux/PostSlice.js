import {createSlice} from '@reduxjs/toolkit';
import {DummyData} from '../Data/Dummydata';

const PostSlice = createSlice({
  name: 'post',
  initialState: {
    data: DummyData,
  },
  reducers: {
    AddPost: (state, action) => {
      const {id, name, Image, Post, likes, touch} = action.payload;
      state.data.push({id, name, Image, Post, likes, touch});
    },
  },
});

export const {AddPost} = PostSlice.actions;

export default PostSlice.reducer;
