import React, { Component } from 'react'
import "./bubble.css";

const Bubble = ({number}) => {
  if(number > 99){
    return <p className="PlusClass">99+</p> 
  }
  return <p className="bubbleClass">{number}</p>
}

export default Bubble;