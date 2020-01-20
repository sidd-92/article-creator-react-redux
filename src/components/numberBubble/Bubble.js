import React from 'react'
import "./bubble.css";
import { connect } from "react-redux";
const mapStateToProps = state => {
  //console.log("STATE", state);
  return { totalArticles: state.totalArticles };
};

const Bubble = ({totalArticles}) => {
  //console.log("NUMBER BUBBLE PROPS", totalArticles);
  if(totalArticles > 99){
    return <p className="PlusClass">99+</p> 
  }
  return <p className="bubbleClass">{totalArticles}</p>
}

export default connect(mapStateToProps)(Bubble);