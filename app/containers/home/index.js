import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../login/actions";

const Home = ({ isAuthenticated, logout }) => {
  const loc = { history: { location } };
  // console.log(loc);
  return (
    <div>
      <hr />
      <h1>Home</h1>
      <hr />
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
Home.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

const mapDispatchToProps = {
  logout: actions.logout
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
