import { createSlice } from "@reduxjs/toolkit";

const toDos2 = createSlice({
    name: "toDos2Reducer",
    initialState: [],
    reducers: {
      add2: (state, action) => {
        state.push({ text: action.payload, id: Date.now(), toDoCase: "toDos2" });
      },
      remove2: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

export default toDos2;