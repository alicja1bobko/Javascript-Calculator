import React from "react";
import Formula from "./components/Formula";
import Output from "./components/Output";
import Buttons from "./components/Buttons";

class App extends React.Component {
  render() {
    return (
      <div className="calculator centered container-fluid">
        <div className="board">
          <Formula />
          <Output />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
