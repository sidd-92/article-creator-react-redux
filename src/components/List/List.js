import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  console.log("STATE", state);
  return { articles: state.articles };
};
const ConnectedList = (props) => {
  return (
    <ul>
      {props.articles.map((el,index) => (
        <li key={index}>{el.title}</li>
      ))}
    </ul>
  );
};

const List = connect(mapStateToProps)(ConnectedList);
export default List;
