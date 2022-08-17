import React, { Component } from "react";

export class Output extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return <div className="output--screen">{this.props.outputScreen}</div>;
  }
}

export default Output;
