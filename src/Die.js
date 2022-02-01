import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  valToWord(){
      let wordMap = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"};
      return wordMap[this.props.val];
  }

  handleClick(){
      this.props.handleClick(this.props.idx);
  }

  render() {
    return (
      <i
        className={`fa-solid fa-dice-${this.valToWord()}`}
        style={{ fontSize: '48px', color: this.props.locked ? '#a8a8a8' : 'black' }}
        onClick={this.handleClick}
        disabled={this.props.rollsLeft <= 0}
      />
    );
  }
}

export default Die;
