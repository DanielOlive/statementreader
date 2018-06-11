import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "./partials/login-form";
import { login } from "./actions";

class Login extends React.Component {
  state = {};

  onSubmit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div className="login">
        <h1>Login Page</h1>
        <LoginForm submit={this.onSubmit} />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connect(null, {
  login
})(Login);
