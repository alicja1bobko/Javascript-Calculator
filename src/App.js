import React from "react";
import Formula from "./components/Formula";
import Output from "./components/Output";
import Buttons from "./components/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      output: "0",
    };

    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.erase = this.erase.bind(this);
  }

  handleNumbers(e) {
    let { formula, output } = this.state;
    const number = e.target.value;
    if (output === "0") output = "";
    if (isNaN(parseFloat(output))) {
      output = "";
    }

    this.setState({
      formula: formula + number,
      output: output + number,
    });
  }

  handleOperators(e) {
    let { formula, output } = this.state;
    const operator = e.target.value;
    if (isNaN(parseFloat(output))) {
      formula = formula.slice(0, -1);
    }

    this.setState({
      formula: formula + operator,
      output: operator,
    });
  }

  erase(e) {
    this.setState({
      formula: "",
      output: "0",
    });
  }

  render() {
    return (
      <div className="calculator centered container-fluid">
        <div className="board">
          <Formula formulaScreen={this.state.formula} />
          <Output outputScreen={this.state.output} />
          <Buttons
            number={this.handleNumbers}
            operator={this.handleOperators}
            erase={this.erase}
          />
        </div>
      </div>
    );
  }
}

export default App;
