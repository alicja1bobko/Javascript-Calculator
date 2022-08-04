import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button id="clear" value="clear" className="clear modifier">
          AC
        </button>
        <button id="erase" value="erase" className="erase modifier">
          +/&minus;
        </button>
        <button id="mod" value="mod" className="mod modifier">
          %
        </button>
        <button id="divide" value="divide" className="divide operator">
          &divide;
        </button>
        <button id="seven" value="7" className="seven number">
          7
        </button>
        <button id="eight" value="8" className="eight number">
          8
        </button>
        <button id="nine" value="9" className="nine number">
          9
        </button>
        <button id="multiply" value="x" className="multiply operator">
          &times;
        </button>
        <button id="four" value="4" className="four number">
          4
        </button>
        <button id="five" value="5" className="five number">
          5
        </button>
        <button id="six" value="6" className="six number">
          6
        </button>
        <button id="subtract" value="-" className="subtract operator">
          &minus;
        </button>
        <button id="one" value="1" className="one number">
          1
        </button>
        <button id="two" value="2" className="two number">
          2
        </button>
        <button id="three" value="3" className="three number">
          3
        </button>
        <button id="add" value="+" className="add operator">
          +
        </button>
        <button id="zero" value="0" className="zero number">
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
