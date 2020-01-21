import React, { Component } from "react";
let _ = require("lodash");
class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut", isOpen: false };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  toggleDropDown() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  selectOption(value, index) {
    this.setState({ value: value });
  }
  render() {
    return (
      <React.Fragment>
        <div onClick={() => this.toggleDropDown()} className="DropDown">
          <p>
            {this.state.value === "coconut"
              ? "Select a Value"
              : this.state.value}{" "}
            <span>&and;</span>
          </p>
          {this.state.isOpen && (
            <div>
              {["Option A", "Option B", "Option C"].map((value, index) => (
                <p
                  onClick={() => this.selectOption(value, index)}
                  className={
                    this.state.value === value
                      ? "OpenDropDownSelected"
                      : "OpenDropDown"
                  }
                >
                  {value}
                </p>
              ))}
            </div>
          )}
        </div>
        <h3>You Selected : {_.capitalize(this.state.value)}</h3>
      </React.Fragment>
    );
  }
}

export default DropDown;
