import React from "react";
// import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import FizzBuzz from "./components/fizzBuzz";
import ReverseMe from "./components/reverseMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/fizzBuzz" component={FizzBuzz} />
        <Route path="/reverseMe" component={ReverseMe} />
      </Switch>
    </Router>
  );
}

export default App;
