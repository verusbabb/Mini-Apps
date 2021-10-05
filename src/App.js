import React from "react";
// import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import FizzBuzz from "./pages/fizzBuzz";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/fizzBuzz" component={FizzBuzz} />
      </Switch>
    </Router>
  );
}

export default App;
