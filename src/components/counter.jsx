import React, { Component } from "react";

class Counter extends Component {
  state = {
    // it is a javascript object in which we can include any data.
    count: 0
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>zero</h1> : count;
  }

  formatColor() {
    let classColor = "badge m-2 badge-";
    classColor += this.state.count === 0 ? "warning" : "primary";
    return classColor;
  }
  render() {
    return (
      <div>
        <span className={this.formatColor()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
}

export default Counter;
