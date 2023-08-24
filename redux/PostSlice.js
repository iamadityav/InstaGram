import {createSlice} from '@reduxjs/toolkit';
import {DummyData} from '../Data/Dummydata';

const PostSlice = createSlice({
  name: 'post',
  initialState: {
    data: DummyData,
  },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedItem = action.payload;
    },
    AddPost: (state, action) => {
      const {id, name, Image, Post, likes, touch} = action.payload;
      state.data.push({id, name, Image, Post, likes, touch});
    },
    toggleTouch: (state, action) => {
      const touchid = state.data.findIndex(item => item.id == action.payload);
      state.data[touchid].touch = true;
    },
    setLike: (state, action) => {
      const postIndex = state.data.findIndex(item => item.id == action.payload);
      state.data[postIndex].isLiked = !state.data[postIndex].isLiked;
      {
        state.data[postIndex].isLiked
          ? state.data[postIndex].likes++
          : state.data[postIndex].likes--;
      }
    },
    setBookmark: (state, action) => {
      const postIndex = state.data.findIndex(item => item.id == action.payload);
      state.data[postIndex].isBookmarked = !state.data[postIndex].isBookmarked;
    },
  },
});

export const {AddPost, toggleTouch, setLike, setBookmark, setSelectedPost} =
  PostSlice.actions;

export default PostSlice.reducer;
