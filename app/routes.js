import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import GlobalNav from "./components/global-navigation"
import Footer from "./components/footer"
import Dashboard from "./containers/dashboard"
import Home from "./containers/home"

const Routes = () => (
  <Router>
    <div className="grid-container">
      <GlobalNav />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        {/*<Route path="/topics" render={() => <div>Topics</div>} />*/}
      </div>
      <Footer />
    </div>
  </Router>
)

export default Routes
