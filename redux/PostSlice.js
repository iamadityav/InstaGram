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
    toggleTouch: (state, action) => {
      const touchid = state.data.findIndex(item => item.id == action.payload);
      state.data[touchid].touch = true;
      console.log('state.data[touchid].touch', state.data[touchid].touch);
    },
    setLike: (state, action) => {
      const postIndex = state.data.findIndex(item => item.id == action.payload);
      state.data[postIndex].isLiked = true;
      // console.log('postindex', state.data[postIndex].isLiked);
    },
    setBookmark: (state, action) => {
      const Index = state.data.findIndex(item => item.id == action.payload);
      state.data[Index].isBookmarked = true;
      console.log('Index', state.data[Index].isBookmarked);
    },
  },
});

export const {AddPost, toggleTouch, setLike, setBookmark} = PostSlice.actions;

export default PostSlice.reducer;
