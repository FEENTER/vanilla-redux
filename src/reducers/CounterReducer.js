import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "CounterReducer",
  initialState: {number: 0, color: 'black'},
  reducers: {
    increment : (state, action) => {
      state.number = state.number + 1
    },
    decrement : (state, action) => {
      state.number = state.number - 1
    },
    setColor : (state, action) => {
      state.color = action.payload
    }
  }
});