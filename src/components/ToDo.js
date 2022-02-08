import React from "react";
import { connect } from "react-redux";
import { remove, remove2 } from "../store";
import { Link } from "react-router-dom";
import "./ToDo.css"

function ToDo({ text, id, toDoCase, onBtnClick }) {
  return (
    <li className="toDo">
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(arguments);
  return {
    onBtnClick: () => {
      if(ownProps.toDoCase === "toDos") {
        dispatch(remove(ownProps.id))
      } else if(ownProps.toDoCase === "toDos2"){
        dispatch(remove2(ownProps.id))
      }
    }
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
