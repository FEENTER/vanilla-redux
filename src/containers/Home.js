import React, { useState } from "react";
import { connect } from "react-redux";
import { add, add2 } from "../store";
import ToDo from "../components/ToDo";
import CounterContainer from "./CounterContainer";

function Home({ toDos, toDos2, addToDo, addToDo2 }) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  function onChange2(e) {
    setText2(e.target.value);
  }
  function onSubmit2(e) {
    e.preventDefault();
    addToDo2(text2);
    setText2("");
  }

  return (
    <>
      <CounterContainer />
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
      <p />
      <h1>To Do 2</h1>
      <form onSubmit={onSubmit2}>
        <input type="text" value={text2} onChange={onChange2} />
        <button>Add</button>
      </form>
      <ul>
        {toDos2.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { 
    toDos: state.toDos
    , toDos2: state.toDos2 };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(add({memo:text}))
    , addToDo2: text => dispatch(add2(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
