import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalNav from "./components/global-navigation";
import Footer from "./components/footer";
import Dashboard from "./containers/dashboard";
import Home from "./containers/home";
import Login from "./containers/login";

const Routes = () => (
  <div className="grid-container ui container">
    <GlobalNav />
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/account" render={() => <div>Account</div>} />
    </div>
    <Footer />
  </div>
);

export default Routes;
