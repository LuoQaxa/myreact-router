import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from './src'

class App extends Component {
  render() {
    return (
      <div>
        test
      </div>
      // <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About</Link>
      //       </li>
      //     </ul>
      //     <hr />
      //     <Route exact path="/" component={Home} />
      //     <Route path="/about" component={About} />
      //   </div>
      // </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

ReactDOM.render( <App/> , document.getElementById("root"))