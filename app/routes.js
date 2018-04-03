import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routes = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
  
        <hr />
  
        <Route exact path="/" render={() => <div>Home</div>} />
        
        <Route path="/about" render={() => <div>About</div>} />
        <Route path="/topics" render={() => <div>Topics</div>} />
      </div>
    </Router>
  );

  export default Routes