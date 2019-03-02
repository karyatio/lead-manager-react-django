import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirm: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password_confirm } = this.state;

    if (password !== password_confirm) {
      this.props.createMessage({ passwordNotMatch: "Password does not match" });
    } else {
      const newUser = { username, password, email };

      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password_confirm } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password_confirm"
                value={password_confirm}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
            </div>

            <div className="form-group">
              <p>
                Already have an account ? <Link to="/login ">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register, createMessage }
)(Register);
