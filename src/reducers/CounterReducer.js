import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const extraRGetPosts = createAsyncThunk(
  'CounterReducer/extraRGetPosts',
  async (userData) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
      (data) => data.json()
    )
    return res;
  }
);

export default createSlice({
  name: "CounterReducer",
  initialState: {number: 0, color: 'black', loading: false, entities: [], error: ''},
  reducers: {
    increment(state, action) {
      state.number = state.number + 1;
    },
    decrement(state, action) {
      state.number = state.number - 1;
    },
    setColor : (state, action) => {
      state.color = action.payload;
    }
  },
  extraReducers: {
    [extraRGetPosts.pending]: (state) => {
      state.loading = true;
    },
    [extraRGetPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [extraRGetPosts.rejected]: (state, action) => {
      state.loading = false;
      // action.error인 것을 주의
      state.error = action.error; 
    },
  }
});