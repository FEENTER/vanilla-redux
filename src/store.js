import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import toDos from "./reducers/toDosReducer"
import toDos2 from "./reducers/toDos2Reducer"
import CounterReducer from "./reducers/CounterReducer"

const reducers = combineReducers({
  toDos: toDos.reducer
  , toDos2: toDos2.reducer
  , CounterReducer: CounterReducer.reducer
});

export default configureStore({ reducer: reducers });

export const { add, remove } = toDos.actions;
export const { add2, remove2 } = toDos2.actions;
export const { increment, decrement, setColor } = CounterReducer.actions;