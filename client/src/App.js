import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from './pages/Portfolio'
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact";
import Navbar from './components/Navbar'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
   
    <Router>
      <div>
        <Switch>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import React, { Component } from 'react';
// import Navbar from './components/Navbar'
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Navbar />
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//       </div>
//     );
//   }
// }

// export default App;
