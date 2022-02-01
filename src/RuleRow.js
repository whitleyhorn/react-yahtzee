import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let isActive = (typeof this.props.score === 'undefined') ? 
            "RuleRow-active" : 
            "RuleRow-disabled";

    return (
      <tr className={`RuleRow ${isActive}`} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;
