import React from "react";
import Formula from "./components/Formula";
import Output from "./components/Output";
import Buttons from "./components/Buttons";
import { isOperator, endsWithOperator } from "./utils/evaluation";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      output: "0",
      evaluated: false,
    };

    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.maxSignsWarning = this.maxSignsWarning.bind(this);
    this.erase = this.erase.bind(this);
    this.clear = this.clear.bind(this);
    this.equals = this.equals.bind(this);
  }

  maxSignsWarning() {
    const prevOutput = this.state.output;
    this.setState({
      output: "digit limit ",
    });
    setTimeout(() => this.setState({ output: prevOutput }), 800);
  }

  equals() {
    let { formula } = this.state;
    if (endsWithOperator.test(formula)) {
      formula = formula.slice(0, -1);
    }

    let mathExpression = formula;
    mathExpression = mathExpression.replace(/×/g, "*").replace(/÷/g, "/");
    let answer = (
      Math.round((eval(mathExpression) + Number.EPSILON) * 1e5) / 1e5
    ).toString();

    this.setState({
      formula: formula + "=" + answer,
      output: answer,
      evaluated: true,
    });
  }

  handleNumbers(e, key) {
    let { formula, output, evaluated } = this.state;
    const number = key || e.target.value;

    if (evaluated) {
      formula = "";
      output = "";
    }

    if (output.length > 11) {
      return this.maxSignsWarning();
    }
    if (formula.length > 49) {
      return this.maxSignsWarning();
    }

    if (output === "0" && number === "0") {
      output = "";
      formula = formula.slice(0, -1) === "0" ? "" : "0";
      return;
    } else if (output === "0" || isOperator.test(output)) {
      output = "";
    }

    this.setState({
      formula: formula + number,
      output: output + number,
      evaluated: false,
    });
  }

  handleDecimal() {
    let { formula, output, evaluated } = this.state;

    if (evaluated) {
      formula = "";
      output = "";
    }

    const lastSign = formula.slice(-1);
    //prevents from multiple dots in number
    if (`${output}`.includes(".")) return;
    //if formula is empty or operator is last adds 0 before dot
    if (formula === "" || isOperator.test(lastSign)) {
      formula += "0";
      output = "0";
    }

    this.setState({
      formula: formula + ".",
      output: output + ".",
      evaluated: false,
    });
  }

  handleOperators(e, key) {
    let { formula, output, evaluated } = this.state;
    const operator = key || e.target.value;
    const lastSign = formula.slice(-1);

    if (evaluated) formula = output;

    //prevents multiple operators in row
    if (isOperator.test(lastSign)) {
      formula = formula.slice(0, -1);
    }

    //if last number ends with dot prevent from clicking operator
    else if (/\./.test(lastSign)) return;
    //if operation starts with operator start with 0 in formula
    else if (output === "0" && formula === "") {
      formula += "0";
    }

    this.setState({
      formula: formula + operator,
      output: operator,
      evaluated: false,
    });
  }

  clear(e) {
    this.setState({
      formula: "",
      output: "0",
      evaluated: false,
    });
  }

  erase(e) {
    let { output, formula } = this.state;
    if (output.length <= 1)
      return this.setState({
        output: "0",
        formula: formula.slice(0, -1),
      });
    this.setState({
      output: output.slice(0, -1),
      formula: formula.slice(0, -1),
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
            clear={this.clear}
            decimal={this.handleDecimal}
            equals={this.equals}
          />
        </div>
      </div>
    );
  }
}

export default App;
