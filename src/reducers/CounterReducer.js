import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  'CounterReducer/getPosts',
  async (userData) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (data) => data.json()
  )
  return res
})

export default createSlice({
  name: "CounterReducer",
  initialState: {number: 0, color: 'black', loading: false, entities: []},
  reducers: {
    increment : (state, action) => {
      state.number = state.number + 1;
    },
    decrement : (state, action) => {
      state.number = state.number - 1;
    },
    setColor : (state, action) => {
      state.color = action.payload;
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  }
});