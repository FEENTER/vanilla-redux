import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./store";

/* 
  Redux 참고 사이트
  https://redux.vlpt.us/
  https://d2.naver.com/helloworld/1848131#ch3-1
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
