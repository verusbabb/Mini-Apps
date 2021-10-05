import * as React from "react";
import ReactDOM from "react-dom";
import FizzBuzz from "./components/fizzBuzz";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <FizzBuzz />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
