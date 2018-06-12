import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import GlobalNav from "./components/global-navigation";
import Footer from "./components/footer";
import Dashboard from "./containers/dashboard";
import Home from "./containers/home";
import Login from "./containers/login";
import UserRoute from "./components/user-route";
import GuestRoute from "./components/guest-route";

const Routes = ({ location }) => (
  <div className="grid-container ui container">
    <GlobalNav />
    <div className="container">
      <Route location={location} exact path="/" component={Home} />
      <GuestRoute location={location} exact path="/login" component={Login} />
      <UserRoute
        location={location}
        exact
        path="/dashboard"
        component={Dashboard}
      />
      <Route
        location={location}
        exact
        path="/account"
        render={() => <div>Account</div>}
      />
    </div>
    <Footer />
  </div>
);

Routes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default Routes;
