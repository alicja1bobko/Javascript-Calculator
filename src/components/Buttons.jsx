import React, { Component } from "react";
import { keyBank } from "../utils/keyBank";
import { isOperator } from "../utils/evaluation";

export class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  onKeyDown(e) {
    // keyBank.map((element) => {
    //   if (e.code === element.code) {
    //     let activeBtn = document.getElementById(element.id);
    //     activeBtn.classList.add("active");
    //   }
    // });
  }

  onKeyUp(e) {
    // console.log("here");
    // let activeBtn = document.getElementById(e.id);
    // activeBtn.classList.remove("active");
  }

  handleKeyPress(e) {
    // this.onKeyDown(e);
    // console.log(e.target.focus());
    // this._reactInternals.child.stateNode.focus();
    if (!isNaN(e.key) && e.key !== " ") this.props.number(null, e.key);
    else if (e.key === "." || e.key === ",") this.props.decimal();
    else if (isOperator.test(e.key)) this.props.operator(null, e.key);
    else if (/\*/.test(e.key)) this.props.operator(null, "×");
    else if (/\//.test(e.key)) this.props.operator(null, "÷");
    else if (e.key === "Escape") this.props.clear();
    else if (e.key === "Enter") this.props.equals();
    else if (e.key === "Backspace") this.props.erase();
  }

  render() {
    const { number, operator, clear, decimal, erase, equals } = this.props;
    return (
      <div className="buttons">
        <button
          id="clear"
          value="clear"
          className="clear modifier"
          onClick={clear}
        >
          AC
        </button>
        <button
          id="erase"
          value="erase"
          className="erase modifier"
          onClick={erase}
        >
          +/&minus;
        </button>
        <button id="mod" value="%" className="mod modifier" onClick={operator}>
          %
        </button>
        <button
          id="divide"
          value="÷"
          className="divide operator"
          onClick={operator}
        >
          &divide;
        </button>
        <button
          tabIndex={0}
          id="seven"
          value="7"
          className="seven number"
          onClick={number}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
        >
          7
        </button>
        <button id="eight" value="8" className="eight number" onClick={number}>
          8
        </button>
        <button id="nine" value="9" className="nine number" onClick={number}>
          9
        </button>
        <button
          id="multiply"
          value="×"
          className="multiply operator"
          onClick={operator}
        >
          &times;
        </button>
        <button id="four" value="4" className="four number" onClick={number}>
          4
        </button>
        <button id="five" value="5" className="five number" onClick={number}>
          5
        </button>
        <button id="six" value="6" className="six number" onClick={number}>
          6
        </button>
        <button
          id="subtract"
          value="-"
          className="subtract operator"
          onClick={operator}
        >
          &minus;
        </button>
        <button id="one" value="1" className="one number" onClick={number}>
          1
        </button>
        <button id="two" value="2" className="two number" onClick={number}>
          2
        </button>
        <button id="three" value="3" className="three number" onClick={number}>
          3
        </button>
        <button id="add" value="+" className="add operator" onClick={operator}>
          +
        </button>
        <button id="zero" value="0" className="zero number" onClick={number}>
          0
        </button>
        <button id="decimal" value="." className="decimal" onClick={decimal}>
          ,
        </button>
        <button
          id="equals"
          value="="
          className="equals operator"
          onClick={equals}
        >
          =
        </button>
      </div>
    );
  }
}

export default Buttons;
