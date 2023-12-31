import {createSlice} from '@reduxjs/toolkit';
import {PostData} from '../Data/PostData';

const AddPostSlice = createSlice({
  name: 'video',
  initialState: {
    data: PostData,
  },
  reducers: {
    setVideoLike: (state, action) => {
      const postIndex = state.data.findIndex(item => item.id == action.payload);
      state.data[postIndex].isLiked = !state.data[postIndex].isLiked;
      {
        state.data[postIndex].isLiked
          ? state.data[postIndex].post.likes++
          : state.data[postIndex].post.likes--;
      }
    },
    setVideoBookmark: (state, action) => {
      const postIndex = state.data.findIndex(
        item => item.id === action.payload,
      );
      state.data[postIndex].isBookmarked = !state.data[postIndex].isBookmarked;
    },
  },
});

export const {setVideoLike, setVideoBookmark} = AddPostSlice.actions;
export default AddPostSlice.reducer;
