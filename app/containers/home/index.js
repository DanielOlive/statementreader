import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ isAuthenticated }) => {
  const loc = { history: { location } };
  // console.log(loc);
  return (
    <div>
      <hr />
      <h1>Home</h1>
      <hr />
      {isAuthenticated ? (
        <button>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
Home.propTypes = {
  isAuthenticated: PropTypes.bool.required
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
