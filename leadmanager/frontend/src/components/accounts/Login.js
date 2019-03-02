import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log("Submit bro");
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
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
              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
            </div>

            <div className="form-group">
              <p>
                Don't have an account ? <Link to="/register ">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
