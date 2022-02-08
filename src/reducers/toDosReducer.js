import { createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
      add: (state, action) => {
        state.push({ text: action.payload.memo, id: Date.now(), toDoCase: "toDos" });
      },
      remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

export default toDos;