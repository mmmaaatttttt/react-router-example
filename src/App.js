import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <h1>Welcome to my home page!!!</h1>
    <div>
      <p>Check out my pages:</p>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  </div>
);

const About = () => (
  <div>
    <h1>Would you like to know more about me?</h1>
    <p>Too bad, I like my privacy!</p>
    <Link to="/">Take me home</Link>
  </div>
);

const Contact = () => (
  <div>
    <p>Please do not contact me.</p>
    <Link to="/">Take me home</Link>
  </div>
);

const Instructor = props => {
  const { school, name } = props.match.params;
  return (
    <h1>
      Hi my name is {name} and I am an instructor at {school}!
    </h1>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/instructors/:name/:school" component={Instructor} />
      </div>
    );
  }
}

export default App;
