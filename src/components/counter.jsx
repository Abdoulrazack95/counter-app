import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Our App will unmount");
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>zero</h1> : value;
  }

  formatColor() {
    let classColor = "badge m-2 badge-";
    classColor += this.props.counter.value === 0 ? "warning" : "primary";
    return classColor;
  }

  render() {
    return (
      <div>
        <span className={this.formatColor()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
