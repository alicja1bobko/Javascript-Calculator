import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    const { number, operator, erase } = this.props;
    return (
      <div className="buttons">
        <button
          id="clear"
          value="clear"
          className="clear modifier"
          onClick={erase}
        >
          AC
        </button>
        <button id="erase" value="erase" className="erase modifier">
          +/&minus;
        </button>
        <button id="mod" value="%" className="mod modifier" onClick={operator}>
          %
        </button>
        <button
          id="divide"
          value="/"
          className="divide operator"
          onClick={operator}
        >
          &divide;
        </button>
        <button id="seven" value="7" className="seven number" onClick={number}>
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
          value="x"
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
        <button id="decimal" value="," className="decimal">
          ,
        </button>
        <button id="equals" value="=" className="equals operator">
          =
        </button>
      </div>
    );
  }
}

export default Buttons;
