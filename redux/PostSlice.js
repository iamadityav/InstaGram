import {createSlice} from '@reduxjs/toolkit';
import {DummyData} from '../Data/Dummydata';

export const PostSlice = createSlice({
  name: 'Post',
  initialState: {
    selectedUser: null,
    messages: DummyData,
  },
});
